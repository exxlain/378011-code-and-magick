'use strict';
/*модуль загрузки  и отрисовки похожих магов */
(function() {

    var wizards = [];

/*система "отличности" одного мага от другого*/
    var getRank = function (wizard) {
        var rank = 0;

        if (wizard.colorCoat === window.myWizard.coatColor) {
            rank += 2;
        }
        if (wizard.colorEyes === window.myWizard.eyesColor) {
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
  var wizardsComparator = function (left, right) {
    var rankDiff = getRank(right) - getRank(left);
    return rankDiff === 0 ? namesComparator(left.name, right.name) : rankDiff;
  };


/*выполнение фильтрации*/

  var updateFilter = function () {
    window.render(wizards.sort(wizardsComparator));
  };

  window.myWizard.onChange = function () {
    updateFilter();
  };


  /*  обработчик успешной загрузки*/
    var successHandler = function(data) {
        wizards = data;
        updateFilter();
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
