var colorblink=false;
var circleCall =document.querySelector('.roundCall');

$(function(){
  $(".phone").mask("8(999) 999-99-99");
});


function red() {

  $(circleCall).animate({
  		backgroundColor: "red"
  	}, 2500 );

}

function changeColor() {

  $(circleCall).animate({
  		backgroundColor: "#abcdef"
  	}, 2500 );

    setTimeout(red,2500)

}

function girlyanda() {
    setInterval(changeColor,5000)
}


circleCall.onmouseover = function (e) {

  colorblink=true;

girlyanda();
}
