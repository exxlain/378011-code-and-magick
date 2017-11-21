window.renderStatistics = function(ctx, names, times) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.beginPath();
    ctx.moveTo(110, 20);
    ctx.lineTo(530, 20);
    ctx.lineTo(610, 140);
    ctx.lineTo(530, 290);
    ctx.lineTo(110, 290);
    ctx.lineTo(30, 140);
    ctx.lineTo(110, 20);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(100, 10);
    ctx.lineTo(520, 10);
    ctx.lineTo(600, 130);
    ctx.lineTo(520, 280);
    ctx.lineTo(100, 280);
    ctx.lineTo(20, 130);
    ctx.lineTo(100, 10);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);

    var max = -1;
    var findMaxTime = function(i) {
        times[i] = Math.floor(times[i]);
        var time = times[i];
        if (time > max) {
            max = time;
        }
        return max;
    };

    for (var i = 0; i < times.length; i++) {
        findMaxTime(i);
    }

    var generateColor = function(i) {
        if (names[i] != 'Вы') {
            return ctx.fillStyle = 'rgba(0, 0, 255,' + (Math.random() * 0.9 + 0.1) + ')';
        }
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    };

    var histogramHeight = 150;
    var step = histogramHeight / (max - 0);
    var initialX = 140;
    var initialY = 250;
    var indent = 90;
    var barWidth = 40;
    var lineHeightNames = 20;
    var lineHeightTimes = 10;
    var generateBar = function(i) {
        ctx.fillRect(initialX + indent * i, initialY - times[i] * step, barWidth, times[i] * step);
    };

    var generateText = function(i) {
        ctx.fillText(names[i], initialX + indent * i, initialY + lineHeightNames);
        ctx.fillText(times[i], initialX + indent * i, initialY - times[i] * step - lineHeightTimes);
    };

    for (var i = 0; i < times.length; i++) {
        generateColor(i);
        generateBar(i);
        generateText(i);
    }

};
