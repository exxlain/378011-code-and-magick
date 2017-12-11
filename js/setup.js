'use strict';
/*Здесь я отрисовываю похожих магов*/
(function () {
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var setup = document.querySelector('.setup');

var createWizardsArray = function (lengthArray) {
    var wizards = [];
    for (var i = 1; i <= lengthArray; i++) {
        wizards.push({
            name: window.getRandomElement(WIZARD_NAMES) + ' ' + window.getRandomElement(WIZARD_SURNAMES),
            coatColor: window.getRandomElement(WIZARD_COAT_COLORS),
            eyesColor: window.getRandomElement(WIZARD_EYES_COLORS)
        });
    }
    return wizards;
};

var wizardsArray = createWizardsArray(4);

var userDialog = document.querySelector('.setup');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var fillWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
};
var renderWizards = function (arr) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < arr.length; i++) {
        fragment.appendChild(fillWizard(arr[i]));
    }
    similarListElement.appendChild(fragment);
};
renderWizards(wizardsArray);

userDialog.querySelector('.setup-similar').classList.remove('hidden');


var coat = setup.querySelector('.setup-wizard .wizard-coat');
var eyes = setup.querySelector('.setup-wizard .wizard-eyes');
var fireball = setup.querySelector('.setup-fireball-wrap');

var fillElement = function(element, color) {
  element.style.fill = color;
};

var changeElementBackground = function(element, color) {
  element.style.backgroundColor = color;
};

   coat.addEventListener ('click', function() {
   window.colorize.colorizeElement(coat, WIZARD_COAT_COLORS, fillElement);
});

    eyes.addEventListener ('click', function() {
   window.colorize.colorizeElement(eyes, WIZARD_EYES_COLORS, fillElement);
});

     fireball.addEventListener ('click', function() {
   window.colorize.colorizeElement(fireball, WIZARD_FIREBALL_COLORS, changeElementBackground);
});


})();
