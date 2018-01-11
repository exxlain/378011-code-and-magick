'use strict';
/*модуль для работы с магом пользователя*/
(function() {

    /*генерация случайного цвета файербола при нажатии*/
    var userDialog = document.querySelector('.setup');
    var fireball = userDialog.querySelector('.setup-fireball-wrap');
    var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
    var changeElementBackground = function (element, color) {
        element.style.backgroundColor = color;
    };
    fireball.addEventListener('click', function() {
        window.colorize.colorizeElement(fireball, WIZARD_FIREBALL_COLORS, changeElementBackground);
    });

  var wizardElement = document.querySelector('.setup-wizard');
  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  var wizardName = document.querySelector('.setup-user-name');

  var wizard = new window.Wizard({name: wizardName.value});

  wizardCoatElement.addEventListener('click', function () {
    wizardCoatElement.style.fill = wizard.changeCoatColor();
  });

  var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
  wizardEyesElement.addEventListener('click', function () {
    wizardEyesElement.style.fill = wizard.changeEyesColor();
  });

  window.myWizard = wizard;


})();
