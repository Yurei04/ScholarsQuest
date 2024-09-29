let words = ["NATURE", "DISEASE", "OXYGEN", "CLIMATE"];

let spells = {
    "simple": {
        questions: 1,
        damage: 2
    },

    "intermediate": {
        questions: 2,
        damage: 4
    },

    "complex": {
        questions: 3,
        damage: 6
    }
}

let guesses = 0;
let guessLimit = 3;
let questionsAnswered = 0;
let currentSpell;
let randomWord;
let countDownTimer;
let timeLeft = 30;

function selectSpell(spell) {
    let spellType = spell.id;

    switch(spellType) {
        case "simple": {
            if(questionsAnswered != simple.questions) {

            } else {
                spellComplexityFunction()
            }
        }
        break;
        case "intermediate" : {
            if(questionsAnswered != intermediate.questions) {

            } else {
                spellComplexityFunction()
            }
        } 
        break;
        case "complex": {
            if(questionsAnswered != complex.questions) {

            } else {
                spellComplexityFunction()
            }
        }
    }

    return spell
}

function spellComplexityFunction() {
    clearInterval(countDownTimer)
    questionsAnswered += 1
    spellActivation();
    delay(3000)
    clearing();
    wordBoxMaker(generateWord());
    correct();

}

function generateWord() {
    let randomWord = words[Math.floor(Math.random() * words.length)];
    let cuttedWords = randomWord.split("");

    return cuttedWords;
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); 
};

function wordBoxMaker() {
    let boxContainer = document.getElementById("boxes");

    boxContainer.innerHTML = "";

    cuttedWords.forEach(letter => {
        let createBox = document.createElement("div");
        createBox.className = "letter-box";
        createBox.innerHTML = "_"
        boxContainer.appendChild(createBox);

    });
}

function imgShow() {
    let imgContainer1 = document.getElementById("img-container1");
    let imgContainer2 = document.getElementById("img-container2");

    imgContainer1.innerHTML = "";
    imgContainer2.innerHTML = "";

    let createImg1 = document.createElement("img");
    let firstImg = createImg1.src = "hint2- " + randomWord;
    imgContainer1.appendChild(firstImg);


    let createImg2 = document.createElement("img");
    let secondImg = createImg2.src = "hint1- " + randomWord;
    imgContainer2.appendChild(secondImg);
}

function checking() {
    let guessedWord = Array.from(document.querySelectorAll(".letter-box")).map(box => box.innerHTML).join("");

    if (guessedWord === randomWord) {
        spellComplexityFunction()
    } else {
        incorrect();
    }
};


function incorrect() {
    document.querySelectorAll("p").forEach(typedWord => {
        typedWord.style.color = "red";
    });
    guesses += 1;

    if(guesses == guessLimit) {
        console("Spell Not activated")
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


damage.export 
