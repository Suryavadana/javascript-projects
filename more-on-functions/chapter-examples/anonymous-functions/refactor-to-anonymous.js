/* function reverse(str) {
  let lettersArray = str.split('');
  let reversedLettersArray = lettersArray.reverse();
  return reversedLettersArray.join('');
} */


let reverseFunction =function(revStr){
  let lettersArray = revStr.split('');
 let reversedLettersArray = lettersArray.reverse();
 return reversedLettersArray.join('');
};
console.log(reverseFunction('surya'));
//console.log(reverse("LaunchCode"));
