'use strict';

(function () {
    window.getRandomElement = function(arr) {
        var rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    };
})();
