// Assignment Code
const generateBtn = document.querySelector("#generate");





function  generatePassword() {   //this is the function to call to start the entire password generation
  function randomizer() { for (let i = 0; i < length; i++) { // this function randomly picks elements in the array allAllowedCharacters
    const randCharacters = Math.floor(Math.random() * allAllowedCharacters.length);
    console.log(allAllowedCharacters[randCharacters]);
    generatedCharacters.push(allAllowedCharacters[randCharacters])
  }} 
  let allAllowedCharacters = [] // this is declared to later have accepted elements pushed into the array
  let generatedCharacters = [] //this declares another array to later have elements pushed into it
  let length = prompt("How many character should your password be? (must be between 8 and 128 characters)");    //this generates prompt to get the desired number of characters for the password
  length = Math.floor(length) // this converts the string of numbers into an integer, this is important because it converts letters into 'NaN's to leter redirect the user if they try to type the letters for '1' as'one'

    if (length < 8)  { //this enforces the more than 8 peramiter
      alert("must choose number greater than 8. Please try again.")
      return
    }

    else if (length > 128) {//this enforces the less than 128 peramiter
      alert("Must be less than 128. Please try again.")
      return
    }

    else if (isNaN(length)) { //this keeps letters from entering further in the function 
      alert("Must be a number. Please try again.") 
      return
    }


    const uppercase = confirm("Would you like to include uppercase letters?")  // these 4 confirms get the desired characters for the password

    const lowercase = confirm("Would you like to include lowercase letters?")
  
    const numbers = confirm("Would you like to include numbers?")
  
    const special = confirm("Would you like to include special characters?")
    

  if (uppercase == true) { // these 4 if statements push the desired characters to the allAllowedCharacters array to create the pool for the randomizer function.
    
    allAllowedCharacters.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z')
  }

  if (lowercase == true) {
    allAllowedCharacters.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z')
  }

  if (numbers == true){
    allAllowedCharacters.push('1', '2', '3', '4', '5', '6', '7', '8', '9', '0')
  }

  if (special == true){
    allAllowedCharacters.push('!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '+', '<', '>', '?', '/', ':', ';')
  }

  if (allAllowedCharacters.length == 0){ // 5th if statement returs user to try again if no characters were selected to make the password
    alert("Must choose one or more kinds of characters to include in password. Please try again.")
    return
  }
  randomizer() //calls randomizer function

  return (generatedCharacters.join('')) //returns the generated password to the generatedcharacters password array


}




function writePassword() { //this function turns the generated password back to a normal string
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  
 
  

  passwordText.value = password; //this writes the generated password to the page

}



generateBtn.addEventListener("click", writePassword); // this is the start button


