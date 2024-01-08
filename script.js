let attempts = 0;

document.getElementById("guess-form").onsubmit = function(event) {
  event.preventDefault();

  attempts++;

  const actualMarbles = 407;
  let userGuess = document.getElementById("guess").value;
  userGuess = parseInt(userGuess);

  
  let resultText = `Attempt ${attempts}: You guessed ${userGuess}. `;
  if (userGuess === actualMarbles) {
      resultText += "That's exactly right! You found the correct number in ${attempts}: attempts. ";
            attempts = 0; 
  } else if (userGuess > actualMarbles) {
      resultText += "That's too high. Try guessing lower.";
  } else {
      resultText += "That's too low. Try guessing higher.";
  }

  document.getElementById("result").innerText = resultText;
};