let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//2) 
function reverseCommas() {
	//TODO: 1. create and instantiate your variables.
	 
	
	if(protoArray1.includes(","))
	{
	// //NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	let check= strings[0];
	let output;
	//TODO: 2. write the code required for this step
	let checkToArray=check.split(",");
	console.log(checkToArray.reverse());
	//console.log(typeof(checkToArray));
	output = checkToArray.join();
	return output;
	}
}

//3)
function semiDash() {
	if(protoArray2.includes(";"))
	{
	let check = strings[1];
	let output;
//TODO: write the code required for this step
	let checkToArray = check.split(";"); //converts string to array
	console.log(checkToArray.sort()); //alphabetize the entries and prints array
	output = checkToArray.join('-'); //converts array to string using delimeter "-"
	//console.log(output);
	//console.log(typeof(output));

	

  
	return output;
	}
}

//4)

function reverseSpaces() {
	if(protoArray3.includes(" ")){
	let check=strings[2];
	let output;
  //TODO: write the code required for this step
	let checkToArray=check.split(" "); //converts string to array
	console.log(checkToArray.sort().reverse()); // alphabetize and reverse the entries and prints the array
	output=checkToArray.join(" "); //converts array to string
	//console.log(output);
	//console.log(typeof(output));
	return output;
}
}
//5)
function commaSpace() {
	if(protoArray4.includes(",")){
	let check=strings[3];
	let output;
	//TODO: write the code required for this step
	let checkToArray= check.split(", ");// converts string to array
	console.log(checkToArray); //prints the array
	output=checkToArray.join(" ");// converts array to string
	//console.log(output);
	//console.log(typeof(output));
	return output;
}
}

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
