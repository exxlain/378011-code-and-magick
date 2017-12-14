'use strict';
/*модуль загрузки  и отрисовки похожих магов */
(function() {

    var coatColor;
    var eyesColor;
    var wizards = [];

/*система "отличности" одного мага от другого*/
    var getRank = function (wizard) {
        var rank = 0;

        if (wizard.colorCoat === coatColor) {
            rank += 2;
        }
        if (wizard.colorEyes === eyesColor) {
            rank += 1;
        }

        return rank;
    };

/*сорировка по имени в алфавитном порядке*/
    var namesComparator = function (left, right) {
        if (left > right) {
            return 1;
        } else if (left < right) {
            return -1;
        } else {
            return 0;
        }
    };

/*функция фильтрации*/
    var updateWizards = function () {
        window.render(wizards.sort(function(left, right) {
            var rankDiff = getRank(right) - getRank(left);
            if (rankDiff === 0) {
                rankDiff = namesComparator(left.name, right.name);
            }
            return rankDiff;
        }));
    };


/*выполнение фильтрации*/
    window.wizard.onEyesChange = function (color) {
        eyesColor = color;
        window.debounce(updateWizards);
    };

    window.wizard.onCoatChange = function (color) {
            coatColor = color;
            window.debounce(updateWizards);
        };


  /*  обработчик успешной загрузки*/
    var successHandler = function(data) {
        wizards = data;
        updateWizards();
    };

    /*  обработчик ошибки*/
    var errorHandlerStyle = function(nodeName) {
        nodeName.style.zIndex = '100';
        nodeName.style.margin = '0 auto';
        nodeName.style.textAlign = 'center';
        nodeName.style.backgroundColor = 'red';
        nodeName.style.position = 'absolute';
        nodeName.style.left = 0;
        nodeName.style.right = 0;
        nodeName.style.fontSize = '30px';
    };
    var errorHandler = function(errorMessage) {
        var node = document.createElement('div');
        errorHandlerStyle(node);
        node.textContent = errorMessage;
        document.body.insertAdjacentElement('afterbegin', node);
    };


    window.backend.load(successHandler, errorHandler);

})();
