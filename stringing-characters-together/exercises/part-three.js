//Part Three section one

let language = 'Java Script ';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0,1) + language.slice(5,6));

//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(language.charAt(0) + language.charAt(5) );

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbrevation for '${language}' is 'JS'`);
//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(language.slice(0,1) + language.charAt(5) +' '+ language.indexOf('Script') +' '+ language.trim()); 
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
console.log(notTitleCase.replace('t','T').replace('c','C'));

