var colorblink=false;
var circleCall =document.querySelector('.roundCall');

$(function(){
  $(".phone").mask("8(999) 999-99-99");
});


function functionName() {

}

function changeColor() {

  $(circleCall).animate({
  		backgroundColor: "#abcdef"
  	}, 2500 );

}

function girlyanda() {
    setInterval(changeColor,20)
}


circleCall.onmouseover = function (e) {

  colorblink=true;

girlyanda();
}
