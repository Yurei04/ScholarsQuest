import { enemyHP, reduceEnemyHp } from "./";

let simpleProblems =  {
    problem1: { question: "1 + 1 = ?", answer: 2 },
    problem2: { question: "3 - 2 = ?", answer: 1 },
    problem3: { question: "5 * 1 = ?", answer: 5 }
};

let intermediateProblems =  {
    problem1: { question: "10 / 2 = ?", answer: 5 },
    problem2: { question: "7 + 3 = ?", answer: 10 },
    problem3: { question: "12 - 5 = ?", answer: 7 },
    problem4: { question: "8 * 2 = ?", answer: 16 }
};

let complexProblems =  {
    problem1: { question: "12 / 3 = ?", answer: 4 },
    problem2: { question: "6 * 6 = ?", answer: 36 },
    problem3: { question: "25 - 7 = ?", answer: 18 },
    problem4: { question: "50 + 25 = ?", answer: 75 },
    problem5: { question: "100 / 5 = ?", answer: 20 },
    problem6: { question: "45 - 15 = ?", answer: 30 }
};

let runes = {
    "simple": { problems: 3, maxTries: 6, damage: 3 },
    "intermediate": { problems: 4, maxTries: 4, damage: 6 },
    "complex": { problems: 6, maxTries: 4, damage: 9 }
};

let currentRune;
let tryLimit = 0;
let tries = 0;
let correctAnswers = 0;
let randomProblem;


function selectSorcery(rune) {
    let runeType = rune.id;
    currentRune = runes[runeType];
    tryLimit = currentRune.maxTries;
    triedAnswers = 0;
    correctAnswers = 0;
    formulaProblemGenerator();
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function formulaProblemGenerator() {
    let problems;
    if (currentRune === runes.simple) {
        problems = Object.values(simpleProblems);
    } else if (currentRune === runes.intermediate) {
        problems = Object.values(intermediateProblems);
    } else if (currentRune === runes.complex) {
        problems = Object.values(complexProblems);
    } 
    randomProblem = problems[Math.floor(Math.random() * problems.length)];
}

function checkingProblem() {
    let trueAnswer = parseInt(document.getElementById("answer").value);

    if (trueAnswer === randomProblem.answer) {
        correctAnswers += 1;
        if(correctAnswers === runes.problems) {
            runeActivation()
        } else {
            runeComplexityFunction()
        }
    } else {
        wrong()
    }
}

document.getElementById("techChecker").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkingProblem();
    }
});

async function runeComplexityFunction() {
    if(correctAnswers === currentRune.problems) {
        runeActivation();
        return;
    } else {
        clearInterval(countDownTimer);
        tries = 0;
        await delay(3000)
        clearing();
        formulaProblemGenerator();
    }
}

function runeActivation() {
    let damage = currentRune.damage;
    reduceEnemyHp(damage);

    if(enemyHP <= 0) {
        return;
    } else {
        runeComplexityFunction();
    }
}


function wrong() {
    tries += 1;
    if (tries >= tryLimit) {
        console.log("Out of tries. Rune failed.");
        clearing(); 
    } else {
        console.log(`Incorrect. You have ${tryLimit - tries} tries left.`);
    }
}


function clearing() {
    let problemContainer = document.getElementById("problem-container");
    problemContainer.innerHTML = "";
    tries = 0;
    clearInterval(countDownTimer);
}
