// Pop-up modal https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal 
// Code for modal taken from w3schools.com and CI Handling DOM Events > Loading Events lesson and modified for the site

const welcomeModal = document.getElementById("welcome_modal"); // the welcome modal 
const changeLevelModal = document.getElementById("select_level_modal"); // the change playing level modal

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
   this.startGame();
  }
};

// Close the welcome modal and start game
var modalCloseBtn = document.querySelectorAll(".close");
for (let i = 0 ; i < modalCloseBtn.length ; i++){
    modalCloseBtn[0].addEventListener('click', startGame); // close the modal
}

// Get the Ready to play text in the welcome modal and start game
var readyToPlay = document.getElementById("startPlayBtn");
readyToPlay.addEventListener('click', startGame)

// When How to play is clicked display welcome modal
var playBtn = document.getElementById('modal_open_link');
playBtn.onclick = function() {
  welcomeModal.style.display = "block";
};

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
        document.getElementById("changeMe").innerHTML ="EGG";
        $('.game_select').removeClass('caterpillar butterfly').addClass('egg'); // add egg background image
        $('.option_image').addClass('hide'); // hide three images
        shuffleImagesEgg(); // shuffle and display three option images
        displayAnswer(); // display answer image
        startGame();        
    }     if (levelPlay == "levelCaterpillar") {
        document.getElementById("changeMe").innerHTML ="CATERPILLAR";
        $('.game_select').removeClass('egg butterfly').addClass('caterpillar'); // add caterpillar background image           
        $('.option_image').addClass('hide'); // hide three images
        shuffleImagesCaterpillar(); // shuffle and display three option images
        displayAnswer(); // display answer image
        startGame();                     
    }    if (levelPlay == "levelButterfly") {
        document.getElementById("changeMe").innerHTML ="BUTTERFLY"; 
        $('.game_select').removeClass('egg caterpillar').addClass('butterfly'); // add butterfly background image             
        $('.option_image').addClass('hide'); // hide three images
        shuffleImagesEgg(); // shuffle and display three option images
        displayAnswer(); // display answer image
        startGame();                 
    }
}

// Select level of game depending on icon and text at top of playing page
function selectPlayingLevel(){
    let levelSelected = document.querySelector('.gameSelected').textContent;
    if (levelSelected == "EGG") {
        $('.option_image').addClass('hide'); // hide three images
        shuffleImagesEgg(); // shuffle and display three option images
    }     if (levelSelected == "CATERPILLAR") {
        $('.option_image').addClass('hide'); // hide three images
        shuffleImagesCaterpillar(); // shuffle and display three option images
}};

// On modal close or Ready to Play button clicked, start game
function startGame(){
        hideModal(); // hide modal
        selectPlayingLevel(); // select level of game 
        displayAnswer();
        imageFadeOut(); // start answer image fade out          
        $('.hand').addClass('rotate'); // to start clock from beginning       
};
