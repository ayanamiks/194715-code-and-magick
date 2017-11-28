"use strict"
var getMaxElement = function cost(arr) {
  var max = -1;
  var maxIndex = -1;
  for (var i = 0; i < arr.length; i++) {
    var value = arr[i];
    if (value > max) {
      max = value;
      maxIndex = i;
    }
  }
  return max;
}
var getRandomValue = function(minValue, maxValue) {
  return Math.random() * (maxValue - minValue) + minValue;
};

window.renderStatistics = function(ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.beginPath();
  ctx.moveTo(110, 20);
  ctx.lineTo(530, 20);
  ctx.lineTo(520, 40);
  ctx.lineTo(540, 70);
  ctx.lineTo(520, 100);
  ctx.lineTo(540, 130);
  ctx.lineTo(520, 160);
  ctx.lineTo(540, 190);
  ctx.lineTo(520, 220);
  ctx.lineTo(540, 250);
  ctx.lineTo(520, 280);
  ctx.lineTo(110, 280);
  ctx.lineTo(100, 250);
  ctx.lineTo(120, 220);
  ctx.lineTo(100, 190);
  ctx.lineTo(120, 160);
  ctx.lineTo(100, 110);
  ctx.lineTo(120, 100);
  ctx.lineTo(100, 70);
  ctx.lineTo(120, 20);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(100, 10);
  ctx.lineTo(520, 10);
  ctx.lineTo(510, 30);
  ctx.lineTo(530, 60);
  ctx.lineTo(510, 90);
  ctx.lineTo(530, 120);
  ctx.lineTo(510, 150);
  ctx.lineTo(530, 180);
  ctx.lineTo(510, 210);
  ctx.lineTo(530, 240);
  ctx.lineTo(510, 270);
  ctx.lineTo(100, 270);
  ctx.lineTo(90, 240);
  ctx.lineTo(110, 210);
  ctx.lineTo(90, 180);
  ctx.lineTo(110, 150);
  ctx.lineTo(90, 120);
  ctx.lineTo(110, 90);
  ctx.lineTo(90, 60);
  ctx.lineTo(110, 30);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
  var histogramHeight = 150;
  var step = histogramHeight / (getMaxElement(times) - 0);
  var barWidth = 40; // px;
  var indent = 90; // px;
  var initialX = 150; // px;
  var initialY = 250; // px;
  var lineHeight = 15; // px;
  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = (names[i] === 'Вы') ? 'red' : 'rgba(0, 0, 255, ' + getRandomValue(0.1, 1) + ')';
    ctx.fillRect(initialX + indent * i, initialY, barWidth, -(times[i] * step));
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], (initialX + indent * i), initialY + lineHeight);
    ctx.fillText(times[i].toFixed(0), (initialX + indent * i), initialY - times[i] * step - 10);
  }
}
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
wizardColor[i] = coatColor[randomInteger(0, coatColor.length)];
wizardColorEyes[i] = eyesColor[randomInteger(0, eyesColor.length)];
};

for (var i = 0; i < wizardNames.length; i++) {
var wizardElement = similarWizardTemplate.cloneNode(true);

wizardElement.querySelector('.setup-similar-label').textContent = wizardNames[i];
wizardElement.querySelector('.wizard-coat').style.fill = wizardColor[i];
wizardElement.querySelector('.wizard-eyes').style.fill = wizardColorEyes[i];
similarListElement.appendChild(wizardElement);

}
