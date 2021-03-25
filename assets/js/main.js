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
        document.getElementsByClassName("star").style.color = "green";
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

// Results image to take 5 seconds to fade out
// https://www.w3schools.com/jquery/jquery_fade.asp - help with code. Changed to FadeTo so the page structure doesn't change
// https://stackoverflow.com/questions/2510115/jquery-can-i-call-delay-between-addclass-and-such - help to delay addClass to images
$(".level_icon").click(function(){ // when egg button clicked 
  $("#answer").fadeTo(5000, 0.01).delay(500).queue(function(next){ // fade opacity so div box doesn't disappear but image does after 5 seconds
    $('.option_image').addClass('show');
    next(); 
  });  
});

// Ensure answer image is randomly selected from the three options so the answer is always available
function displayAnswer() {

// array to store randomly selected images
let answers = [
  document.getElementById("imageA").src, // option 1 (left)
  document.getElementById("imageB").src, // option 2 (center)
  document.getElementById("imageC").src, /// option 3 (right)
      ]; 
 
// generate random number and assign to answer image      
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
        correctAnswerAlert(); // well done message
        shuffleImagesEgg();      
        displayAnswer();
      } else if (btnClick !== answerImage) {
        incorrectAnswerAlert();
      }
}

function correctAnswerAlert (event) {
    swal({
        title: "You did it!",
        text: "You got the right answer, well done!",
        icon: "success",
        button: "Keep playing",
});};

function incorrectAnswerAlert (event) {
    swal({
        title: "That's not right",
        text: "Try again - Trevor knows you will get it right!",
        icon: "error",
        button: "Try again",
});};


/**Temp not in use ***/

// Onclick of new level clear correct score counter
/*let level = document.querySelectorAll('.level_btn');
for (let i = 0; i < level.length; i++){
    level[i].addEventListener('click', resetScore);
}

function resetScore() {
    document.getElementById("correct_score").innerHTML = "0";
}*/