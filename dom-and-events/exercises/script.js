function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
     });
    abortMission.addEventListener("click", function( event ) {
        event.target.style.backgroundColor = "red";
        if(window.confirm("Are you sure you want to abort the mission?")) {
            paragraph.outerHTML='Mission aborted! Space shuttle returning home';
          }
     });
    
     missionAbort.addEventListener("mouseout", function( event ) {
        event.target.style.backgroundColor = "";
     });

    
}

window.addEventListener("load", init);

