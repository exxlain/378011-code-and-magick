'use strict';
/*код который рисует одного похожего мага*/
(function() {
    var wizardTemplate = document.querySelector('#similar-wizard-template');

    var fillWizard = function (wizard) {
        var element = wizardTemplate.content.cloneNode(true);

        var wizardElement = element.querySelector('.wizard');
        wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
        wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
        element.querySelector('.setup-similar-label').innerText = wizard.name;

        return element;
    };

    var similar = document.querySelector('.setup-similar');
    var similarList = document.querySelector('.setup-similar-list');

    window.render = function (data) {
        var takeNumber = data.length > 4 ? 4 : data.length;
        similarList.innerHTML = '';
        for (var i = 0; i < takeNumber; i++) {
            similarList.appendChild(fillWizard(data[i]));
        }

        similar.classList.remove('hidden');
    };


})();
