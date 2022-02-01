new Vue({
  el: '#app',
  data: {
    playerSelected: "",
    playerScore: 0,
    computerSelected: "",
    computerScore: 0,
    totalTurns: 10,
    availableActions: [
      "rock", 
      "paper",
      "scissors",
    ]
  },
  methods: {
    startNewGame() {
      this.playerScore = 0;
      this.computerScore = 0;
      this.playerSelected = "";
    },
    selectAction(action) {
      this.playerSelected = action;
      await setTimeout(this.computerTurn, 500);
      this.displayResult();
    },
    computerTurn() {
      this.computerSelected = this.availableActions[this.getRandomNumber(3)];
    },
    displayResult() {
      console.log(this.playerSelected);
      console.log(this.computerSelected);
    },
    getRandomNumber(max) {
      return Math.floor(Math.random() * max);
    }
  },
  computed: {
    playerPercent() {
      return this.playerScore / this.totalTurns;
    },
    computerPercent() {
      return this.computerScore / this.totalTurns;
    }
  }
});