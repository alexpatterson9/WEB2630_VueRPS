new Vue({
  el: '#app',
  data: {
    playerScore: 0,
    computerScore: 0,
    playerChoice: "",
    computerChoice: "",
    availableChoices: [
      "rock",
      "paper",
      "scissors"
    ],
    gameLog: [],
    gameStarted: false,
  },
  methods: {
    updatePlayerChoice(choice) {
      this.playerChoice = choice;
      this.updateComputerChoice();
    },
    updateComputerChoice() {
      this.computerChoice = 
        this.availableChoices[this.getRandomNumber(3)];
      this.completeRound();
    },
    completeRound() {
      let winner = this.getWinner();
      this.gameLog.push({
        player: this.playerChoice,
        computer: this.computerChoice, 
        winner: winner
      });
      if(this.playerScore == 10) {
        alert("You won!");
        location.reload();
      }
      else if(this.computerScore == 10) {
        alert("You lost!");
        location.reload();
      }
    },
    startNewGame() {
      this.gameStarted = true;
      this.playerChoice = "";
      this.computerChoice = "";
      this.playerScore = 0;
      this.computerScore = 0;
      this.gameLog = [];
    },
    getRandomNumber(max) {
      return Math.floor(Math.random() * max);
    },
    getWinner() {
      let winner = "Computer";
      if(this.playerChoice == "rock" && this.computerChoice == "scissors") {
        winner = "Player";
        this.playerScore++;
      }
      else if(this.playerChoice == "paper" && this.computerChoice == "rock") {
        winner = "Player";
        this.playerScore++;
      }
      else if(this.playerChoice == "scissors" && this.computerChoice == "paper") {
        winner = "Player";
        this.playerScore++;
      }
      else if(this.playerChoice == this.computerChoice) {
        winner = "Tie";
      }
      else {
        this.computerScore++;
      }
      return winner;
    }
  },
});