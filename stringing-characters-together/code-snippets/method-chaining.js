//String methods can be combined in a process called method chaining.

let word = 'Java Script';
let trimmed = word.trim();
let subs = "Script";

console.log(word.toUpperCase());
//Returns ``JAVASCRIPT``

//What does ``word.slice(4).toUpperCase()`` return?
console.log(word.slice(4).toUpperCase());

//Experiment with other combinations (chains) of string methods.
console.log(word.indexOf(subs));
console.log(word.toLowerCase());
console.log(trimmed);
console.log(word.replace('J', 'Q'));
console.log(word.slice(1, 6));