function delayedAlert() {
  var timeoutID = window.setTimeout(expandLogo, 800);
}

function expandLogo() {
  document.querySelector('.Name').classList.add('is-expanded');
}

delayedAlert();
