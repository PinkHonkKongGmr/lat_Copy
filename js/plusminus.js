var togglers = document.querySelectorAll('.toggler');
var infos = document.querySelectorAll('.info');
var pluses = document.querySelectorAll('.plus');
var minuses = document.querySelectorAll('.minus');
var questions = document.querySelectorAll('.question');

for (let toggle = 0; toggle < togglers.length; toggle++) {

  let thatTogglers;
  let thatInfo;
  let thatPlus;
  let thatMinus;

  thatTogglers = togglers[toggle];
  thatInfo = infos[toggle];
  thatPlus = pluses[toggle];
  thatMinus = minuses[toggle];
  $(thatTogglers).click(function() {
    $(thatTogglers).toggleClass('itsgreen');
    $(thatPlus).slideToggle(0);
    $(thatMinus).slideToggle(0);
    $(thatInfo).slideToggle();

  });
}


for (let toggle = 0; toggle < togglers.length; toggle++) {

  togglers[toggle].onmouseover = function() {
    questions[toggle].classList.toggle('fontGreen');
  }

  togglers[toggle].onmouseout = function() {
    questions[toggle].classList.toggle('fontGreen');
  }
}
