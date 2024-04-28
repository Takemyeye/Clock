/* by TakeMyEye*/
function DinamicText() {
  let displayText = '';
  let textIndex = 0;

  const textsToIterate = [
    'TakeMyEye %',
    'Thanks', 
    'For', 
    'Your',
    'Atention :)'
  ];
  const interval = 80;
  let changeInterval = 700;

  function updateDisplayText() {
    let index = 0;
    const textLength = textsToIterate[textIndex].length;

    const displayTextInterval = setInterval(() => {
      if (index < textLength) {
        displayText += textsToIterate[textIndex].charAt(index);
        document.querySelector('.dinamicText').textContent = displayText;
        index++;
      } else {
        clearInterval(displayTextInterval);

        setTimeout(() => {
          let removeIndex = textLength - 1;
          const removeTextInterval = setInterval(() => {
            if (removeIndex >= 0) {
              displayText = displayText.slice(0, -1);
              document.querySelector('.dinamicText').textContent = displayText;
              removeIndex--;
            } else {
              clearInterval(removeTextInterval);
              textIndex = (textIndex + 1) % textsToIterate.length;
              displayText = '';
              changeInterval = 1000;
              updateDisplayText();
            }
          }, interval);
        }, changeInterval);
      }
    }, interval);
  }

  document.addEventListener('DOMContentLoaded', function() {
    updateDisplayText();
  });
}
DinamicText();

function updateTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var timeString = hours + ":" + minutes + ":" + seconds;
  document.getElementById("time").textContent = timeString;
}

setInterval(updateTime, 1000);

updateTime();

function Author(){
  const authors = [
    'Lao Tzu',
    'Theophrastus',
    'Marthe Troly-Curtin',
    'Albert Einstein',
    'Buddha'
  ]
  function showAuthor() {
    let index = 0;
    setInterval(() => {
      document.getElementById('Author').innerHTML = authors[index];
      index = (index + 1) % authors.length;
    }, 4000); 
  }
  showAuthor();
}

function Phrase(){
  const phrases = [
    "Time is a created thing. To say 'I don't have time,' is like saying, 'I don't want to.",
    "Time is the most valuable thing a man can spend.",
    "Time you enjoy wasting is not wasted time.",
    "The only reason for time is so that everything doesn't happen at once.",
    "The trouble is, you think you have time."
  ]
  function showPhrase() {
    let index = 0;
    setInterval(() => {
      document.getElementById('Phrase').innerHTML = phrases[index];
      index = (index + 1) % phrases.length;
    }, 4000); 
  }
  showPhrase();
}

Author();
Phrase();