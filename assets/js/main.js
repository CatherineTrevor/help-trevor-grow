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
        document.getElementById("star").style.color = "green";
    } if (btnSelect == "PURPLE") {
          document.getElementById("bg_color").style.backgroundColor = "purple";
        document.getElementById("star").style.color = "purple";          
    } if (btnSelect == "PINK") {
          document.getElementById("bg_color").style.backgroundColor = "pink";
        document.getElementById("star").style.color = "pink";          
    } if (btnSelect == "RED") {
           document.getElementById('bg_color').style.backgroundColor = "red";  
        document.getElementById("star").style.color = "red";           
    } if (btnSelect == "BLUE") {
            document.getElementById('bg_color').style.backgroundColor = "blue";
        document.getElementById("star").style.color = "blue";            
    } if (btnSelect == "ORANGE") {
           document.getElementById('bg_color').style.backgroundColor = "orangered"; 
        document.getElementById("star").style.color = "orangered"; 
    }
}

// Onclick of new level clear correct score counter
let level = document.querySelectorAll('.level_btn');
for (let i = 0; i < level.length; i++){
    level[i].addEventListener('click', resetScore);
}

function resetScore() {
    document.getElementById("correct_score").innerHTML = "0";
}

// Results image to take 15 seconds to fade out from when welcome modal is closed
// https://www.w3schools.com/jquery/jquery_fade.asp - help with code. Changed to FadeTo so the page structure doesn't change
/*$(".close").click(function(){ // when 'close' button clicked on welcome pop-up modal
  $("#answer").fadeTo(5000, 0.01);  // fade opacity so div box doesn't disappear but image does after 15 seconds
  timer(); // start countdown timer
});  */

$('#modal_close_button').click(function(){ // when 'close' button clicked on correct answer pop-up modal
  $("#answer").fadeTo('fast', 1);  // fade opacity so div box doesn't disappear but image does after 15 seconds
  timer(); // start countdown timer
});

function displayImage() {
     $("#answer").fadeTo('fast', 1); // change opacity back to 1 so new image displays
     timer(); // recall countdown timer function on image reload
     $("#answer").fadeTo(5000, 0.01); // fade opacity so div box doesn't disappear but image does after 15 seconds
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

   $("#modal_close_button").click(function(){ // when correct answer modal is closed clear timer
        clearInterval(downloadTimer);
        document.getElementById("countdown_timer").innerHTML = "5";
    });
};

// Ensure result images is always a randomly selected image from the three options so the answer is always available
function displayAnswer() {

// array to store randomly selected images
let answers = [
  document.getElementById("imageA").src, // option 1 (left)
  document.getElementById("imageB").src, // option 2 (center)
  document.getElementById("imageC").src, /// option 3 (right)
      ]; 
 
// generate random number and assign to results image      
let answerImage = Math.floor(Math.random()*answers.length); 
  document.getElementById("answer").src = answers[answerImage];
};

// If correct answer selected increment score in correct answer counter. Taken from CI challenge and modified
function incrementScore() {
    let oldScore = parseInt(document.getElementById("correct_score").innerText);
    document.getElementById("correct_score").innerText = ++oldScore;
}

// Check answer. When player clicks on an answer image, compare if it is the same as the image in result box. Base code on CI challenge and modified
//https://stackoverflow.com/questions/22767609/add-event-listener-to-dom-elements-based-on-class - understand how to target all elements will class 'option_image'

// target all three potential option boxes with class option_image
let imageSelect = document.querySelectorAll('.option_image'); 
for (let i = 0 ; i < imageSelect.length ; i++){
  imageSelect[i].addEventListener('click', checkAnswer); // check which image was selected
}

// https://stackoverflow.com/questions/30499447/determine-which-button-was-clicked-inside-a-div - how to find the source of the clicked button
function checkAnswer (event) {

    let answerImage = document.getElementById('answer').src;
    btnClick = event.target.src;

    if (btnClick == answerImage) { // is the image clicked on is the same as the results image
        incrementScore(); // increment correct score
        correctAnswerModal(); // well done message        
      } else if (btnClick !== answerImage) {
        incorrectAnswerModal();
      }
}

// Once playing game, image to fade after the correct modal has been selected
let modalBtn = document.getElementById('modal_close_button');
modalBtn.addEventListener('click', () => {
    displayImage(); // restart timer and display image
    shuffleImagesEgg(); // reshuffle three images
    displayAnswer(); // make sure answer is the same as image A, B or C
    document.getElementById("countdown_timer").innerHTML = "5";
});
