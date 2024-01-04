let spaceShuttleName = "Determination";
let shuttleSpeedMph =  17500;
let distanceToMarsKm =  225000000;
let distanceToMoonKm =  384400;
const milesPerKilometer = 0.621;


console.log (typeof spaceShuttleName);
console.log (typeof shuttleSpeedMph);
console.log (typeof distanceToMarsKm);
console.log (typeof distanceToMoonKm);
console.log (typeof milesPerKilometer);

let milesToMars =  distanceToMarsKm * milesPerKilometer;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;
console.log (spaceShuttleName + " will take " + daysToMars +" days to reach Mars.");

let milesToMoon =  distanceToMoonKm * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;
console.log (spaceShuttleName + " will take " + daysToMoon +" days to reach Moon.");

