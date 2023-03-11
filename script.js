// Assignment Code
var generateBtn = document.querySelector("#generate");
// password generator code in this section
var numericCharacters = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","_",
"-","=","+"
,"`","~","<",">","?","/",",",".",";",":","'", "[","]","{","}","|"];
var lowercasedCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",
"q","r","s","t","u","v","w","x","y","z"];
var uppercasedCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U,","V","W","X","Y","Z"];

function generatePassword(){
console.log("hello!") ;


let passwordLength = parseInt(
  prompt("How many characters would you like your password to be?")
);
 // if (passwordLength >= 8){
 //   console.log("password is correct length");
   //  }
 


//validate input
while(isNaN(passwordLength) || passwordLength <= 0) {
 passwordLength = parseInt(
   prompt("Please enter a valid number for password length.")
 );
}
const specialCharacters = confirm("Click OK to confirm including special characters.");

const numericCharacters = confirm("Click OK to confirm including numeric characters.");

const uppercaseCharacters = confirm("Click OK to confirm including uppercase characters.");

const lowercaseCharacters = confirm("Click OK to confirm including lowercase characters.");

return "generated password !" ;
}

// const passwordText = ["numericCharacters","lowercaseCharacters"]
// passwordText("specialCharacters","uppercaseCharacters")



// var userAnswers = userInfo();
// length of the password
//const passwordLength = prompt("How many characters would you like your password to be?");
//let passwordLength = parseInt(prompt("How many characters would you like your password to be?"));

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
