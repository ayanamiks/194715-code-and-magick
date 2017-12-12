'use strict';
var surnamesAll = ['да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var namesAll = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];


var coatColorsAll = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColorsAll = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var randomElement = function(arr) {
  var randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
};

var wizards = [];

for (var i = 0; i < 4; i++) {
  wizards.push({
    name: randomElement(namesAll),
    surname: randomElement(surnamesAll),
    coatColor: randomElement(coatColorsAll),
    eyesColor: randomElement(eyesColorsAll),
  });
};
var randomWizard = function(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var createFragment = function() {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < 4; i++) {

    fragment.appendChild(randomWizard(wizards[i]));
  }
  console.log(fragment.content);
  similarListElement.appendChild(fragment);
};

createFragment();
document.querySelector('.setup-similar').classList.remove('hidden');

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupPlayer = document.querySelector('.setup-player');
var setupChangeCoat = document.querySelector('.wizard-coat');
var setupChangeEyes = document.querySelector('.wizard-eyes');
var setupChangeHands = document.querySelector('.wizard-hands');
var setupFireball = document.querySelector('.setup-fireball-wrap');
var onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function() {
  openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function() {
  closePopup();
});

setupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});
var wizardCoats = ['rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var wizardEyes = ['black',
  'red',
  'blue',
  'yellow',
  'green'
];
var fireballColors = ['#ee4830',
  '#30a8ee',
  '#5ce6c0', '#e848d5',
  '#e6e848'
];
setupChangeCoat.addEventListener('click', function() {
  setupChangeCoat.style.fill = randomElement(wizardCoats);
});
setupChangeEyes.addEventListener('click', function() {
  setupChangeEyes.style.fill = randomElement(wizardEyes);
});
setupFireball.addEventListener('click', function() {
  setupFireball.style.background = randomElement(fireballColors);
});
