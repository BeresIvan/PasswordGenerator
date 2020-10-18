// Assignment Code
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}
// in this part of the code we have the variables and the function with the promts
let generateBtn = document.querySelector("#generate");
let lowerCase = "abcdefghijklmnopqrstuvxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
let numbers = "0123456789";
let specialCharacters = " !@#$%^&*(){}[]=<>/|\;'.,?~`+_-";

function generatePassword() {
    let passwordLength = prompt("Enter password length");
    if (passwordLength >= 8 && passwordLength <= 128) {
    } else {
      alert("Password must be between 8 and 148 characters");
      return generatePassword();
    }    
    let lowerCase = confirm(
        "Do you want to include lowercase letters?"
    );
    let upperCase = confirm(
        "Do you want to include uppercase letters?"
    );
    let numbers = confirm(
        "Do you want to include numbers?"
    );
    let specialCharacters = confirm(
        "Do you want to include special characters?"
    );
    let selectedCharacters = "";

    if (lowerCase === true) {
      selectedCharacters = selectedCharacters + lowerCase;
    }
    if (upperCase === true) {
      selectedCharacters = selectedCharacters + upperCase;
    }
    if (numbers === true) {
      selectedCharacters = selectedCharacters + numbers;
    }
    if (specialCharacters === true) {
      selectedCharacters = selectedCharacters + specialCharacters;
    }
        
    let finalPassword = password (passwordLength, selectedCharacters);
    return finalPassword;
}
// in this part of the code we have the forloop
function password (passwordLength, selectedCharacters) {
   let password = "";
   for (let i = 0; i < passwordLength; i++) {
       password += selectedCharacters.charAt(Math.floor(Math.random() * selectedCharacters.length));
   }
   return password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
