'use strict';
/*модуль настройки мага*/
(function() {

    var COAT_COLORS = ['rgb(146, 100, 161)', 'rgb(215, 210, 55)', 'rgb(241, 43, 107)', 'rgb(101, 137, 164)', 'rgb(0, 0, 0)', 'rgb(215, 210, 55)', 'rgb(56, 159, 117)', 'rgb(241, 43, 107)'];
    var EYES_COLORS = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'purple'];

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

  /*объект, у которого можно подписаться на событие изменения цвета плаща и глаз*/
    var wizard = {
        onEyesChange: function(color) {},
        onCoatChange: function(color) {}
    };

/* управление переключением цветов*/
    var wizardElement = document.querySelector('.setup-wizard');

    var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
    wizardCoatElement.addEventListener('click', function() {
        var newColor = window.getRandomElement(COAT_COLORS);
        this.style.fill = newColor;

        wizard.onCoatChange(newColor);
    });


    var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
    wizardEyesElement.addEventListener('click', function() {
        var newColor = window.getRandomElement(EYES_COLORS);
        this.style.fill = newColor;

        wizard.onEyesChange(newColor);
    });
    return window.wizard = wizard;


})();
