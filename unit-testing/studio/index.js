
let launchcode = {
    Organization : "non profit",
    executiveDirector : "Jeff",
   percentageCoolEmployees : 100,
    programsOffered : ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput(number){
        let result ='';
        if(number%2===0 && number%3===0 && number%5===0)
        {
            result +="LaunchCode Rocks!";
        }
        else if(number%2===0 && number%3===0)
        {
            result += "LaunchCode!";
        }
        else if(number%3===0 && number%5===0)
        {
            result+= "Code Rocks!";
        }
        else if(number%2===0 && number%5===0)
        {
            //result+= ("Launch Rocks!" );
            //if(result == 'Launch Rocks!')
                result+= "Launch Rocks! (CRASH!!!)";

        }        
        else if(number%2===0)
        {
            result+= "Launch!";
        }
        else if(number%3===0)
        {
            result+= "Code!";
        }
        else if(number%5===0)
        {
            result+= "Rocks!";
        }
        else if(number%2!=0 && number%3!=0 && number%5!=0)
        {
            return "Rutabagas! That doesn't work.";
        }
        return result;

    }
}
console.log(launchcode.launchOutput(11));

module.exports = launchcode;

