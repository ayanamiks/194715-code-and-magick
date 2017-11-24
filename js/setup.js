var showElement = function(selector) {
  var element = document.querySelector(selector);
  if (element) {
    element.classList.remove('hidden');
  }
};

showElement('.setup');
showElement('.setup-similar');

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  };

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var wizardNames = [];
var wizardColor = [];
var wizardColorEyes = [];

var firstName = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var surname = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

for (var i = 0; i < 4; i++) {
  wizardNames[i] = firstName[randomInteger(0, firstName.length)] + ' ' + surname[randomInteger(0, surname.length)];
  wizardColor[i] =  coatColor[randomInteger(0, coatColor.length)];
  wizardColorEyes[i] = eyesColor[randomInteger(0, eyesColor.length)];
};

for (var i = 0; i < wizardNames.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizardNames[i];
  wizardElement.querySelector('.wizard-coat').style.fill = wizardColor[i];
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardColorEyes[i];
  similarListElement.appendChild(wizardElement);

}

