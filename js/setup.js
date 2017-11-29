'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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
    var target = event.target;
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

setupSave.addEventListener ('click', function() {
    event.preventDefault();
    closePopup();
});

setupSave.addEventListener ('keydown', function(evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
        event.preventDefault();
        closePopup();
    }
});

var randomCoatColor = function () {
    wizardCoat.style.fill = getRandom(WIZARD_COAT_COLOR);
};
wizardCoat.addEventListener ('click', function() {
    randomCoatColor();
});

var randomEyesColor = function () {
    wizardEyes.style.fill = getRandom(WIZARD_EYES_COLOR);
};
wizardEyes.addEventListener ('click', function() {
    randomEyesColor();
});

var randomFireballColor = function () {
    wizardFireball.style.backgroundColor = getRandom(WIZARD_FIREBALL_COLOR);
};
wizardFireball.addEventListener ('click', function() {
    randomFireballColor();
});
