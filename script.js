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
//console.log("hello!") ;


let passwordLength = parseInt(
  prompt("How many characters would you like your password to be?")
);
//   if (passwordLength < 8){
//   return"Choose a length of at least 8 characters and no more than 128 characters." ;
//    }
//   if (passwordLength > 128){
//   return"Choose a length of at least 8 characters and no more than 128 characters." ;
//  }
 


//validate input
// while(isNaN(passwordLength) || passwordLength <= 0) {
//  passwordLength = parseInt(
//   prompt("Please enter a valid number for password length.")
//  );
function userInput(){
  userInput = []
  result =prompt("How many characters between 8 and 128?");


 

if(isNaN(result) || result < 8 || result > 128) {
  alert("Must have 8 to 128 characters!");
  return false;
 }

if (confirm("Will the password contain numbers?")){
userInput = userInput.concat(numericCharacters);
}
if (confirm("Will the password contain special characters?")){
userInput = userInput.concat(specialCharacters);
} 

if (confirm("Will the password contain lower case letters?")){
  userInput = userInput.concat(lowercasedCharacters);
  } 

  if (confirm("Will the password contain upper case letters?")){
    userInput = userInput.concat(uppercaseCharacters);
    } 

    else {
      alert("You must choose at least one type of character!");
    }

    console.log(userInput);
    return true;
  }


// const specialCharacters = confirm("Click OK to confirm including special characters.");

// const numericCharacters = confirm("Click OK to confirm including numeric characters.");

// const uppercaseCharacters = confirm("Click OK to confirm including uppercase characters.");

// const lowercaseCharacters = confirm("Click OK to confirm including lowercase characters.");

//return "generated password !" ;
//}

//  const passwordText = ["numericCharacters","lowercaseCharacters"]
//  const passwordText("specialCharacters","uppercaseCharacters")



// var userAnswers = userInfo();
// length of the password
//const passwordLength = prompt("How many characters would you like your password to be?");
//let passwordLength = parseInt(prompt("How many characters would you like your password to be?"));

// Write password to the #password input
function writePassword() {
  console.log("Start write password function")
  let prompt = UserInput();
  let passwordText = document.querySelector("#password");

  if(prompt) {
    let randomPassword = generatePassword();
    passwordText.value = randomPassword;
  }

   
  else { 
    alert("You must choose at least one of the characters!");
  }
}

  
  // var password = generatePassword()
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

   
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
