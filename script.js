// Assignment Code
var generateBtn = document.querySelector("#generate");
// password generator code in this section
var numericCharacters = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","_",
"-","=","+"
,"`","~","<",">","?","/",",",".",";",":","'", "[","]","{","}","|"];
var lowercasedCharacters = ["a","b"];
var uppercasedCharacters = ["A","B"];

// take in user information
// function userInfo(){

//var length = 
//cosnole.log(length)
// }


//process input info
function generatePassword(){
console.log("hello!")  

let passwordLength = parseInt(
  prompt("How many characters would you like your password to be?")
);

while(isNaN(passwordLength) || passwordLength <= 0) {
 passwordLength = parseInt(
   prompt("Please enter a valid number for password length.")
 );
}

const specialCharacters = confirm("Click OK to confirm including special characters.");

const numericCharacters = confirm("Click OK to confirm including numeric characters.");

const uppercaseCharacters = confirm("Click OK to confirm including uppercase characters.");

const lowercaseCharacters = confirm("Click OK to confirm including lowercase characters.");


return "generated password !";
}

// var userAnswers = userInfo();


// length of the password
//const passwordLength = prompt("How many characters would you like your password to be?");

//let passwordLength = parseInt(prompt("How many characters would you like your password to be?"));


// validate input
//while(isNaN(passwordLength) || passwordLength <= 0) {
//  passwordLength = parseInt(prompt("Please enter a valid number for password length."));
//}
 


// const userAnswer = prompt("Click OK to confirm including special characters.");

// const userAnswer = prompt("Click OK to confirm numeric characters.");

// const userAnswer = prompt("Click OK to confirm including uppercase characters.");

// const userAnswer = prompt("Click OK to confirm including lowercash characters.");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
