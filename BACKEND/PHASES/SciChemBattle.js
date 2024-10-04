// Game data - Different sets for different difficulties
const simpleGameData = [
    { images: ["img1.jpg", "img2.jpg"], answer: "cat" },
    { images: ["img3.jpg", "img4.jpg"], answer: "sun" }
];

const intermediateGameData = [
    { images: ["img5.jpg", "img6.jpg"], answer: "apple" },
    { images: ["img7.jpg", "img8.jpg"], answer: "tree" },
    { images: ["img9.jpg", "img10.jpg"], answer: "dog" }
];

const complexGameData = [
    { images: ["img11.jpg", "img12.jpg"], answer: "mountain" },
    { images: ["img13.jpg", "img14.jpg"], answer: "river" },
    { images: ["img15.jpg", "img16.jpg"], answer: "ocean" },
    { images: ["img17.jpg", "img18.jpg"], answer: "bicycle" }
];

let currentRound = 0;
let score = 0;
let timeLeft = 30;
let timer;
let gameData = []; // This will hold the selected difficulty's game data

// Show the difficulty selection screen
function showDifficulty() {
    document.getElementById("activity-container").style.display = "none";
    document.getElementById("difficulty-screen").style.display = "block";
}

// Start the game based on the selected difficulty
function startGame(difficulty) {
    document.getElementById("difficulty-screen").style.display = "none";
    document.getElementById("game-container").style.display = "block";

    // Set the game data based on difficulty
    if (difficulty === 'simple') {
        gameData = simpleGameData;
    } else if (difficulty === 'intermediate') {
        gameData = intermediateGameData;
    } else if (difficulty === 'complex') {
        gameData = complexGameData;
    }

    loadImages(); // Start the game with the first set of images
    startTimer(); // Start the timer
}

// Load images for the current round
function loadImages() {
    if (currentRound < gameData.length) {
        document.getElementById("image1").src = gameData[currentRound].images[0];
        document.getElementById("image2").src = gameData[currentRound].images[1];
        document.getElementById("wordGuess").value = ""; // Clear input
        document.getElementById("feedback").textContent = ""; // Clear feedback
    } else {
        currentRound = 0; // Loop back to the first round if all rounds are completed
        loadImages();
    }
}

// Check if the guess is correct
function checkAnswer() {
    const userGuess = document.getElementById("wordGuess").value.toLowerCase();
    const correctAnswer = gameData[currentRound].answer;

    if (userGuess === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct!";
        score++;
        document.getElementById("score").textContent = score; // Update score
        currentRound++;
        setTimeout(loadImages, 1000); // Move to the next round after 1 second
    } else {
        document.getElementById("feedback").textContent = "Try again!";
    }
}

// Timer countdown logic
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

// End the game when time runs out
function endGame() {
    document.getElementById("endMessage").textContent = `Time's up! You guessed ${score} words correctly.`;
    document.getElementById("wordGuess").disabled = true; // Disable input
    document.querySelector("button").disabled = true; // Disable submit button
}

// Start the game when the page loads
window.onload = () => {
    document.getElementById("activity-container").style.display = "block"; // Show start screen initially
};
