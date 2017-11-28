'use strict';
var surnamesAll = ['да Марья',
'Верон',
'Мирабелла',
'Вальц',
'Онопко',
'Топольницкая',
'Нионго',
'Ирвинг'];
var namesAll = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

debugger;

var coatColorsAll = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColorsAll = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var randomElement = function (arr) {
  var randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
};

var wizards = [];

for (i = 0; i < 4; i++) {
  wizards.push({
    name: randomElement(namesAll),
    surname: randomElement(surnamesAll),
    coatColor: randomElement(coatColorsAll),
    eyesColor: randomElement(eyesColorsAll),
  });
};

var randomWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label')textContent = wizard.name + ' ' + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var createFragment = function () {
  var fragment = document.createDocumentFragment();
  for (i = 0; i < 4; i++) {
    fragment.appendChild(randomWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

createFragment();
document.querySelector('.setup-similar').classList.remove('hidden');

