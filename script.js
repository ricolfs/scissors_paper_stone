const selectionOptions = document.querySelectorAll("[data-selection]");
const SELECTIONS = [ 
    {
        name: "rock",
        beats: "scissors"
    },
    {
        name:"paper",
        beats: "rock"
    },
    {
        name:"scissors",
        beats:"paper"
    }
];
const computerScoreSpan = document.querySelector("[data-computer-score]");
const userScoreSpan = document.querySelector("[data-user-score]");

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

selectionOptions.forEach(selectionOption => {
    selectionOption.addEventListener("click", e => {
        const selectionName = selectionOption.dataset.selection;
        const selection = SELECTIONS.find(selection => selection.name === selectionName);
        console.log(selection)
        makeSelection(selection);
    })
   
})

function makeSelection (selection){
    const randomSelection = computerSelection();
    const yourWinner = isWinner(selection, randomSelection);
    const computerWinner = isWinner(randomSelection, selection);
    console.log(computerSelection())
    console.log(yourWinner);
    console.log(computerWinner)
    if (yourWinner) { incrementScore(userScoreSpan)};
    if (computerWinner) {incrementScore(computerScoreSpan)};
}

function computerSelection() {
    const randomIndex = Math.floor(Math.random() * 3);
    return SELECTIONS[randomIndex];
}

function isWinner (selection, opponentSelection) {
    return selection.beats === opponentSelection.name;
}
