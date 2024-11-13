const buttons = document.querySelectorAll('.game-button');
const scoreDisplay = document.getElementById('score');
let score = 0;
let activeButton = null;
let reactionTimeout;

function startGame() {
    pickRandomButton();

    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
}

function pickRandomButton() {
    clearActiveButton();

const randomIndex = Math.floor(Math.random() * buttons.length);
activeButton = buttons[randomIndex];
activeButton.classList.add('active');

reactionTimeout = setTimeout(() => {
    score -= 1;
    updateScore();
    pickRandomButton();
}, 1000);
} 

function handleButtonClick(event) {
    if (event.target === activeButton) {
        clearTimeout(reactionTimeout);
        score += 1;
        updateScore();
        pickRandomButton();
    } else {
        score -= 1;
        updateScore();
    }
}

function clearActiveButton() {
    if (activeButton) {
        activeButton.classList.remove('active')
    }
}

function updateScore() {
    scoreDisplay.innerText = `Score: ${score}`;
}

startGame();