function MyChoiceIs(userChoice) {
    const randomNumber = Math.ceil(Math.random() * 2);
    const computerChoice = ["rock", "paper", "scissors"][randomNumber];
    document.querySelector(".computer-choice ." + computerChoice).style.display = "block";

    const draw = userChoice === computerChoice;
    if (draw) {
        document.querySelector('.result').innerText = 'Draw!';
    } else {
        const userWon = (userChoice === 'rock' && computerChoice == 'scissors') || (userChoice === 'paper' && computerChoice == 'rock') || (userChoice === 'scissors' && computerChoice === 'paper');
        if (userWon) {
            document.querySelector('.result').innerText = 'You won!';
        } else {
            document.querySelector('.result').innerText = 'You lost!';
        }
    }
  }