// Background color selection
// Check which button has been selected to change background color
let btn = document.querySelectorAll('.color_btn'); 
for (let i = 0 ; i < btn.length ; i++){
  btn[i].addEventListener('click', changeBgColor);
}

// Change background color when relevant colored button on homepage is selected
function changeBgColor() {
    btnSelect = event.target.innerHTML;
      if (btnSelect == "GREEN") {
        document.getElementById("bg_color").style.backgroundColor = "green";
    } if (btnSelect == "PURPLE") {
          document.getElementById("bg_color").style.backgroundColor = "purple";
    } if (btnSelect == "PINK") {
          document.getElementById("bg_color").style.backgroundColor = "pink";
    } if (btnSelect == "RED") {
           document.getElementById('bg_color').style.backgroundColor = "red";  
    } if (btnSelect == "BLUE") {
            document.getElementById('bg_color').style.backgroundColor = "blue";
    } if (btnSelect == "ORANGE") {
           document.getElementById('bg_color').style.backgroundColor = "orangered"; 
    }
}

// Results image to take 15 seconds to fade out on initial image load
// https://www.w3schools.com/jquery/jquery_fade.asp - help with code. Changed to FadeTo so the page structure doesn't change
$("#answer").ready(function(){ // on initial results image loading
  $("#answer").fadeTo(5000, 0.01);  // fade opacity so div box doesn't disappear but image does after 15 seconds
  timer();
});  

function displayImage() {
     $("#answer_image").fadeTo('fast', 1); // change opacity back to 1 so new image displays
     timer(); // recall countdown timer function on image reload
     $("#answer_image").fadeTo(5000, 0.01); // fade opacity so div box doesn't disappear but image does after 15 seconds
};

// Countdown timer over results image to countdown from 15 as the image disappers
// https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown - code copied and modified
function timer() {
    let timeleft = 4;
    let downloadTimer = setInterval(function(){
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown_timer").innerHTML = "Pick the fruit to feed Trevor!";
    } else {
        document.getElementById("countdown_timer").innerHTML = timeleft;
    } 
    timeleft -= 1;
    }, 1000);
};
