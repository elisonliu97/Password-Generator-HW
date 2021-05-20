// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function to generate the password
function generatePassword(){
  var pwLen = Number(window.prompt("How long do you want the password to be? (8-128)", ""));
  var lowCond = (window.confirm("Do you want lower case letters in your password? (a-z)"));
  var upCond = (window.confirm("Do you want upper case letters in your password? (A-Z)"));
  var numCond = (window.confirm("Do you want numbers in your password? (0-9)"));
  var specCond = (window.confirm("Do you want special characters in your password? (!,@,#,$,%,...)"));

  // list of characters allowed
  var lowChar = "abcdefghijklmnopqrstuvwxyz";
  var upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numChar = "0123456789";
  var specChar = "!@#$%^&*_-+=";
  var passChar = "";

  // creates a list of possible characters according to user's specifications 
  if (lowCond){
    passChar += lowChar;
    console.log(passChar);
  }
  if (upCond){
    passChar += upChar;
    console.log(passChar);
  }
  if (numCond){
    passChar += numChar;
    console.log(passChar);
  }
  if (specCond){
    passChar += specChar;
    console.log(passChar);
  }


}

// when button is clicked, prompts come up
// prompt 1: length between 8-128
// prompt 2: char requirements
// generate password
// alert that password is generated
// show on screen password