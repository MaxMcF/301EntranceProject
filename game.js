var userInfo = JSON.parse(localStorage.character);
var questionAnswerArray = [['What is the most abundant gas in the earth’s atmosphere?', ['NITROGEN', 'N']], ['Diamonds are made up mostly of what element?', ['CARBON', 'C']], ['A clowder is a group of what kind of animal?', ['CAT', 'CATS', 'KITTEN', 'KITTENS']], ['What planet in our solar system has the most moons?', ['JUPITER']], ['What is the chemical symbol for potassium?', ['K']], ['What is the hottest planet in the solar system?', ['VENUS']], ['The _____ tree produces resin that is used to make turpentine.', ['PINE', 'PINE TREE']], ['Who was the first woman to win a Nobel Prize (for Physics in 1903)?', ['MARIE CURIE', 'CURIE']], ['What is the first element on the periodic table?', ['HYDROGEN', 'H']], ['What animal has the largest brain?', ['SPERM WHALE', 'WHALE']], ['What is the largest (and heaviest) internal organ of the human body?', ['LIVER']], ['Where does sound travel faster: air or water?', ['WATER']], ['What is the fastest land snake in the world?', ['BLACK MAMBA', 'MAMBA']], ['Which planet is closest to the sun?', ['MERCURY']], ['How many planets in our solar system have moons?', ['SEVEN', '7']], ['What is the only bird that can fly backwards?', ['HUMMINGBIRD']], ['What planet in our solar system has the most gravity?', ['JUPITER']], ['How many hearts does an octopus have?', ['THREE', '3']], ['How many hydrogen atoms are in one molecule of water?', ['TWO', '2']], ['Hematology is a branch of medicine involving the study of what?', ['BLOOD']], ['Over what continent is the worlds largest ozone hole?', ['ANTARCTICA']], ['How many bones are in a giraffes neck?', ['SEVEN', '7']], ['A group of jellyfish is called a ______.', ['SMACK']], ['Bark from a _______ tree is used to produce aspirin.', ['WHITE WILLOW', 'WILLOW']], ['What is the most malleable metal?', ['GOLD']]];

function removeAndAppend(){
  var currentElement = document.getElementsByClassName('questionText')[0];
  var parentElm = currentElement.parentNode;
  while (parentElm.hasChildNodes()) {
    parentElm.removeChild(parentElm.lastChild);
  };
  var newHeader = document.createElement('h2');
  var currentQNum = userInfo.currentQuestion + 1;
  newHeader.innerHTML = 'Question #' + currentQNum.toString() + '.';
  newHeader.setAttribute('class', 'questionHeader');
  var newQuestion = document.createElement('p');
  var rand = Math.floor(Math.random() * questionAnswerArray.length);
  userInfo.correctAnswers.push(questionAnswerArray[rand][1]);
  newQuestion.innerHTML = questionAnswerArray[rand][0];
  newQuestion.setAttribute('class', 'questionText');
  questionAnswerArray.splice(rand, 1);
  parentElm.appendChild(newHeader);
  parentElm.appendChild(newQuestion);
}

function initializeGame(){
  removeAndAppend();
  var inputForm = document.getElementsByClassName('answerInput')[0];
  inputForm.setAttribute('name', 'answerForm');
  inputForm.parentNode.addEventListener('submit', logAnswerAndChangeQuestion);
}

function logAnswerAndChangeQuestion(event){
  event.preventDefault();
  var answer = event.target.answerForm.value;
  userInfo.answers.push(answer);
  userInfo.currentQuestion++;
  if(userInfo.currentQuestion < 5){
    event.target.answerForm.value = '';
    removeAndAppend();
  }else {
    finalizeGame();
  }
}
function finalizeGame(){
  localStorage.setItem('character', JSON.stringify(userInfo));
  window.open('finalScore.html', '_self');
}
initializeGame();
