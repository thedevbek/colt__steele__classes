const playerOne = document.querySelector('#playerOne');
const playerTwo = document.querySelector('#playerTwo');
const resetBtn = document.querySelector('#reset');
const scoreOneBtn = document.querySelector('#scoreOneBtn');
const scoreTwoBtn = document.querySelector('#scoreTwoBtn');
let winningScoreSelect = document.querySelector('#playTo');

let playerOneScore = 0;
let playerTwoScore = 0;
let winningScore = 3;
let isGameOver = false;

scoreOneBtn.addEventListener('click', function () {
    if (!isGameOver) {
        playerOneScore += 1;
    }
    if (playerOneScore === winningScore) {
        isGameOver = true;
        playerOne.classList.add('has-text-success');
        playerTwo.classList.add('has-text-danger');
        scoreOneBtn.disabled = true;
        scoreTwoBtn.disabled = true;
    }
    playerOne.textContent = playerOneScore;
})

scoreTwoBtn.addEventListener('click', function () {
    if (!isGameOver) {
        playerTwoScore += 1;
    }
    if (playerTwoScore === winningScore) {
        isGameOver = true;
        playerTwo.classList.add('has-text-success');
        playerOne.classList.add('has-text-danger');
        scoreOneBtn.disabled = true;
        scoreTwoBtn.disabled = true;
    }
    playerTwo.textContent = playerTwoScore;
})

winningScoreSelect.addEventListener('change', function ()  {
    winningScore = parseInt(this.value);
    reset();
})

resetBtn.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOne.textContent = 0;
    playerTwo.textContent = 0;
    playerOne.classList.remove('has-text-success', 'has-text-danger');
    playerTwo.classList.remove('has-text-success', 'has-text-danger');
    scoreOneBtn.disabled = false;
    scoreTwoBtn.disabled = false;
}

