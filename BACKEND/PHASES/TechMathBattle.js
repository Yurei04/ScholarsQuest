export function startPhase(gameState) {
    
    const damage = questionType;
    const time = 3000;

    let questionType = {
        simple: {
            question: simpleType,
            damage: 3,
            amount: 1
        },

        intermediate: {
            question: imtermidiateType,
            damage: 6,
            amount: 2
        },

        complex: {
            question: complexType,
            damage: 12,
            amount: 3
        }
    }

    questionGame();
}

function questionGame() {
    
}