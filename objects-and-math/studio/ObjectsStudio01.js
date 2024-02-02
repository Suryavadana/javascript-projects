
// Here are the candidates and the 'animals' array:
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

let idNumbers = [291, 414, 503, 599, 796, 890];
let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
// Code your selectRandomEntry function here:
function selectRandomEntry(num){
  num = (idNumbers[Math.floor(Math.random() * idNumbers.length)]);
  return num;
} 
// loop to enter random numbers without repetition into array..
let randomArr=[];
for(let i=0;i<3;i++)
{   
    let randomNumber = selectRandomEntry(idNumbers);
    if(!randomArr.includes(randomNumber))
    {
         randomArr.push(randomNumber);
    } else {
        i--;
    }
   
}
//console.log(randomArr);
// Code your buildCrewArray function here:

function crew(){
  let matchedNames=[];
for (let i = 0; i < randomArr.length; i++) {
  for (let j = 0; j < animals.length; j++) {
    if (animals[j].astronautID === randomArr[i]) {
      matchedNames.push(animals[j].name);
      break;
    }
  }
  
}
//console.log("Matched names:", matchedNames);
return matchedNames;

}
// Code your template literal and console.log statements:
console.log(`${crew(animals)} are going to space.`);
     

