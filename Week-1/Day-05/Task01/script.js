
function myFunction(color = 'black', font) {
  document.getElementById("heading").style.color = color;
  document.getElementById("heading").style.fontFamily = font;
}

let fontSize = 30;

function increaseFont(){
  fontSize++;
  document.getElementById("heading").style.fontSize = fontSize + "px";
}
function decreaseFont(){
  document.getElementById("heading").style.fontSize = fontSize + "px";
  fontSize--;
}