function decreasingSum(integer) {
   if (integer === 1){
      return integer;
   } else {
      //call decreasingSum function again
      return integer + (decreasingSum(integer-1));
     
      return decreasingSum;
   }
}

console.log(decreasingSum(5));
