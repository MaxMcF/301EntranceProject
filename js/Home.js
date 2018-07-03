
function playerAnswers (name, currentQuestion, answers, correctAnswers){
  this.name = name;
  this.currentQuestion = currentQuestion;
  this.answers = [];
  this.correctAnswers = [];
};

function startButtonPressed(event){
  var startButton = document.getElementsByClassName('startButton')[0];
  parentElm = startButton.parentNode;
  parentElm.removeChild(startButton);
  var inputElm = document.createElement('input');
  inputElm.setAttribute('class', 'inputClass');
  inputElm.setAttribute('placeholder', 'Type Your Name & Hit Enter');
  inputElm.setAttribute('autocomplete', 'off');
  inputElm.setAttribute('type', 'text');
  inputElm.setAttribute('name', 'nameForm');
  parentElm.appendChild(inputElm);
  parentElm.addEventListener('submit', startGame);
};

function startGame(event){
  event.preventDefault();
  var playerName = event.target.nameForm.value;
  var playerProfile = new playerAnswers (playerName, 0, null, null);
  localStorage.setItem('character', JSON.stringify(playerProfile));
  window.open('game.html','_self');
};
document.getElementsByClassName('startButton')[0].addEventListener('click', startButtonPressed);
