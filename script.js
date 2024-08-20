console.log("A Suryanshu Banerjee Production!");
const rules = {
    Stone: {
        Scissors: 'completely breaks',
        Lizard: 'smashes the heck out of',
    },
    Paper: {
        Stone: 'wraps around',
        Spock: 'disproves the ramblings of',
    },
    Scissors: {
        Paper: 'cuts into ugly confetti',
        Lizard: 'decapitates',
    },
    Lizard: {
        Spock: 'poisons and gives severe diarrhea to',
        Paper: 'munches on your',
    },
    Spock: {
        Scissors: 'renders useless the',
        Stone: 'straight up vaporizes the',
    } 
};




let gamesPlayed = 0;
let gamesWon = 0;
let gamesLost = 0;



function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s only a tie...? Damn, no fun!';
    }
    if (rules[playerChoice][computerChoice]) {
        gamesWon++;
        return `You win! ${playerChoice} ${rules[playerChoice][computerChoice]} ${computerChoice}.`;
    }
    gamesLost++;
    return `You lose! ${computerChoice} ${rules[computerChoice][playerChoice]} ${playerChoice}.`;
}




function updateStats() {
    document.getElementById('games-played').textContent = `Games played: ${gamesPlayed}`;
    document.getElementById('games-won').textContent = `Games won: ${gamesWon}`;
    document.getElementById('games-lost').textContent = `Games lost: ${gamesLost}`;
}




document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        const playerChoice = this.id;
        const choices = ['Stone', 'Paper', 'Scissors', 'Lizard', 'Spock'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        document.getElementById('button-container').style.display = 'none';

        const messageDiv = document.getElementById('message');
        const computerButtonDiv = document.getElementById('computer-button');
        messageDiv.textContent = `I had chosen ${computerChoice}!`;
        computerButtonDiv.textContent = computerChoice;
        computerButtonDiv.style.display = 'inline-block';

        const resultDiv = document.getElementById('result');
        resultDiv.textContent = determineWinner(playerChoice, computerChoice);
        resultDiv.style.display = 'block';

        gamesPlayed++;
        updateStats();

        document.getElementById('computer-choice').style.display = 'block';
        document.getElementById('restart-button').style.display = 'inline-block';
    });
});





document.getElementById('restart-button').addEventListener('click', function() {
    document.getElementById('computer-choice').style.display = 'none';
    document.getElementById('restart-button').style.display = 'none';

    document.getElementById('button-container').style.display = 'flex';

    document.getElementById('message').textContent = '';
    document.getElementById('computer-button').textContent = '';
    document.getElementById('result').textContent = '';
});
