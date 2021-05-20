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
  var pwLen = Number(window.prompt("How long do you want the password to be? (8-128)", "8"));
  // if given an invalid input, will stop 
  if (!(pwLen>=8 && pwLen<=128)){
    window.alert("This is an invalid choice.");
    return;
  }
  var lowCond = (window.confirm("Do you want lower case letters in your password? (a-z)"));
  var upCond = (window.confirm("Do you want upper case letters in your password? (A-Z)"));
  var numCond = (window.confirm("Do you want numbers in your password? (0-9)"));
  var specCond = (window.confirm("Do you want special characters in your password? (!,@,#,$,%,...)"));

  // list of characters allowed
  var lowChar = "abcdefghijklmnopqrstuvwxyz";
  var upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numChar = "0123456789";
  var specChar = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var passChar = "";
  var constChar = [];

  // generated password holder
  var randPass = "";

  // creates a list of possible characters according to user's specifications 
  if (lowCond){
    passChar += lowChar;
    constChar.push(lowChar.charAt(Math.floor(Math.random()*lowChar.length)));
  }
  if (upCond){
    passChar += upChar;
    constChar.push(upChar.charAt(Math.floor(Math.random()*upChar.length)));
  }
  if (numCond){
    passChar += numChar;
    constChar.push(numChar.charAt(Math.floor(Math.random()*numChar.length)));
  }
  if (specCond){
    passChar += specChar;
    constChar.push(specChar.charAt(Math.floor(Math.random()*specChar.length)));
  }

  // password generation
  for (var i = 0; i < pwLen; i++){
    randPass += passChar.charAt(Math.floor(Math.random()*passChar.length));
  }

  // To ensure that the generated password fulfills the conditions
  var randArray = randPass.split('');

  // replace the first few chars with chars that fulfill the conditions
  for (var x = 0; x <constChar.length; x++){
    randArray[x] = constChar[x];
  }

  randPass = randArray.join('');
  
  return randPass;

}
