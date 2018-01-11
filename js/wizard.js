'use strict';
/* логика работы с волшебником */
'use strict';
(function () {
    var WIZARD_EYES_COLORS = [
    'red',
    'orange',
    'yellow',
    'green',
    'lightblue',
    'blue',
    'purple'
  ];

  var WIZARD_COAT_COLORS = [
    'rgb(146, 100, 161)',
    'rgb(215, 210, 55)',
    'rgb(241, 43, 107)',
    'rgb(101, 137, 164)',
    'rgb(0, 0, 0)',
    'rgb(215, 210, 55)',
    'rgb(56, 159, 117)',
    'rgb(241, 43, 107)'
  ];

  var Wizard = function (data) {
    this.name = data.name;
    this.coatColor = data.colorCoat;
    this.eyesColor = data.colorEyes;
  };

  Wizard.prototype = {
    setName: function (name) {
      if (!name) {
        throw new Error('Имя не задано');
      }
      if (name.length > 30) {
        throw new Error('Недопустимое значение имени мага: ' + name);
      }
      this.name = name;
      this.onChange(this);
      return name;
    },
    changeCoatColor: function () {
      var newColor = window.getRandomElement(WIZARD_COAT_COLORS);
      this.coatColor = newColor;
      this.onChange(this);
      return newColor;
    },
    changeEyesColor: function () {
      var newColor = window.getRandomElement(WIZARD_EYES_COLORS);
      this.eyesColor = newColor;
      this.onChange(this);
      return newColor;
    },
   onChange: function (wizard) {
      return wizard;
    }
  };

  window.Wizard = Wizard;
})();
