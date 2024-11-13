const buttons = document.querySelectorAll('.game-button');
const scoreDisplay = document.getElementById('score');
const b1 = document.getElementById('button1');
const b2 = document.getElementById('button2');
const b3 = document.getElementById('button3');
const b4 = document.getElementById('button4');
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

b1.addEventListener('click', e=> {
    if (b1.className != "active"){
        scoreDisplay = scoreDisplay - 1;
        document.getElementById('scoreDsiplay').textContent = scoreDisplay;
    }

})

startGame();