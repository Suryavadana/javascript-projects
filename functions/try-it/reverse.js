function reverse(str) {
   /*let lettersArray = str.split('');
   let reversedLettersArray = lettersArray.reverse();*/
   let reversedLettersArray=str.split('').reverse().join('');

   return reversedLettersArray;
}
console.log(reverse('surya'));