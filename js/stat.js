var findMaxTime = function(arr) {
    var max = -1;
    for (var i = 0; i < arr.length; i++) {
        var time = Math.floor(arr[i]);
        if (time > max) {
            max = time;
        }
    }
    return max;
};

var getColor = function(isYou) {
    if (isYou) {
        return 'rgba(255, 0, 0, 1)';
    } else {
        return 'rgba(0, 50, 255, ' + Math.random() + ')';
    }
};

var generateText = function(ctx, text, color, coordinateX, coordinateY) {
    ctx.fillStyle = color;
    ctx.font = '16px PT Mono';
    ctx.fillText(text, coordinateX, coordinateY);
};
var generateBar = function(ctx, color, coordinateX, coordinateY, barWidth, barHeight) {
    ctx.fillStyle = color;
    ctx.fillRect(coordinateX, coordinateY, barWidth, barHeight);
};

    var widthCloud = 420;
    var edgeCloudX = 80;
    var heightCloud = 240;
    var offset = 10;
var getCloud = function(ctx, color, coordinateX, coordinateY) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(coordinateX, coordinateY);
    ctx.lineTo(coordinateX + widthCloud, coordinateY);
    ctx.lineTo(coordinateX + widthCloud + edgeCloudX, coordinateY + heightCloud / 2);
    ctx.lineTo(coordinateX + widthCloud, coordinateY + heightCloud);
    ctx.lineTo(coordinateX, coordinateY + heightCloud);
    ctx.lineTo(coordinateX - edgeCloudX, coordinateY + heightCloud / 2);
    ctx.lineTo(coordinateX, coordinateY);
    ctx.closePath();
    ctx.fill();
};
var getShadow = function(ctx, color, coordinateX, coordinateY) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(coordinateX + offset, coordinateY + offset);
    ctx.lineTo(coordinateX + widthCloud + offset, coordinateY + offset);
    ctx.lineTo(coordinateX + widthCloud + edgeCloudX + offset, coordinateY + heightCloud / 2 + offset);
    ctx.lineTo(coordinateX + widthCloud + offset, coordinateY + heightCloud + offset);
    ctx.lineTo(coordinateX + offset, coordinateY + heightCloud + offset);
    ctx.lineTo(coordinateX - edgeCloudX + offset, coordinateY + heightCloud / 2 + offset);
    ctx.lineTo(coordinateX + offset, coordinateY + offset);
    ctx.closePath();
    ctx.fill();
};
window.renderStatistics = function(ctx, names, times) {
    getShadow(ctx, 'black', 100, 10);
    getCloud(ctx, 'white', 100, 10);
    generateText(ctx, 'Ура вы победили!', '#000000', 120, 40);
    generateText(ctx, 'Список результатов:', '#000000', 120, 60);

    findMaxTime(times);

    var indent = 50;
    var initialX = 150;
    var initialY = 230;
    var lineHeight = 15;
    var histogramHeight = 150;
    var step = histogramHeight / (max - 0);

    for (var i = 0; i < times.length; i++) {
        var color = getColor(names[i] === 'Вы');

        generateText(ctx, names[i], color, initialX + indent * i, initialY + lineHeight);

        generateText(ctx, times[i], color, initialX + indent * i, initialY - times[i] * step - lineHeight);

        generateBar(ctx, color, initialX + indent * i, initialY - times[i] * step, barWidth, times[i] * step);
    }
};
