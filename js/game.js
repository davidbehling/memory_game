const grid = document.querySelector('.grid')
const player = document.querySelector('.player')
const timer = document.querySelector('.timer')

const characters = ['beth', 'jerry', 'jessica', 'meeseeks', 'morty', 'pessoa-passaro', 'pickle-rick', 'rick', 'scroopy', 'summer']

const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className
    return element
} 

let firstCard = ''
let secondCard = ''

const clear = () => {    
    firstCard = ''
    secondCard = ''
}

const success = () => {
    firstCard.firstChild.classList.add('disabled-card')
    secondCard.firstChild.classList.add('disabled-card')
    clear()
}

const error = () => {
    firstCard.classList.remove('reveal-card')
    secondCard.classList.remove('reveal-card')
    clear()
}

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card')

    if (disabledCards.length === 20) {
        setTimeout(() => {
            clearInterval(this.loop)
            alert(`Congratulation, ${player.innerHTML}!!! Your time this: ${timer.innerHTML}`)
        }, 500)        
    }
}

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character')
    const secondCharacter = secondCard.getAttribute('data-character')

    if (firstCharacter === secondCharacter) {
        success()
        checkEndGame()
    } else {
        setTimeout(() => {
            error()
        }, 500)        
    }
}

const revealCard = ({ target }) => {
    let card = target.parentNode
    console.log({
        card: card, 
        reveal: card.className.includes('reveal-card'),
        firstCard: firstCard,
        secondCard: secondCard
    })
    if (card.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === '') {
        card.classList.add('reveal-card')
        firstCard = card
    } else if (secondCard === '') {
        card.classList.add('reveal-card')
        secondCard = card

        checkCards()
    }
}

const createCard = (character) => {
    const card = createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')

    front.style.backgroundImage = `url('../images/${character}.png')`

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revealCard)
    card.setAttribute('data-character', character)

    return card
}

const loadGame = () => {
    const duplicateCharacters = [ ...characters, ...characters ]

    const suffledArray = duplicateCharacters.sort(() => Math.random() - 0.5)

    suffledArray.forEach((character) => {
        const card = createCard(character)
        grid.appendChild(card)
    })
}

const startTimer = () => {
    this.loop = setInterval(() => {
        timer.innerHTML = +timer.innerHTML + 1
    }, 1000)
}

window.onload = () => {    
    player.innerHTML = localStorage.getItem('player')
    startTimer()
    loadGame()
}




