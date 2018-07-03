var userInfo = JSON.parse(localStorage.character);
var numberCorrect = 0;
document.getElementsByClassName('returnButton')[0].addEventListener('click', returnButtonPressed);

function playerAnswers (name, currentQuestion, answers, correctAnswers){
  this.name = name;
  this.currentQuestion = currentQuestion;
  this.answers = [];
  this.correctAnswers = [];
};
// function capitalizeFirstLetter(string) {
//   string.toLowerCase();
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }
function checkAnswers(){
  var ol = document.getElementsByClassName('scoreList')[0];
  for(var i = 0; i < userInfo.answers.length; i++){
    userAnswer = userInfo.answers[i].toUpperCase();
    var li = document.createElement('li');
    capAnswer = userAnswer.toLowerCase();
    capAnswer = capAnswer.charAt(0).toUpperCase() + capAnswer.slice(1);
    if (userInfo.correctAnswers[i].indexOf(userAnswer) > -1){
      numberCorrect++;
      var textNode = document.createTextNode(capAnswer);
      li.appendChild(textNode);
      li.setAttribute('class', 'correctAnswer');
      ol.appendChild(li);
    }else{
      capCorrectAnswer = userInfo.correctAnswers[i][0].toLowerCase();
      capCorrectAnswer = capCorrectAnswer.charAt(0).toUpperCase() + capCorrectAnswer.slice(1);
      var textNode = document.createTextNode('You answered: ' + capAnswer + '. The correct answer was: ' + capCorrectAnswer);
      li.appendChild(textNode);
      li.setAttribute('class', 'incorrectAnswer');
      ol.appendChild(li);
    }
  }
  var finalScore = document.createElement('p');
  finalScore.innerHTML = 'Congratulations ' + userInfo.name + '! You got ' + numberCorrect + '/5';
  ol.parentNode.appendChild(finalScore);
}

function returnButtonPressed(event){
  var playerProfile = new playerAnswers (userInfo.name, 0, null, null);
  localStorage.setItem('character', JSON.stringify(playerProfile));
  window.open('game.html','_self');
}
checkAnswers();
