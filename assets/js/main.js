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
        document.getElementById("clock_color_change").style.backgroundColor = "green";        
    } if (btnSelect == "PURPLE") {
          document.getElementById("bg_color").style.backgroundColor = "purple";
        document.getElementById("star").style.color = "purple";    
        document.getElementById("clock_color_change").style.backgroundColor = "purple";                      
    } if (btnSelect == "PINK") {
          document.getElementById("bg_color").style.backgroundColor = "pink";
        document.getElementById("star").style.color = "pink";     
        document.getElementById("clock_color_change").style.backgroundColor = "pink";                     
    } if (btnSelect == "RED") {
           document.getElementById('bg_color').style.backgroundColor = "red";  
        document.getElementById("star").style.color = "red";    
        document.getElementById("clock_color_change").style.backgroundColor = "red";                       
    } if (btnSelect == "BLUE") {
            document.getElementById('bg_color').style.backgroundColor = "blue";
        document.getElementById("star").style.color = "blue";  
        document.getElementById("clock_color_change").style.backgroundColor = "blue";                          
    } if (btnSelect == "ORANGE") {
           document.getElementById('bg_color').style.backgroundColor = "orangered"; 
        document.getElementById("star").style.color = "orangered"; 
        document.getElementById("clock_color_change").style.backgroundColor = "orangered";                
    }
}

// Fade out the answer image over 5 seconds
function imageFadeOut() {
    $("#answer").fadeTo(5000, 0.01).delay(100).queue(function(next){ // fade opacity so div box doesn't disappear but image does after 5 seconds
        $('.option_image').removeClass('hide'); // show three image options below
            next(); 
      });
    };

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
        selectPlayingLevel();  
        displayAnswer();
        checkScore();
        $('.option_image').addClass('hide'); // hide three images
        $('.hand').removeClass('rotate'); // to start clock from beginning       
      } else if (btnClick !== answerImage) {
        incorrectAnswerAlert();
      }
}

// Alert when correct answer selected
function correctAnswerAlert () {
    swal({
        title: "You did it!",
        text: "You got the right answer, well done!",
        icon: "success",
        button: "Keep playing",
})
    .then(() => {$("#answer").fadeTo(100, 1); // answer image back to opacity 1 so it is shown
        imageFadeOut(); // answer starts to fade again and then three images appear
          $('.hand').addClass('rotate'); // rotate clock hands
    });
};

// Alert when incorrect answer selected
function incorrectAnswerAlert () {
    swal({
        title: "That's not right",
        text: "Try again - Trevor knows you will get it right!",
        icon: "error",
        button: "Try again!",
        });
};

function resetScore() {
    document.getElementById("correct_score").innerHTML = "0";
}

// When score gets to 10 ask the player to move up a level
function checkScore () {
    let currentLevel = document.getElementById('changeMe').innerHTML;
    let score = document.getElementById('correct_score').innerHTML;
    if (score == 3) {
        swal({
            title: "You reached 10 - Great job!",
            text: "Well done for completing this level!",
            button: "Let's try the next level!",
            })
        .then(() => {
          if (currentLevel == "EGG") {
          document.getElementById("changeMe").innerHTML ="CATERPILLAR";
          $('.game_level_icon').addClass('caterpillar'); // add egg background image
          $("#answer").fadeTo(100, 1); // answer image back to opacity 1 so it is shown          
          $('.hand').addClass('rotate'); // rotate clock hands 
          startGame();
          resetScore();                      
        } if (currentLevel == "CATERPILLAR") {
          document.getElementById("changeMe").innerHTML ="BUTTERFLY";}
          $('.game_level_icon').addClass('butterfly'); // add egg background image               
          selectPlayingLevel();
          $("#answer").fadeTo(100, 1); // answer image back to opacity 1 so it is shown          
          $('.hand').addClass('rotate'); // rotate clock hands 
          startGame();
          resetScore();           
        })
        ;}
}

