const grid = document.querySelector('.grid');

const spanPlayer = document.querySelector('.player');

const timer = document.querySelector('.timer');

const characters = [
    'Cássio',
    'Gil',
    'Biro',
    'Fagner',
    'Balbuena',
    'Renato Augusto',
    'Paulinho',
    'Giuliano'
];

const createElement = (tag, className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if(disabledCards.length == 20){
        clearInterval(this.loop);
        alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi ${time.innerHTML}`);
    }
}

const checkCards = () =>{
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if(firstCharacter === secondCharacter){
        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();
    }

}

const createCard = (character) =>{
    const card = createElement('div', 'card');
    const front = createElement('div', 'face-front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url(../images/${character}.png)`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character);

    return card;

}


