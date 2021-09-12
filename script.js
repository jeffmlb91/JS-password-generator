// Variables that contains all the characters the user may chose"

var generateBtn = document.querySelector("#generate");
var choiceLowerCase = "abcdefghijklmnopqrstuvwxyz";
var choiceUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var choiceNumber = "0123456789";
var choiceSpecialChar = "!@#$%^&*()_+}{:<>?/.,';][=-";
var userChoice = "";
var character = "";

console.log(generateBtn);
console.log(choiceLowerCase);
console.log(choiceUpperCase);
console.log(choiceNumber);
console.log(choiceSpecialChar);
console.log(userChoice);

// Defining the function top prompt the user to enter their choices.

function generatePassword() {
  var askUser = parseInt(
    window.prompt("Please select a password between 8 and 128")
  );
  if (askUser < 8 || askUser > 12) {
    alert("Please select a password that meets the number criteria");
  } else {
    var lowerCaseConfirm = window.confirm(
      "Would you like to include lowercase letters in the password?"
    );
    var upperCaseConfirm = window.confirm(
      "Would you like to include uppercase letters in the password?"
    );
    var numberConfirm = window.confirm(
      "would you like to include numbers in the password?"
    );
    var specialCharConfirm = window.confirm(
      "Would you like to include special characters in your password?"
    );
    if (lowerCaseConfirm === true) {
      userChoice += choiceLowerCase;
    }
    if (upperCaseConfirm === true) {
      userChoice += choiceUpperCase;
    }
    if (numberConfirm === true) {
      userChoice += choiceNumber;
    }
    if (specialCharConfirm === true) {
      userChoice += choiceSpecialChar;
    }
    console.log(userChoice);

    for (var i = 0; i < askUser; i++) {
      // this will take allChoices and get the character at the index of the random number we got from our password variable and add it to the empty string called character. THIS IS OUR FINAL PASSWORD
      var password = Math.floor(userChoice.length * Math.random());
      character += userChoice.charAt(password);
      console.log(password);
    }
    var passwordText = document.querySelector("#password");
    passwordText.value = character;
  }
}
generateBtn.addEventListener("click", generatePassword);
