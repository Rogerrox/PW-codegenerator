// Assignment Code
var generateBtn = document.querySelector("#generate");
// password generator code in this section
var number = [1,2,3,4,5,6,7,8,9,0]
var symbol = ["!","@","#","$","%","^","&","*","(",")","_",
"-","=","+"
,"`","~","<",">","?","/",",",".",";",":","'" ]
var 


// take in user information
function userInfo(){
var length = 
console.log(length)
}


//process input info
function generatePassword(){
var userAnswers = userInfo();

let person = prompt("How many characters would you like you password to contain?")


if (userAnswer"Click OK to confirm including special characters") {
  
("Click OK to confirm including lowercase characters.")}
("Click OK to confirm including upercase characters.")
console.log(userAnswer)


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
     
    //return 12;

// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
