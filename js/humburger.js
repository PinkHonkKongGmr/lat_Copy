var humburger = document.querySelector('.humburger');

var line1 = document.querySelector('.ln1');
var line2 = document.querySelector('.ln2');
var line3 = document.querySelector('.ln3');


function humburgerToggle() {

  line1.classList.toggle('cross');
  line2.classList.toggle('hide');
  line3.classList.toggle('cross2');
}



humburger.addEventListener('click',humburgerToggle);
