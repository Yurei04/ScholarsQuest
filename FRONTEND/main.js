const userClassPlayer1 = require("../BACKEND");
const userClassPlayer2 = require("../BACKEND");

const player1Lvl = require("../BACKEND");
const player2Lvl = require("../BACKEND");

const player1Name = require("../BACKEND");
const player2Name = require("../BACKEND");

let timer = require("../BACKEND");

const gameState = {
    player1: {
        name: player1Name,
        level: player1Lvl,
        health: 100,
        class: userClassPlayer1,
        turn: "active",

    },
    player2: {
        name: player2Name,
        level: player2Lvl,
        health: 100,
        class: userClassPlayer2,
        Turn: "active",
    },

    time: timer,
    phase: null,
};

function loadBattlePhase(playerClass) {
    switch (playerClass) {
        case "histLitBattle" :
            import("../BACKEND/PHASES/HistLitBattle").then((module) => {
                module.startPhase(gameState);
            });
            break;
        case "sciChemBattle" :
            import("../BACKEND/PHASES/SciChemBattle").then((module) => {
                module.startPhase(gameState);
            });
            break;
        case "histLitBattle" :
            import("../BACKEND/PHASES/TechMathBattle").then((module) => {
                module.startPhase(gameState);
            });
            break;
    }
};



