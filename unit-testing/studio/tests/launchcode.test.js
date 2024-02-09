// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!

  test("return value object key matches values ",()=>{
    expect(launchcode.Organization).toBe('non profit');
    expect(launchcode.executiveDirector).toBe('Jeff');
    expect(launchcode.percentageCoolEmployees).toBe(100);

  });
  test("list of program includes Web Development, Data Analysis, Liftoff",()=>{
    expect(launchcode. programsOffered.includes("Web Development")).toBe(true); 
   expect(launchcode. programsOffered.includes( "Data Analysis")).toBe(true);
   expect(launchcode. programsOffered.includes("Liftoff")).toBe(true);
   expect(launchcode.programsOffered.length).toBe(3);
  });

  test("number divisble ONLY by 2",function(){
    expect(launchcode.launchOutput(2)).toBe("Launch!");
  });
  test("number divisble ONLY by 3",function(){
    expect(launchcode.launchOutput(3)).toBe("Code!");
  });
  test("number divisble ONLY by 5",function(){
    expect(launchcode.launchOutput(5)).toBe("Rocks!");
  });
  test("number divisble by 2 and 3",function(){
    expect(launchcode.launchOutput(6)).toBe( "LaunchCode!");
  });
  test("number divisble by 3 and 5",function(){
    expect(launchcode.launchOutput(15)).toBe( "Code Rocks!");
  });
  test("number divisble by 2 and 5",function(){
   // expect(launchcode.launchOutput(10)).toBe("Launch Rocks!");
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!)");
    
  });
  test("number divisble by 2 ,3 and 5",function(){
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
  });

  test("number NOT divisble by 2 ,3 and 5",function(){
    expect(launchcode.launchOutput(11)).toBe("Rutabagas! That doesn't work.");
  });
 

  });

  
