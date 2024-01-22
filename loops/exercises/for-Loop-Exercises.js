/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */
//a
console.log("prints numbers 0 to 20, one number per line.")
for(let i =0; i<=20; i++)
{
  console.log(i);
}

console.log("--------------------------------------");
//b
console.log("prints only the odd values from 3-29, one number per line.")
for(let i=3;i<30;i++)
{
  if(i%2!=0)
  {
    console.log(i);
  }
}

console.log("--------------------------------------");
//c
console.log("prints even numvers 12 to -14 in descending order, one number per line.")
for(let i=12; i>=-14;i--)
{
  if(i%2==0)
  {
    console.log(i);
  }
}

console.log("--------------------------------------");
//d
console.log(" Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3.");
for(i=50;i>=20;i--)
{
  if(i%3==0)
  console.log(i);
}

console.log("--------------------------------------");
/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42]. */

let str = "LaunchCode";
let arr = [1,5,'LC101', 'blue', 42];

/*Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.*/
  for(let i=0;i<arr.length;i++)
  {
    console.log(arr[i]);
  }
  
  console.log("--------------------------------------");
 // b. Print each character of the string - in reverse order - to a new line. */ 
  for(let i=str.length-1;i>=0;i--)
  {
    console.log(str[i]);
  }


  console.log("--------------------------------------");

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */
  let sortArray= [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
  let even = [];
  let odd = [];
  for(let i=0;i<sortArray.length;i++)
  {
    if(sortArray[i]%2==0)
    {
      even.push(sortArray[i]);
     // console.log(sortArray[i]+"even");
    }
    else{
      odd.push(sortArray[i]);
      //console.log(sortArray[i]+"odd");
    }
  }

  console.log(even);
  console.log(odd);
