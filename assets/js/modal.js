// Pop-up modal https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal 
// Code for modal taken from w3schools.com and CI Handling DOM Events > Loading Events lesson and modified for the site

const welcomeModal = document.querySelector('.welcome__modal'); // the welcome modal 

// Welcome Modal open upon page load
window.onload = (function() {
  welcomeModal.style.display = "block";
});

// Close the modal
function hideModal() {
  welcomeModal.style.display = "none";
}

// When the user clicks anywhere outside of the welcome modal, close it and start game
window.onclick = function(event) {
  if (event.target == welcomeModal) {
   this.hideModal();
  }
};

// Close the welcome modal and start game
var modalCloseBtn = document.querySelector('.modal__close');
    modalCloseBtn.addEventListener('click', startGame); // close the modal

// Get the Ready to play text in the welcome modal and start game
var readyToPlay = document.querySelector('.btn__start__play');
readyToPlay.addEventListener('click', startGame)

/*// When How to play is clicked display welcome modal
var playBtn = document.querySelector('.modal__open__link');
playBtn.onclick = function() {
  welcomeModal.style.display = "block";
  $('.option__image__picture').addClass('hide'); // hide three images 
  $('.clock__hand').removeClass('clock--hands--rotate'); // to start clock from beginning 
  document.getElementById('answer').style.opacity = 1;     
};*/

// Change level of play from pop-up modal
let gameLevelEgg = document.getElementById("levelEgg");
gameLevelEgg.addEventListener('click', changePlayingLevel);

let gameLevelCaterpillar = document.getElementById("levelCaterpillar");
gameLevelCaterpillar.addEventListener('click', changePlayingLevel);

let gameLevelButterfly = document.getElementById("levelButterfly");
gameLevelButterfly.addEventListener('click', changePlayingLevel);

function changePlayingLevel(){
    levelPlay = this.id;
    if (levelPlay == "levelEgg") {
        document.querySelector('.level__selected').innerHTML ="EGG";
        $('.game__selected').removeClass('game--level--icon--caterpillar game--level--icon--butterfly').addClass('game--level--icon--egg'); // add egg image to top of playing area
          $('.option__image__picture').addClass('hide'); // hide three images 
           shuffleImagesEgg(); // shuffle and display three option images
            $('.clock__hand').removeClass('clock--hands--rotate'); // to start clock from beginning 
            document.getElementById('answer').style.opacity = 1;                       
             startGame();   
              resetScore();             
    }     if (levelPlay == "levelCaterpillar") {
        document.querySelector('.level__selected').innerHTML ="CATERPILLAR";
          $('.game__selected').removeClass('game--level--icon--egg game--level--icon--butterfly').addClass('game--level--icon--caterpillar'); // add caterpillar image to top of playing area
            $('.option__image__picture').addClass('hide'); // hide three images 
             shuffleImagesCaterpillar(); // shuffle and display three option images
              $('.clock__hand').removeClass('clock--hands--rotate'); // to start clock from beginning 
               document.getElementById('answer').style.opacity = 1;                 
                startGame();      
                 resetScore();                              
    }    if (levelPlay == "levelButterfly") {
        document.querySelector('.level__selected').innerHTML ="BUTTERFLY";
        $('.game__selected').removeClass('game--level--icon--egg game--level--icon--caterpillar').addClass('game--level--icon--butterfly'); // add caterpillar image to top of playing area
        $('.option__image__picture').addClass('hide'); // hide three images 
        shuffleImagesButterfly(); // shuffle and display three option images
        $('.clock__hand').removeClass('clock--hands--rotate'); // to start clock from beginning 
        document.getElementById('answer').style.opacity = 1;                   
        startGame();      
        resetScore();                                  
    }
}

// Select level of game depending on icon and text at top of playing page
function selectPlayingLevel(){
    let levelSelected = document.querySelector('.level__selected').innerHTML;
    if (levelSelected == "EGG") {
        $('.option__image__picture').addClass('hide'); // hide three images 
        shuffleImagesEgg(); // shuffle and display three option images
    }     if (levelSelected == "CATERPILLAR") {
        $('.option__image__picture').addClass('hide'); // hide three images 
        shuffleImagesCaterpillar(); // shuffle and display three option images
            }     if (levelSelected == "BUTTERFLY") {
        $('.option__image__picture').addClass('hide'); // hide three images 
        shuffleImagesButterfly(); // shuffle and display three option images
}};

// On modal close or Ready to Play button clicked, start game
function startGame(){
        hideModal(); // hide modal
        selectPlayingLevel(); // select level of game 
        displayAnswer();
        imageFadeOut(); // start answer image fade out          
        $('.clock__hand').addClass('clock--hands--rotate'); // start clock rotation  
};
