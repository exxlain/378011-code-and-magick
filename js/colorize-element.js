'use strict';
(function() {
    window.colorize = {
        colorizeElement: function(element, arr, callBackFunction) {
            var color = window.getRandomElement(arr);

            if (typeof callBackFunction === 'function') {
                callBackFunction(element, color);
            }
        }
    };

})();
