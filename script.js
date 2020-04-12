
//arrays:
var specialChar = ["+", "-", "&", "|", "!", "(", ")",  "{", "}", "[", "]", "^", "~", "*", "?", ":", "/"];

var numbers = [1,2,3,4,5,6,7,8,9];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var otherChars = numbers.concat(lowerCase,upperCase);

var allChars = specialChar.concat(numbers,lowerCase,upperCase);

//console.log(otherChars);
//console.log(allChars);


function generatePassword (){

    var length = prompt("Enter a number bewteen 8 and 128 for the length of your generated password: "); //user input for length of password
    var lengthNum = Number(length); //converting the user input length from a string to a number 
    //console.log(lengthNum);

    if (lengthNum < 8 || lengthNum > 128 ){ //conditional statement to check length requirements


        var length= prompt("Please enter a number greater than 8 and less than 128:");
        var lengthNum = Number(length);

    }else if (isNaN(lengthNum) === true){ //conditional statement to check if length is a number

        var length= prompt("Enter a NUMBER bewteen 8 and 128 for the length of your generated password:");
        var lengthNum = Number(length);

        
    };

    //booelan special characters/lowercase/uppercase
    var incCharSpecial = confirm("Include special characters?");
    var incCharOthers= confirm("Include numbers, lower case and upper case letters?");

    var password = [];

        if(incCharSpecial && incCharOthers === false){ // conditional statements generating password based on true/false user input character requirements
            for (var i = 0; i < lengthNum; i++) { //iterates over user input length 
            var test = specialChar[Math.floor(Math.random() * specialChar.length)]; //generating random elements from chosen characcter array, iterating over user input length
            password.push(test); //i random elements pushed to a new array
            }
            return password.join("");//
            //console.log(password.join("")); //string
        } else if (incCharSpecial && incCharOthers){
            for (var i = 0; i < lengthNum; i++) {
                var test = allChars[Math.floor(Math.random() * allChars.length)]; 
                password.push(test); 
            }
            return password.join("");
            //console.log(password.join(""));
        }else if (incCharSpecial === false && incCharOthers){
            for (var i = 0; i < lengthNum; i++) {
                var test = otherChars[Math.floor(Math.random() * otherChars.length)]; 
                password.push(test); 
            }
            return password.join("");
            //console.log(password.join(""));
        }else { //if user input is false for both character checkers

            return("No characters selected.");
        }


    };
                        

    var generateBtn = document.querySelector("#generate"); //target generate password button

    // Write password to the #password input
    function writePassword() {
    var password = generatePassword(); 
    var passwordText = document.querySelector("#password");

    passwordText.value = password; 

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

