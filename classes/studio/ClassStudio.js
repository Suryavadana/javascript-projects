//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate{
    constructor(name,mass,scores){
        this.name=name;
        this.mass=mass;
        this.scores=scores;
    }
    addScore(score){
        this.scores.push(score)
    }
    average(){
        let sum = 0;
        for(let i=0;i<this.scores.length;i++)
        {
             sum =sum+ this.scores[i];
        }
        let average = sum/this.scores.length;
        return Math.round(average * 10)/10;

    }
    status(avg){
        if(avg>=90)
            return "Accepted";
        else if(avg<=89 && avg>=80)
            return "Reserve";
        else if(avg<=79 && avg>=70)
            return "Probationary";
        else{
            return "Rejected"
        }
        // if(this.average()>=90)
        //     return "Accepted";
        // else if(this.average()<=89 && this.average()>=80)
        //     return "Reserve";
        // else if(this.average()<=79 && this.average()>=70)
        //     return "Probationary";
        // else{
        //     return "Rejected"
        // }

    }
    
};
let bubbaBear = new CrewCandidate("Bubba Bear", 135 , [88,85,90]);
let merry = new CrewCandidate("Merry Maltese",1.5,[93,88,97]);
let gator = new CrewCandidate("Glas gator",225,[75,78,62]);
while(gator.average()<90)
{
    gator.addScore(100);
}
console.log(gator.scores);
console.log(`${gator.name} earned an average test score of ${gator.average()} % and has a status of ${gator.status(gator.average)}.'`)
bubbaBear.addScore(83);
console.log(merry.average());
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
// console.log(bubbaBear);
// console.log(merry);
// console.log(gator);


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.