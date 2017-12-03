'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getRandom = function (arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
};

var createWizardsArray = function (lengthArray) {
    var wizards = [];
    for (var i = 1; i <= lengthArray; i++) {
        wizards.push({
            name: getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZARD_SURNAMES),
            coatColor: getRandom(WIZARD_COAT_COLORS),
            eyesColor: getRandom(WIZARD_EYES_COLORS)
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

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupSave = setup.querySelector('.setup-submit');
var inputName = setup.querySelector('.setup-user-name');
var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');

var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function() {
    openPopup();
});

var onPopupEscPress = function (evt) {
    var target = evt.target;
    if (target.className !== 'setup-user-name' && evt.keyCode === ESC_KEYCODE) {
        closePopup();
    }
};

setupOpen.addEventListener ('keydown', function(evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
        openPopup();
    }
});

setupClose.addEventListener ('click', function() {
    closePopup();
});

setupClose.addEventListener ('keydown', function(evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
        closePopup();
    }
});

var setElementStyle = function (element, style, arr) {
   element.style[style] = getRandom(arr);
};

wizardCoat.addEventListener ('click', function() {
    setElementStyle(wizardCoat, 'fill', WIZARD_COAT_COLORS);
});

wizardEyes.addEventListener ('click', function() {
    setElementStyle(wizardEyes, 'fill', WIZARD_EYES_COLORS);
});

wizardFireball.addEventListener ('click', function() {
    setElementStyle(wizardFireball, 'backgroundColor', WIZARD_FIREBALL_COLORS);
 });
