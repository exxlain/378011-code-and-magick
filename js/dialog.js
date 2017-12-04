/*Здесь я открываю/закрываю диалог */
'use strict';
(function () {
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupSave = setup.querySelector('.setup-submit');
var inputName = setup.querySelector('.setup-user-name');


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

var onPopupEscPress = function(evt) {
   var target = evt.target;
  if (target.className !== 'setup-user-name') {
   window.util.isEscEvent(evt, closePopup);
  }
};

  setupOpen.addEventListener('keydown', function(evt) {
    window.util.isEnterEvent(evt, openPopup);
  });


setupClose.addEventListener ('click', function() {
    closePopup();
});

  setupClose.addEventListener('keydown', function(evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

})();
