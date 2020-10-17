let lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
let uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"]
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let specialCharacters = [" ", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "<", ">", "/", "|", "\\", ";", "'", ".", ",", "?", "~", "`", "+", "_", "-",]
// Assignment Code
let generateBtn = document.querySelector("#generate");


function generatePassword() {
  let passwordLength = prompt("Please enter pw length between 8 and 128");
  let includeLowercaseLetters = confirm("Do you want lowercase letters?");
  let includeUppercaseLetters = confirm("Do you want uppercase letters?");
  let includeNumbers = confirm("Do you want Numbers letters?");
  let includeSymbols = confirm("Do you want Symbols letters?");
  



    let password = [];
    for (let i=0; i < passwordLength; 1++){
    }
    return password;
}

generatePassword();

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
let lowercaseLetters = ["A", "B", "C"]
let numbers = ["1", "2", "3"]
let specialCharacters = ["&", "(", "%"]

