import { enemyHP, reduceEnemyHp } from "./";

let words = ["NATURE", "DISEASE", "OXYGEN", "CLIMATE"];

var temp = document.querySelector('.time');
var button = document.querySelector("#starting");
var timerDiv = document.querySelector(".time");
var scoreDiv = document.querySelector(".score");
let guesses = 0;
let guessLimit = 0;
let questionsAnswered = 0;
let correctGuesses = 0;
let currentSpell;
let randomWord;
let countDownTimer;

let spells = {
    "simple": {
        questions: 1,
        maxGuesses: 3,
        damage: 2
    },
    "intermediate": {
        questions: 2,
        maxGuesses: 2,
        damage: 4
    },
    "complex": {
        questions: 3,
        maxGuesses: 1,
        damage: 6
    }
}

function countdown() {
    points = 0;
    var timer = setInterval(function(){
      button.disabled = true;
      seconds--;
      temp.innerHTML = seconds;
      if (seconds === 0) {
        alert("Game over! Your total damage dealt is " + points);
        scoreDiv.innerHTML = "0";
        words.innerHTML = "";
        button.disabled = false;
        clearInterval(timer);
        seconds = 60;
        timerDiv.innerHTML = "60";
        button.disabled = false;	
      }
    }, 1000);
  }

function showOptions() {
    document.querySelector(".spells").style.display = 'flex';
}
  
function selectSpell(spell) {
    let spellType = spell.id;
    currentSpell = spells[spellType]; 
    guessLimit = currentSpell.maxGuesses;
    questionsAnswered = 0;
    correctGuesses = 0;
    document.querySelector(".spells").style.display = 'none';
    wordBoxMaker(generateWord());
    imgShow();
}

button.addEventListener("click", function(e){
    countdown();
    showOptions()
    button.disabled = true;
  });

async function spellComplexityFunction() {
    if (questionsAnswered === currentSpell.questions) { 
        spellActivation()
        return;
    } else {
        clearInterval(countDownTimer);
        guesses = 0;
        questionsAnswered += 1;
        await delay(3000); 
        clearing();
        wordBoxMaker(generateWord());
        imgShow();
    }
}

function spellActivation() {
    let damage = currentSpell.damage;
    reduceEnemyHp(damage);

    if(enemyHP <= 0) {
        return;
    } else {
        spellComplexityFunction();
    }
}

function generateWord() {
    randomWord = words[Math.floor(Math.random() * words.length)]; 
    let cuttedWords = randomWord.split("");
    return cuttedWords;
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); 
}

function wordBoxMaker(cuttedWords) {
    let boxContainer = document.getElementById("boxes");
    boxContainer.innerHTML = "";

    cuttedWords.forEach(letter => {
        let createBox = document.createElement("div");
        createBox.className = "letter-box";
        createBox.innerHTML = "_";
        boxContainer.appendChild(createBox);
    });
}

function imgShow() {
    let imgContainer1 = document.getElementById("img-container1");
    let imgContainer2 = document.getElementById("img-container2");

    imgContainer1.innerHTML = "";
    imgContainer2.innerHTML = "";

    let createImg1 = document.createElement("img");
    createImg1.src = "hint2- " + randomWord;
    imgContainer1.appendChild(createImg1);
    
    let createImg2 = document.createElement("img");
    createImg2.src = "hint1- " + randomWord;
    imgContainer2.appendChild(createImg2);    
}

function checking() {
    let guessedWord = Array.from(document.querySelectorAll(".letter-box")).map(box => box.innerHTML).join("");

    if (guessedWord === randomWord) {
        correctGuesses += 1;
        if (correctGuesses === currentSpell.questions) {
            spellActivation()
        } else {
            spellComplexityFunction();
        }
    } else {
        incorrect();
    }
}


document.getElementById("SciChecker").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkingProblem();
    }
});


async function incorrect() {
    guesses += 1;

    if (guesses === guessLimit) {
        clearing()
    } else {
        document.querySelectorAll("p").forEach(typedWord => {
            typedWord.style.color = "red";
        });
        await delay(2000);
        document.querySelectorAll("p").forEach(typedWord => {
            typedWord.style.color = "#fff";
        });
    }
}

function clearing() {
    let boxContainers = document.getElementById("boxes");
    let imgContainer1 = document.getElementById("img-container1");
    let imgContainer2 = document.getElementById("img-container2");

    boxContainers.innerHTML = "";
    imgContainer1.innerHTML = "";
    imgContainer2.innerHTML = "";
    guesses = 0;
    clearInterval(countDownTimer);
}
