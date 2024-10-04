let currentQuestion = 0;
let totalQuestions = 0;
let score = 0;
let timer;
let timeLeft = 60;
let difficultyQuestions = {
    simple: 3,
    intermediate: 5,
    complex: 7
};
let currentDifficulty = '';
let currentAnswer = 0;

// Function to display the difficulty screen
function showDifficultyScreen() {
    // Hide start screen and show difficulty screen
    document.getElementById('activity-container').style.display = 'none';
    document.getElementById('difficulty-screen').style.display = 'flex';
}

// Function to start the game
function startGame(difficulty) {
    // Set difficulty and number of questions
    totalQuestions = difficultyQuestions[difficulty];
    currentDifficulty = difficulty;

    // Hide difficulty screen and show game container
    document.getElementById('difficulty-screen').style.display = 'none';
    document.querySelector('.game-container').style.display = 'flex';

    // Start game settings
    score = 0;
    currentQuestion = 0;
    timeLeft = 60;

    // Update score and timer
    document.getElementById('score').innerText = score;
    document.getElementById('timer').innerText = timeLeft;

    // Start timer
    timer = setInterval(countdown, 1000);

    // Load the first question
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestion >= totalQuestions) {
        endGame();
        return;
    }

    // Generate a random math question (multiplication, addition, subtraction, division)
    const operators = ['+', '-', '*', '/'];
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = operators[Math.floor(Math.random() * operators.length)];

    // Calculate the correct answer
    switch (operator) {
        case '+':
            currentAnswer = num1 + num2;
            break;
        case '-':
            currentAnswer = num1 - num2;
            break;
        case '*':
            currentAnswer = num1 * num2;
            break;
        case '/':
            currentAnswer = (num1 / num2).toFixed(2); // Round division to 2 decimal places
            break;
    }

    // Display the question
    document.getElementById('question').innerText = `${num1} ${operator} ${num2}`;
    currentQuestion++;
}

function submitAnswer() {
    const userAnswer = document.getElementById('answer-input').value;

    if (userAnswer == currentAnswer) {
        score++;
        document.getElementById('score').innerText = score;
        document.getElementById('feedback').innerText = 'Correct!';
    } else {
        document.getElementById('feedback').innerText = 'Incorrect!';
    }

    // Clear the input
    document.getElementById('answer-input').value = '';

    // Load the next question
    loadQuestion();
}

function countdown() {
    timeLeft--;
    document.getElementById('timer').innerText = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(timer);
        endGame();
    }
}

function endGame() {
    clearInterval(timer);
    document.getElementById('feedback').innerText = `Game Over! Your score: ${score}`;
    document.querySelector('.game-container').style.display = 'none';
    document.getElementById('difficulty-screen').style.display = 'flex';
}
