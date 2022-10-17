// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min * (1 - rand) + rand * max)
}
function getRandomItem(list) {
  return list[randomInt(list.length)]
}
function generatePassword() {
    var userInput = window.prompt("How long do you want your password to be?")
    if (userInput === null) {
      return
    }
    var passwordLength = parseInt(userInput)
    if (isNaN(passwordLength)) {
      window.alert("That's not a number!")
      return generatePassword()
    }  
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Invalid password length. Length must be between 8 and 128 charachters")
      return generatePassword()
    }  
  var userWantsNumbers = window.confirm("Would you like to include Numbers in your password?")
  var userWantsSymbols = window.confirm("Would you like to include Symbols in your password?")
  var userWantsLowercase = window.confirm("Would you like to include Lowercase letters in your password?")
  var userWantsUppercase = window.confirm("Would you like to include Uppercase letters  in your password?")
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["~", "!", "@", "#", "$", "%", "^", "&", "*"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = []
  var cartList = []
  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }
  if (userWantsNumbers === true) {
    cartList.push(numberList)
  }
  if (userWantsSymbols === true) {
    cartList.push(symbolList)
  }
  if (userWantsLowercase === true) {
    cartList.push(lowercaseList)
  }
  if (userWantsUppercase === true) {
    cartList.push(uppercaseList)
  }
  if (cartList.length === 0) {
    alert("User didn't include any characters, you must try again")
    return generatePassword()
  }
  var generatedPassword = ""
  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(cartList)
    var randomChar = getRandomItem(randomList)
    generatedPassword += randomChar
  }
  return generatedPassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password) {
    passwordText.value = password;
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);