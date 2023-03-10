// Assignment Code
var generateBtn = document.querySelector("#generate");
// password generator code in this section
var number = [1,2,3,4,5,6,7,8,9,0]
var symbol = ["!","@","#","$","%","^","&","*","(",")","_",
"-","=","+"
,"`","~","<",">","?","/",",",".",";",":","'" ]
var toUppercase
var toLowercase


// take in user information
function userInfo(){

  const userInfo = prompt("Click OK to confirm including special characters.");

  const userInfo = prompt("Click OK to confirm numeric characters.");
  
  const userInfo = prompt("Click OK to confirm including uppercase characters.");
  
  const userInfo = prompt("Click OK to confirm including lowercash characters.");




//var length = 
//cosnole.log(length)
}


//process input info
function generatePassword(){

var userAnswers = userInfo();


// length of the password
const passwordLength = prompt("How many characters would you like your password to be?");

let passwordLength = parseInt(prompt("How many characters would you like your password to be?"));


// validate input
while(isNaN(passwordLength) || passwordLength <= 0) {
  passwordLength = parseInt(prompt("Please enter a valid number for password length."));
}
// Password requirements

const userAnswer = prompt("Click OK to confirm including special characters.");

const userAnswer = prompt("Click OK to confirm numeric characters.");

const userAnswer = prompt("Click OK to confirm including uppercase characters.");

const userAnswer = prompt("Click OK to confirm including lowercash characters.");

// if (userAnswer"Click OK to confirm including special characters") {
  // ("Click OK to confirm including lowercase characters.")}
// ("Click OK to confirm including upercase characters.")
// console.log(userAnswer)
}
// const pass_el = document.querySelector("password span")
// const length =16
// const chars =
// "ABCDEF"

//generatePassword getRandomLower
   
//var index = Math.floor(Math.random()*Options.length);
//var computerChoice = options[index];
   
    // function getRandomLower(){

  //  }

  //  expression1 = (x >= 8);
  // var expression2 = (x <=)128;


// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
