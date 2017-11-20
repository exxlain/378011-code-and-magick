window.renderStatistics = function (ctx, names, times) {
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
  ctx.font = '14px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;
  var maxIndex = -1;
  for(var i = 0 ; i < times.length; i++) {
    times[i] = Math.floor(times[i]);
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  var initialX = 140;
  var initialY = 250;
  var indent = 90;
  var indentText = 10;
  var barWidth = 50;
  var lineHeightNames = 20;
  var lineHeightTimes = 10;

 for(var j = 0; j < times.length; j++) {
  if (names[j]=== 'Вы'){
     ctx.fillStyle = 'rgba(255, 0, 0, 1)';
   }
   else{
     ctx.fillStyle = 'rgba(0, 0, 255,'+ Math.random()+')';
   }
     ctx.fillRect(initialX +indent*j, initialY-times[j] * step, barWidth, times[j] * step);
     ctx.fillStyle = '#000';
     ctx.fillText(names[j], initialX+indent*j+indentText, initialY +lineHeightNames);
     ctx.fillText(times[j], initialX+indent*j+indentText, initialY-times[j] * step-lineHeightTimes);
 }
};
