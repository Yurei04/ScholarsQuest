let simpleProblems =  {
    problem1: {
        question: "1 + 1 = ?",
        answer: 2,
    },
}

let intermediateProblems =  {
    problem1: {
        question: "1 + 1 = ?",
        answer: 2,
    },
}

let complexProblems =  {
    problem1: {
        question: "1 + 1 = ?",
        answer: 2,
    },
}

let runes = {
    "simple": {
        problems: 3,
        maxTries: 6,
        damage: 3
    },
    "intermediate": {
        problems: 4,
        maxTries: 4,
        damage: 6
    },
    "complex": {
        problems: 6,
        maxTries: 4,
        damage: 9
    }
}

let currentRune;
let tryLimit = 0;
let tries = 0;
let correctAnswers = 0;
let triedAnswers = 0;
let randomProblem;


function selectSorcery(rune) {
    let runeType = rune.id;
    currentRune = runes[runeType];
    tryLimit = currentRune.maxTries;
    triedAnswers = 0;
    correctAnswers = 0;

}

function formulaProblemGenerator() {
    switch(currentRune) {
        case "simple": {
            randomProblem = simpleProblems[Math.floor(Math.random() * randomProblem.length)];
        }
        break;
        case "intermediate": {
            randomProblem = intermediateProblems[Math.floor(Math.random() * randomProblem.length)];
        }
        break;
        case "complex": {
            randomProblem = complexProblems[Math.floor(Math.random() * randomProblem.length)];
        }
        break;
    }
}

function checkingProblem() {
    let trueAnswer = document.getElementById("answer").innerHTML;

    if(trueAnswer === randomProblem.answer) {
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

async function runeComplexityFunction() {

}

function runeActivation() {

}


async function wrong() {

}

function clearing() {
    
}
