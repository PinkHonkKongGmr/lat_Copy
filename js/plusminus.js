
var pluses = document.querySelectorAll('.plus');





for (let plus=0;plus<pluses.length;plus++) {

  let that;
  let onplus=true;


  that=pluses[plus];
  $(that).click(function() {
  if (onplus) {
    $(that).hide()
    onplus=false;
    return;
  }

  if (onplus==false) {
    $(that).show()
    onplus=true;
    return;
  }
  });

}
