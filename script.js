document.getElementById("guess-form").onsubmit = function(event) {
  event.preventDefault();

  const actualMarbles = 407;
  let userGuess = document.getElementById("guess").value;
  userGuess = parseInt(userGuess);

  
  let resultText = `You guessed ${userGuess}. `;
  if (userGuess === actualMarbles) {
      resultText += "That's exactly right!";
  } else if (userGuess > actualMarbles) {
      resultText += "That's too high. Try guessing lower.";
  } else {
      resultText += "That's too low. Try guessing higher.";
  }

  document.getElementById("result").innerText = resultText;
};