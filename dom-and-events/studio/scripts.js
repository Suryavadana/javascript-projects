// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load" ,function() {
    let imgRocket = this.document.getElementById("rocket")
    this.document.getElementById("rocket").style.position ='absolute';
    imgRocket.style.bottom= "0px";

    let takeoff1 = document.getElementById("takeoff")
    takeoff1.addEventListener("click",function(event){
       // window.confirm('Confirm that the shuttle is ready for takeoff.');
        if( window.confirm('Confirm that the shuttle is ready for takeoff.'))
        {
            flightStatus.innerHTML='Shuttle in flight.';
            shuttleBackground.style.backgroundColor = 'blue'; 
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000 + ' miles';
        }
        
    });

    let landing1 = document.getElementById("landing")
    landing1.addEventListener("click",function(event){
        window.alert('The shuttle is landing. Landing gear engaged');
            flightStatus.innerHTML = 'The shuttle has landed.';
            shuttleBackground.style.backgroundColor = 'green'; 
            spaceShuttleHeight.innerHTML= '0 miles';
            rocket.style.bottom = '0px';
    });

    let missionAbort1 = document.getElementById("missionAbort")
    missionAbort1.addEventListener("click",function(event){
       if( window.confirm('Confirm that you want to abort the mission.')){
        flightStatus.innerHTML='Shuttle in Mission aborted.';
        shuttleBackground.style.backgroundColor = 'green'; 
        spaceShuttleHeight.innerHTML='0 miles';
       rocket.style.bottom = '0px';
       }   
    });

    let up1= document.getElementById("up")
    up1=this.addEventListener("click",function(event){
        flightStatus.innerHTML='Shuttle in flight.';
        shuttleBackground.style.backgroundColor = 'blue'; 
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000 + ' miles';
        rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
        rocket.style.bottom = Math.max(parseInt(rocket.style.bottom), 0) + "px";
        //spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000 + ' miles';
       

    });

    let down1 = document.getElementById("down")
    down1.addEventListener("click" ,function(event){
        flightStatus.innerHTML='Shuttle in Mission aborted.';
        shuttleBackground.style.backgroundColor = 'green'; 
        spaceShuttleHeight.innerHTML='0 miles';
        rocket.style.bottom = '0px';
        rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + "px";
        rocket.style.bottom = Math.max(parseInt(rocket.style.bottom), 0) + "px";
        
       
    });

    let right1 = document.getElementById("right")
    right1.addEventListener("click", function(event){
        flightStatus.innerHTML='Shuttle in flight.';
        shuttleBackground.style.backgroundColor = 'blue'; 
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000 + ' miles';
        rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
        rocket.style.bottom = Math.max(parseInt(rocket.style.bottom), 0) + "px";
       
    });

    let left1 = document.getElementById("left")
    left1.addEventListener("click" , function(event){
        flightStatus.innerHTML='Shuttle in Mission aborted.';
        shuttleBackground.style.backgroundColor = 'green'; 
        spaceShuttleHeight.innerHTML='0 miles';
        rocket.style.bottom = '0px';
        rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + "px";
        rocket.style.bottom = Math.max(parseInt(rocket.style.bottom), 0) + "px";
    });
    console.log('window loaded');
});





