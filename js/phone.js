var blink;
var circleCall = document.querySelector('.roundCall');

$(function() {
  $(".phone").mask("8(999) 999-99-99");
});

function red() {

  $(circleCall).animate({
    backgroundColor: "#ff6534"
  }, 2500);
}

function changeColor() {

  if (blink) {

    $(circleCall).animate({
      backgroundColor: "#00aa00"
    }, 2500);
    setTimeout(red, 2500)
  }
}

function girlyanda() {

  $(circleCall).animate({
    backgroundColor: "#f48634"
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
