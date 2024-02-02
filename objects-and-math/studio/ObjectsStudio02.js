const prompt = require ('prompt-sync')();



// Candidate data & crew array.
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let crew = [candidateA,candidateC,candidateE];
// Code your orbitCircumference function here:

function orbitCircumference(radius)
{
    radius =2000;
    let circumference = Math.round (2 * Math.PI * radius);
    return circumference;
}

// Code your missionDuration function here:
let distance='';
function missionDuration (numOrbits,orbitRadius,orbitSpeed)
{
  orbitRadius = 2000 ;
 // orbitRadius = prompt("Radius: " );
  orbitSpeed = 28000;
  //orbitSpeed = prompt("Speed: ");
  numOrbits = prompt("Orbits number: ");
  distance = orbitCircumference(orbitRadius);
  const time = Math.round(((distance * numOrbits)/orbitSpeed)*100)/100;
  return time;
}

//console.log(missionDuration(5));

console.log(`The mission will travel ${(orbitCircumference())} km around the planet, and it will take ${missionDuration()} hours to complete.`);
// Copy/paste your selectRandomEntry function here:
let candidates = [candidateA, candidateB,candidateC,candidateD,candidateE,candidateF];
function selectRandomEntry(num1){
  num1 = (candidates[Math.floor(Math.random() * candidates.length)]);
  return num1;
} 
//console.log(selectRandomEntry(candidates));
// Code your oxygenExpended function here:

function oxygenExpended(candidate)
{
    candidate = selectRandomEntry(candidates);
    let spacewalk =missionDuration(3);
    let oxygenConsumed = (candidate.o2Used(spacewalk)*1000)/1000;

    return (`${candidate["name"]} will perform the spacewalk, which will last ${spacewalk} hours and require ${oxygenConsumed} kg of oxygen.`);

}
console.log(oxygenExpended(candidateB));

 