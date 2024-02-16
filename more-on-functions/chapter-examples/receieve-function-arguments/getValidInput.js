const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
let isA = function(letter)
{
  if(letter[0] =='a')
  {
    return letter;
  }
}
console.log(getValidInput('letter: ' , isA));
// TODO 2: write a validator 
// that ensures input is a vowel

// Be sure to test your code!

let aeiou = function (vowel)
{
    if(vowel=='a'||vowel=='e'||vowel=='i',vowel=='o'||vowel=='u')
    {
        return vowel;
    }
  }

console.log(getValidInput('vowel: ', aeiou));
