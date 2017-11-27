'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandom = function (arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
};

var createWizardsArray = function (lengthArray) {
    var wizards = [];
    for (var i = 1; i <= lengthArray; i++) {
        wizards.push({
            name: getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZARD_SURNAMES),
            coatColor: getRandom(WIZARD_COAT_COLOR),
            eyesColor: getRandom(WIZARD_EYES_COLOR)
        });
    }
    return wizards;
};

var wizardsArray = createWizardsArray(4);

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');


var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
};
var fillFragment = function (arr) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < arr.length; i++) {
    fragment.appendChild(renderWizard(arr[i]));
  }
  similarListElement.appendChild(fragment);
}
fillFragment(wizardsArray);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

