// plik scripts.js

var buttons = document.getElementsByClassName('button');

for (var i = 0; i < buttons.length; i++){
  console.log(buttons[i].innerText)  
}
// onClick 
function click() {
	alert('Przycisk 1');
}
function click2() {
	alert('Przycisk 2 ');
}
function click3() {
	alert('Przycisk 3 ');
}