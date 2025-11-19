const choices = {
    kivi: "✊",
    paperi: "✋",
    sakset: "✌️"
};

const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const messageP = document.getElementById("message");
const playerHandDiv = document.getElementById("player-hand");
const computerHandDiv = document.getElementById("computer-hand");
const resetButton = document.getElementById("reset");

let playerScore = 0;
let computerScore = 0;

document.querySelectorAll(".choice").forEach((button) => {
    button.addEventListener("click", () => {
        const playerChoice = button.dataset.choice;
        playRound(playerChoice);
    });
});

resetButton.addEventListener("click", resetGame);

function playRound(playerChoice) {
    const computerChoice = randomChoice();
    const result = getResult(playerChoice, computerChoice);

    // Päivitä käsikuvat
    playerHandDiv.textContent = choices[playerChoice];
    computerHandDiv.textContent = choices[computerChoice];

    // Päivitä pisteet ja viesti
    if (result === "tasapeli") {
        messageP.textContent = getExplanation(playerChoice, computerChoice) + " – tasapeli!";
    } else if (result === "pelaaja") {
        playerScore++;
        playerScoreSpan.textContent = playerScore;
        messageP.textContent = getExplanation(playerChoice, computerChoice) + " – voitit!";
    } else {
        computerScore++;
        computerScoreSpan.textContent = computerScore;
        messageP.textContent = getExplanation(playerChoice, computerChoice) + " – hävisit!";
    }
}

function randomChoice() {
    const keys = Object.keys(choices);
    const index = Math.floor(Math.random() * keys.length);
    return keys[index];
}

function getResult(player, computer) {
    if (player === computer) return "tasapeli";

    if (
        (player === "kivi" && computer === "sakset") ||
        (player === "paperi" && computer === "kivi") ||
        (player === "sakset" && computer === "paperi")
    ) {
        return "pelaaja";
    }

    return "tietokone";
}

function getExplanation(player, computer) {
    if (player === computer) {
        return "Sama valinta";
    }

    const pair = player + "-" + computer;

    switch (pair) {
        case "kivi-sakset":
        case "sakset-kivi":
            return "Kivi tylsyttää sakset";
        case "paperi-kivi":
        case "kivi-paperi":
            return "Paperi peittää kiven";
        case "sakset-paperi":
        case "paperi-sakset":
            return "Sakset leikkaavat paperin";
        default:
            return "";
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.textContent = "0";
    computerScoreSpan.textContent = "0";
    playerHandDiv.textContent = "❔";
    computerHandDiv.textContent = "❔";
    messageP.textContent = "Valitse kivi, paperi tai sakset aloittaaksesi!";
}
