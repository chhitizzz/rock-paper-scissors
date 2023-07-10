function MyChoiceIs(userChoice) {
    const randomNumber = Math.ceil(Math.random() * 2);
    const computerChoice = ['rock', 'paper', 'scissors'][randomNumber];
    document.querySelector('.computer-choice .'+computerChoice).style.display = 'block';
}