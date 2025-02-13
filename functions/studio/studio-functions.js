//We want to COMPLETELY reverse an array by flipping the order of the entries AND flipping the order of characters in each element.

// Part One: Reverse Characters

// 1. Define the function as reverseCharacters. Give it one parameter, which will be the string to reverse.
// 2. Within the function, split the string into an array, then reverse the array.
// 3. Use join to create the reversed string and return that string from the function.
// 4. Below the function, define and initialize a variable to hold a string.
// 5. Use console.log(reverseCharacters(myVariableName)); to call the function and verify that it correctly reverses the characters in the string.
// 6. Optional: Use method chaining to reduce the lines of code within the function.


// Part Two: Reverse Digits

// 1. Add an if statement to reverseCharacters to check the typeof the parameter.
// 2. If typeof is ‘string’, return the reversed string as before.
// 3. If typeof is ’number’, convert the parameter to a string, reverse the characters, then convert it back into a number.
// 4. Return the reversed number.
// 5. Be sure to print the result returned by the function to verify that your code works for both strings and numbers. Do this before moving on to the next exercise.

const prompt = require('prompt-sync')();
function reverseCharacters(string)
{
    if(string == Number(string))
    {
        return string.toString().split('').reverse().join('');  // part two - for numbers reverse use toString().
    }
    else
    {
        return string.split('').reverse().join('');  // part one - only for strings
    }
}
let myVariableName = prompt("enter the string: ");

console.log(reverseCharacters(myVariableName));

// Part Three: Complete Reversal

// 1. Define and initialize an empty array.
// 2. Loop through the old array.
// 3. For each element in the old array, call reverseCharacters to flip the characters or digits.
// 4. Add the reversed string (or number) to the array defined in part ‘a’.
// 5. Return the final, reversed array.
// 6. Be sure to print the results from each test case in order to verify your code.

let arrayTest1 = ['apple', 'potato', 'Capitalized Words'];
let arrayTest2 = [123, 8897, 42, 1168, 8675309];
let arrayTest3 = ['hello', 'world', 123, 'orange'];
let arrayTest=[arrayTest1,arrayTest2,arrayTest3];


   /* for(let i=0;i<arrayTest1.length;i++)
    {   
        newArray.push(reverseCharacters(arrayTest1[i]));

    }
    console.log(newArray);*/

    for(let i=0;i<arrayTest.length;i++)
    {
        let newArray=[];
        for(let j=0;j<arrayTest[i].length;j++)
        {
            newArray.push(reverseCharacters(arrayTest[i][j]));  
        }
        console.log(newArray);

    }
   


// Bonus Missions

// 1. Have a clear, descriptive name like funPhrase.
// 2. Retrieve only the last character from strings with lengths of 3 or less.
// 3. Retrieve only the first 3 characters from strings with lengths larger than 3.
// 4. Use a template literal to return the phrase We put the '___' in '___'. Fill the first blank with the modified string, and fill the second blank with the original string.

function funPhrase(string)
{
    if(string.length<=3)
    {
        return(string.charAt(string.length-1));
    }
    else if(string.length>3)
    {
        return(string.substring(0,3));
    }
}
// Test Function

// 1. Outside of the function, define the variable str and initialize it with a string (e.g. 'Functions rock!').
// 2. Call your function and print the returned phrase.

let str='Funtions rock!';
console.log(funPhrase(str));
/*let str1 = '';
str1=prompt("enter the string: ");
console.log(funPhrase(str1)); */

// Area of rectangle equal to length x width

// 1. Define a function with the required parameters to calculate the area of a rectangle.
// 2. The function should return the area, NOT print it.
// 3. Call your area function by passing in two arguments - the length and width.
// 4. If only one argument is passed to the function, then the shape is a square. Modify your code to deal with this case.
// 5. Use a template literal to print, “The area is ____ cm^2.”

function areaOfRectangle(length , width)
{   
    return length*width;
}
function areaOfSquare(length)
{
    return length*length;
}
let l=prompt("enter length of rectangle: ");
let w=prompt("enter width of a rectangle: ");
if(w=='')
{
    console.log(`The area is ${areaOfSquare(l)} cm^2.`);
}
else{
    console.log(`The area is ${areaOfRectangle(l,w)} cm^2.`);
}



