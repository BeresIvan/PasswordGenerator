
let passwordEl = document.getElementById("password");
let lengthEl = document.getElementById("length");
let lowercaseEl = document.getElementById("lovercase");
let uppercaseEl = document.getElementById("uppercase");
let numbersEl = document.getElementById("numbers");
let symbolsEl = document.getElementById("symbols");
let generateEl = document.getElementById("generate");


const randomFunc = {
  lower: getRandomlowerCase,
  upper: getRandomupperCase,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};
// generate event listener
generateEl.addEventListener("click", () => {
  let length = +lengthEl.value;
  let hasLower = lowercaseEl.checked;
  let hasUpper = uppercaseEl.checked;
  let hasNumber = numbersEl.checked;
  let hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    length,
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol
  );
});
// Genearate Password function
function generatePassword(length, lower, upper, number, symbol) {
  // Initiate password variable
  let generatedPassword = " ";
  // filter out unused characters
  let typesCount = lower + upper + number + symbol;

  console.log("typesCount: ", typesCount);

  let typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
    (item => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return " ";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      let funcName = Object.keys(type)[0];

      generatedPassword += randomFunc[funcName]();
    });
  
  }

  return finalPassword;





}

//lowercase randomization
function getRandomlowerCase() {
  let lowerCase = "abcdefghijklmnopqrstuvxyz";
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}
//upercase randomization
function getRandomupperCase() {
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function getRandomNumber() {
  let numbers = "0123456789";
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomSymbol() {
  let symbols = " !@#$%^&*(){}[]=<>/|\;'.,?~`+_-";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

