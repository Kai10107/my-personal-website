let attempts = 0;

document.getElementById("guess-form").onsubmit = function(event) {
  event.preventDefault();

  attempts++;
  const actualMarbles = 407;
  let userGuess = document.getElementById("guess").value;
  userGuess = parseInt(userGuess);

  
  let resultText = ` You guessed ${userGuess}. `;
  if (userGuess === actualMarbles) {
      resultText += "That's exactly right! You found the correct number in ${attempts}: attempts. ";

      const resultsSection = document.getElementById("results-section");
      resultsSection.style.display = 'block';
      setTimeout(() => resultsSection.style.opacity = 1, 10); 




document.getElementById("game-results").innerText = `Leaderboard Results!`; 
  } else if (userGuess > actualMarbles) {
      resultText += "That's too high. Try guessing lower.";
  } else {
      resultText += "That's too low. Try guessing higher.";
  }

  document.getElementById("attempts-display").innerText = `Attempts: ${attempts}`;
  document.getElementById("result").innerText = resultText;
};