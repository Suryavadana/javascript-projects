function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
  arr = arr[Math.floor(Math.random()*arr.length)];
  return arr;
}

//TODO: Export the randomFromArray function.
module.exports = {
  randomFromArray: randomFromArray
};