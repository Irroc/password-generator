// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function  generatePassword() {
  
  let length = prompt("How many character should your password be? (must be between 8 and 288 characters)");
  length = Math.floor(length)
  if (length < 8)  { 
    alert("must choose number greater than 8")
    releaseEvents
  }

  else if (length > 288) {
    alert("Must be less than 288")
    releaseEvents
  }

  else if (length = NaN) { //THIS DOESNT WORK FIX LATER
    alert("Must be a number")
  }

  else console.log ("made past first is statement")

  const uppercase = confirm("Would you like to include lowercase letters?")  

  const lowercase = confirm("Would you like to include uppercase letters?")
 
  const numbers = confirm("Would you like to include numbers?")
 
  const special = confirm("Would you like to include special characters")
  
    


//IMPORTANT BELOW
    return "the new password"
}




function writePassword() {
//  prompt("how many character should your password be? (must be 8-288 characters)")
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  
 
  
  // do your stuff here
  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);


