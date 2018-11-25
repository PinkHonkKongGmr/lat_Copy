var blink;
var circleCall = document.querySelector('.roundCall');
var colors = ["#ff6534","#00aa00","#f48634","#8000ff","#8a2be2","#082567","#470027","#4c5866","#ffd700","#ffcf48","#e4a010"];



function color () {
  return Math.floor(Math.random() * colors.length)
}


$(function() {
  $(".phone").mask("8(999) 999-99-99");
});

function red() {

  $(circleCall).animate({
    backgroundColor: colors[color()]
  }, 2500);
}

function changeColor() {

  if (blink) {

    $(circleCall).animate({
      backgroundColor: colors[color()]
    }, 2500);
    setTimeout(red, 2500)
  }
}

function girlyanda() {

  $(circleCall).animate({
    backgroundColor: colors[color()]
  }, 5000);
  setInterval(changeColor, 5000)
}


circleCall.onmouseover = function(e) {
  blink = true;
  girlyanda();
}

circleCall.onmouseout = function(e) {
  blink = false;
}
