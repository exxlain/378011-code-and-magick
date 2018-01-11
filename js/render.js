'use strict';
/*код который рисует одного похожего мага*/

(function () {
  var SHOW_WIZARDS_NUMBER = 4; // count
  var OFFSET = 10;             // px

  var wizardTemplate = document.querySelector('#similar-wizard-template');

  var createElement = function (wizard) {
    var element = wizardTemplate.content.cloneNode(true);

    var wizardElement = element.querySelector('.wizard');
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return element;
  };

  var similar = document.querySelector('.setup-similar');
  var similarList = document.querySelector('.setup-similar-list');

  window.render = function (data) {
    similarList.innerHTML = '';

    data.slice(0, SHOW_WIZARDS_NUMBER).map(function (it) {
      return new window.Wizard(it);
    }).forEach(function (wizard) {
      similarList.appendChild(createElement(wizard));
    });

    similar.classList.remove('hidden');
  };

})();
