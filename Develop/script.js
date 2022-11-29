// Assignment code here
var generatePass = document.querySelector("placeholder");
var submitBut = document.querySelector("#generate");

var button = document.createElement("button");
function renderPass() {
  submitBut.innerHTML = "";
}

randomPass(10);
function randomPass(stringLength){
  var randoString = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz"
  for (let i = 0; i < stringLength; i++) {
    randoString += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  console.log(randoString);
}

submitBut.addEventListener("click", function(event) {
  event.preventDefault();
});
