// Assignment Code
var generateBtn = document.querySelector("#generate");

var passLength;
var lowerCase;
var upperCase;
var numeric;
var specialChar;
// Write password to the #password input
function writePassword() {
  // variables to send to generate password
  while (!(passLength >= 8 && passLength <= 128))
    passLength = prompt("How long do you want your secure password to be? (8-128 characters)");
  lowerCase = confirm("Do you want lowercase letters?");
  upperCase = confirm("Do you want uppercase letters?");
  numeric = confirm("Do you want to include numbers?");
  specialChar = confirm("Do you want special characters?");

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var passwordOptions = "";
  var generatedPass = "";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var num = "0123456789"
  var special = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  if (lowerCase)
    passwordOptions += lower;
  if (upperCase)
    passwordOptions += upper;
  if (numeric)
    passwordOptions += num;
  if (specialChar)
    passwordOptions += special;

  for (let i = 0; i < passLength; i++) {
    var random = Math.floor(Math.random() * passwordOptions.length);
    generatedPass += passwordOptions[random];
  }
  passLength = 0;
  return generatedPass;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
