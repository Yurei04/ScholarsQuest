const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    player1: {
        name: String,
        level: Number,
        health: Number,
        class: String,
        turn: String,
    },
    player2: {
        name: String,
        level: Number,
        health: Number,
        class: String,
        turn: String,
    },
    time: Number,
    phase: String
});

const Game = mongoose.model("Game", gameSchema);
module.export = Game;
