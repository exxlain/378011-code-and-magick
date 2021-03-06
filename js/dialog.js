'use strict';
(function() {
    var setup = document.querySelector('.setup');
    var setupOpen = document.querySelector('.setup-open');
    var setupClose = setup.querySelector('.setup-close');
    var inputName = setup.querySelector('.setup-user-name');
    var form = setup.querySelector('.setup-wizard-form');
    /*открытие и закрытие окна*/

    var openPopup = function () {
        setup.classList.remove('hidden');
        document.addEventListener('keydown', onPopupEscPress);
        setup.style.top = null;
        setup.style.left = null;
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
        if (target.className !== 'setup-user-name') {
            window.util.isEscEvent(evt, closePopup);
        }
    };

    setupOpen.addEventListener('keydown', function(evt) {
        window.util.isEnterEvent(evt, openPopup);
    });

    setupClose.addEventListener('click', function() {
        closePopup();
    });

    setupClose.addEventListener('keydown', function(evt) {
        window.util.isEnterEvent(evt, closePopup);
    });

/*отправка формы*/
  form.addEventListener('submit', function (evt) {
      window.backend.save(new FormData(form), function (response) {
        closePopup();
      });
      evt.preventDefault();
    });

    /*возможность перетаскивания диалога*/
    var dialogHandle = setup.querySelector('.setup-user-pic');
    dialogHandle.style.zIndex = 1000;
    var DialogMove = function (evt) {
        evt.preventDefault();

        var startCoords = {
            x: evt.clientX,
            y: evt.clientY
        };

        var onMouseMove = function (moveEvt) {
            moveEvt.preventDefault();

            var shift = {
                x: startCoords.x - moveEvt.clientX,
                y: startCoords.y - moveEvt.clientY
            };

            startCoords = {
                x: moveEvt.clientX,
                y: moveEvt.clientY
            };

            setup.style.top = (setup.offsetTop - shift.y) + 'px';
            setup.style.left = (setup.offsetLeft - shift.x) + 'px';
        };

        var onMouseUp = function (upEvt) {
            upEvt.preventDefault();
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

    };

    dialogHandle.addEventListener('mousedown', DialogMove);

    /*перемещение предметов*/
    var shopElement = document.querySelector('.setup-artifacts-shop');
    var draggedItem = null;

    shopElement.addEventListener('dragstart', function(evt) {
        if (evt.target.tagName.toLowerCase() === 'img') {
             artifactsElement.style.outline = '2px dashed red';
             draggedItem = evt.target;
            evt.dataTransfer.setData('text/plain', evt.target.alt);
        }
    });
    var artifactsElement = document.querySelector('.setup-artifacts');

    artifactsElement.addEventListener('dragover', function(evt) {
        evt.preventDefault();
        return false;
    });

    artifactsElement.addEventListener('drop', function(evt) {
        evt.target.style.backgroundColor = '';
        evt.target.appendChild(draggedItem);
        evt.preventDefault();
    });

    artifactsElement.addEventListener('dragenter', function(evt) {
        artifactsElement.style.outline = '';
        evt.target.style.backgroundColor = 'yellow';
        evt.preventDefault();
    });

    artifactsElement.addEventListener('dragleave', function(evt) {
        evt.target.style.backgroundColor = '';
        evt.preventDefault();
    });

})();
