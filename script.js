
//arrays:
var specialChar = ["+", "-", "&", "|", "!", "(", ")",  "{", "}", "[", "]", "^", "~", "*", "?", ":", "/"];

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var otherChars = numbers.concat(lowerCase,upperCase);

var allChars = specialChar.concat(numbers,lowerCase,upperCase);

//console.log(otherChars);
console.log(allChars);

//function createPassword(charLength, capitalLetters = false, specialLetters = false, lowercaseLetters=false ) {
    //console.log(charLength, lowercaseLetters, capitalLetters, specialLetters)
    //return password
//}
//stores user input length
var length = prompt("Enter a number bewteen 8 and 128 for the length of your generated password: ");
var lengthNum = Number(length);
console.log(typeof lengthNum);
//how do we check this user input is a number? 
//if statement to check length requirements. Could this be in a function

if (lengthNum < 8 || lengthNum > 128 ){


    var length= prompt("Enter a number bewteen 8 and 128 for the length of your generated password:");
    var lengthNum = Number(length);

}else{

    
};

//booelan special characters/lowercase/uppercase
var incCharSpecial = confirm("Include special characters?");
var incCharOthers= confirm("Include Numbers, lower case and upper case letters?");
//var incLowerChar = confirm("Include lower case characters?");
//var incUpperChar = confirm("Include upper case characters?");

function generatePassword () {
var password = [];
 //createPassword(110, capitalLetters=true)   
    //function createPassword(charLength, capitalLetters = false, specialLetters = false, lowercaseLetters=false ) {
    //console.log(charLength, charSpecial, charNum, lowerChar, upperChar)
    //return password
    if(incCharSpecial && incCharOthers === false){
        for (var i = 0; i < lengthNum; i++) {
          var test = specialChar[Math.floor(Math.random() * specialChar.length)]; //creating a new array with random elements from specialChar with length = userinput from prompt. 
          password.push(test); //new array
        }
        return password.join("");
        //console.log(password.join("")); //string
        //return password.join("") 
    } else if (incCharSpecial && incCharOthers){
        for (var i = 0; i < lengthNum; i++) {
            var test = allChars[Math.floor(Math.random() * allChars.length)]; //creating a new array with random elements from specialChar with length = userinput from prompt. 
            password.push(test); //new array
          }
          return password.join("");
          //console.log(password);
    }else if (incCharSpecial === false && incCharOthers){
        for (var i = 0; i < lengthNum; i++) {
            var test = otherChars[Math.floor(Math.random() * otherChars.length)]; //creating a new array with random elements from specialChar with length = userinput from prompt. 
            password.push(test); //new array
          }
          return password.join("");
          //console.log(password);
    }else {

        return;
    }
    //return password.join("");
};
      

generatePassword();

            
            
//GIVEN CODE 
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);