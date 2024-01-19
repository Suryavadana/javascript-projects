const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let str1 =  str.substring(3).concat(str.substring(0,3));  //substring removes first 3 characters and concats at the last.
console.log(str1);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The original String is ${str} and the modified String is ${str1} .`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let str2 = input.question("Enter the number of letters that will be relocated.");
console.log("The user gave the input " + str2 +".");

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (str2.length >3)
{
    console.log(str2.substring(0,3));
    console.log(`${str2.substring(0,3)} . You string ${str2} is more than 3 characters.`);
} 