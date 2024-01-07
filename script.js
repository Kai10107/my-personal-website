document.getElementById("guess-form").onsubmit = function(event) {
  event.preventDefault();

const actualMarbles = 100;
let userGuess = document.getElementById("guess").value;
userGuess = parseInt(userGuess);

let difference = Math.abs(actualMarbles - userGuess);
let resultText = `You guessed ${userGuess}. `;
if (difference === 0) {
  resultText += "That's exactly right!";
} else {
  resultText += `You were off by ${difference} marbles.`;
}

document.getElementById("result").innerText = resultText;
};


