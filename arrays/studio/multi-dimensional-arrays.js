const input = require('readline-sync');
let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodArray = food.split(",");
console.log(foodArray.sort());
let equipmentArray = equipment.split(",");
console.log(equipmentArray.sort());
let petsArray = pets.split(",");
console.log(petsArray.sort());
let sleepAidsArray = sleepAids.split(",");
console.log(sleepAidsArray.sort());
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [foodArray,equipmentArray,petsArray,sleepAidsArray];
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let userCargo = input.question("select a cabinet(0-3) in the cargoHold. ");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (userCargo>cargoHold.length)
{
    console.log("you entered invalid number.");
}
else
{
    console.log(`${(cargoHold[userCargo])} are the contents in the cabinet you selected.`);
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let userCargo1 = input.question("select a cabinet(0-3) in the cargoHold. ");
if(userCargo1>cargoHold.length)
{
    console.log("you entered invalid number.");
}
else
{
    console.log(`${(cargoHold[userCargo1])} are the contents in the cabinet you selected.`);
   
    let userCargo2 = input.question("select a item from cabinet in the cargoHold. ");
    if(userCargo1<=cargoHold.length)
    {
    if(cargoHold[userCargo1].includes(userCargo2))
        {   
            console.log(`cabinet ${userCargo1} contain ${userCargo2}`);

        }
         else
        {
        console.log(`cabinet ${userCargo1} does not contain ${userCargo2}`);
        }
      }
      else{
        console.log("You entered invalid item. ");
      }     
}
