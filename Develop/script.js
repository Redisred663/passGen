// Assignment code here
var generateButton = document.getElementById("generate");
generateButton.addEventListener("click", function() {
  var password = newPassword(10);
  var passwordField = document.getElementById("password");
  passwordField.value = password;
  generateButton.innerHTML = "Generate New Password";
});

function renderPass() {
  submitBut.innerHTML = "Generate Password";
}

function newPassword(length) {
  let password = '';
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let passLength = length;

  const array = new Uint32Array(length);
  window.crypto.getRandomValues(array);

  for (i=0; i<length; i++) {
    password += chars[array[i] % chars.length];
  }
  console.log(password);
  return password;
}


