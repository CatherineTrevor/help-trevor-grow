// Background color selection
// Check which button has been selected to change background color
let btn = document.querySelectorAll('.btn__color__select'); 
for (let i = 0 ; i < btn.length ; i++){
  btn[i].addEventListener('click', changeBgColor);
}

// Change background color when relevant colored button on homepage is selected
function changeBgColor() {
    btnSelect = event.target.innerHTML;
      if (btnSelect == "GREEN") {
        document.querySelector('.body').style.backgroundColor = "green";
        document.querySelector('.correct__score__star').style.color = "green";
        document.querySelector('.clock__face').style.backgroundColor = "green";        
    } if (btnSelect == "PURPLE") {
        document.querySelector('.body').style.backgroundColor = "purple";
        document.querySelector('.correct__score__star').style.color = "purple";
        document.querySelector('.clock__face').style.backgroundColor = "purple";               
    } if (btnSelect == "PINK") {
        document.querySelector('.body').style.backgroundColor = "pink";
        document.querySelector('.correct__score__star').style.color = "pink";
        document.querySelector('.clock__face').style.backgroundColor = "pink";             
    } if (btnSelect == "RED") {
        document.querySelector('.body').style.backgroundColor = "red";
        document.querySelector('.correct__score__star').style.color = "red";
        document.querySelector('.clock__face').style.backgroundColor = "red";                      
    } if (btnSelect == "BLUE") {
        document.querySelector('.body').style.backgroundColor = "blue";
        document.querySelector('.correct__score__star').style.color = "blue";
        document.querySelector('.clock__face').style.backgroundColor = "blue";                      
    } if (btnSelect == "ORANGE") {
        document.querySelector('.body').style.backgroundColor = "orangered";
        document.querySelector('.correct__score__star').style.color = "orangered";
        document.querySelector('.clock__face').style.backgroundColor = "orangred";           
    }
}

// Fade out the answer image over 5 seconds
function imageFadeOut() {
    $('.answer__image__picture').fadeTo(5000, 0.01).delay(100).queue(function(next){ // fade opacity so div box doesn't disappear but image does after 5 seconds
          $('.option__image__picture').removeClass('hide'); // hide three images  // show three image options below
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
  document.querySelector('.answer__image__picture').src = answers[answerImage];
};

// If correct answer selected increment score in correct answer counter. Taken from CI challenge and modified
function incrementScore() {
    let oldScore = parseInt(document.querySelector('.correct__score__counter').innerText);
    document.querySelector('.correct__score__counter').innerText = ++oldScore;
}

// Check answer. When player clicks on an answer image, compare if it is the same as the image in result box. Base code on CI challenge and modified
//https://stackoverflow.com/questions/22767609/add-event-listener-to-dom-elements-based-on-class - understand how to target all elements will class 'option_image'

// target all three potential option boxes with class option_image
let imageSelect = document.querySelectorAll('.option__image__picture'); 
for (let i = 0 ; i < imageSelect.length ; i++){
  imageSelect[i].addEventListener('click', checkAnswer); // check which image was selected
}

// https://stackoverflow.com/questions/30499447/determine-which-button-was-clicked-inside-a-div - how to find the source of the clicked button
function checkAnswer (event) {

    let answerImage = document.querySelector('.answer__image__picture').src;
    btnClick = event.target.src;

    if (btnClick == answerImage) { // is the image clicked on is the same as the results image
        incrementScore(); // increment correct score
        correctAnswerAlert(); // well done message
        selectPlayingLevel();  
        displayAnswer();
        checkScore();
        $('.option__image__picture').addClass('hide'); // hide three images
        $('.clock__hand').removeClass('clock--hands--rotate'); // to start clock from beginning       
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
    .then(() => {$('.answer__image__picture').fadeTo(100, 1); // answer image back to opacity 1 so it is shown
        imageFadeOut(); // answer starts to fade again and then three images appear
        $('.clock__hand').addClass('clock--hands--rotate'); // rotate clock hands
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
    document.querySelector('.correct__score__counter').innerHTML = "0";
}

// When score gets to 10 ask the player to move up a level
function checkScore () {
    let currentLevel = document.querySelector('.level__selected').innerHTML;
    let score = document.querySelector('.correct__score__counter').innerHTML;
    if (score == 1) {
        swal({
            title: "You reached 10 - Great job!",
            text: "Well done for completing this level!",
            button: "Let's try the next level!",
            })
        .then(() => {
          if (currentLevel == "EGG") {
          document.querySelector('.level__selected').innerHTML ="CATERPILLAR";
            $('.game__level__icon').removeClass('game--level--icon--egg').addClass('game--level--icon--caterpillar'); // add egg background image
             $('.answer__image__picture').fadeTo(100, 1); // answer image back to opacity 1 so it is shown          
                $('.clock__hand').addClass('clock--hands--rotate'); // rotate clock hands
          startGame();
          resetScore();                      
        } if (currentLevel == "CATERPILLAR") {
          document.querySelector('.level__selected').innerHTML ="BUTTERFLY";
            $('.game__level__icon').removeClass('game--level--icon--caterpillar').addClass('game--level--icon--butterfly'); // add egg background image
             $('.answer__image__picture').fadeTo(100, 1); // answer image back to opacity 1 so it is shown          
                $('.clock__hand').addClass('clock--hands--rotate'); // rotate clock hands
          startGame();
          resetScore();           
        }})
        ;}
}

