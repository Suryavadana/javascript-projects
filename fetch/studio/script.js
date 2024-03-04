//TODO: Add Your Code Below
window.addEventListener("load",function(){
  fetch("https://handlers.education.launchcode.org/static/astronauts.json")
  .then(response => response.json())
  .then(function(data){
    let container = document.getElementById("container");
    let astronauts=[];
    for(let i=0;i<data.length;i++)
    {
      let astronaut=data[i];
      const astronautDetails =[
      "<div class = 'astronaut'>",
        "<div class = 'bio'>",
          "<h3>"+astronaut.firstName +" "+ astronaut.lastName+"</h3>",
          "<ul>",
            "<li>Hours in space: " + astronaut.hoursInSpace+"</li>",
            "<li>Active: "+ (astronaut.active ?  'Yes' : 'No') +"</li>",
            "<li>Skills: " + astronaut.skills.join(', ')+"</li>",
          "</ul>",
        "</div>",
        "<img class='avatar' src='" + astronaut.picture + "' alt='" + astronaut.firstName + " " + astronaut.lastName + "'></img>",
      "</div>"
      ];
      astronauts.push(astronautDetails.join(''));
    }
    container.innerHTML=astronauts.join('');
  });
});
