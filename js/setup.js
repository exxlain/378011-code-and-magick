'use strict';
/*Здесь я загружаю похожих магов и отправляю данные игрока на сервер*/
(function() {
    var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
    var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

    var userDialog = document.querySelector('.setup');
    userDialog.classList.remove('hidden');
    var similarListElement = userDialog.querySelector('.setup-similar-list');
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

    var fillWizard = function (wizard) {
        var wizardElement = similarWizardTemplate.cloneNode(true);

        wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
        wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
        wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

        return wizardElement;
    };

    /*  обработчик успешной загрузки*/
    var successHandler = function (wizards) {
        var fragment = document.createDocumentFragment();

        for (var i = 0; i < 4; i++) {
            fragment.appendChild(fillWizard(wizards[i]));
        }
        similarListElement.appendChild(fragment);

        userDialog.querySelector('.setup-similar').classList.remove('hidden');
    };
    /*  обработчик ошибки*/
    var errorHandlerStyle = function (nodeName) {
        nodeName.style.zIndex = '100';
        nodeName.style.margin = '0 auto';
        nodeName.style.textAlign = 'center';
        nodeName.style.backgroundColor = 'red';
        nodeName.style.position = 'absolute';
        nodeName.style.left = 0;
        nodeName.style.right = 0;
        nodeName.style.fontSize = '30px';
    };
    var errorHandler = function (errorMessage) {
        var node = document.createElement('div');
        errorHandlerStyle(node);
        node.textContent = errorMessage;
        document.body.insertAdjacentElement('afterbegin', node);
    };

    window.backend.load(successHandler, errorHandler);

    /*генерация случайных цветов при нажатии*/
    var coat = userDialog.querySelector('.setup-wizard .wizard-coat');
    var eyes = userDialog.querySelector('.setup-wizard .wizard-eyes');
    var fireball = userDialog.querySelector('.setup-fireball-wrap');
    var fillElement = function (element, color) {
        element.style.fill = color;
    };
    var changeElementBackground = function (element, color) {
        element.style.backgroundColor = color;
    };
    coat.addEventListener('click', function () {
        window.colorize.colorizeElement(coat, WIZARD_COAT_COLORS, fillElement);
    });
    eyes.addEventListener('click', function () {
        window.colorize.colorizeElement(eyes, WIZARD_EYES_COLORS, fillElement);
    });
    fireball.addEventListener('click', function () {
        window.colorize.colorizeElement(fireball, WIZARD_FIREBALL_COLORS, changeElementBackground);
    });

})();
