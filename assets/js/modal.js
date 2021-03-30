// Pop-up modal https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal 
// Code for modal taken from w3schools.com and CI Handling DOM Events > Loading Events lesson and modified for the site

const welcomeModal = document.getElementById("welcome_modal"); // the welcome modal 
const changeLevelModal = document.getElementById("select_level_modal"); // the change playing level modal

// Welcome Modal open upon page load
window.onload = (function() {
  welcomeModal.style.display = "block";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == welcomeModal) {
   this.hideModal();
   this.startGame();
  }
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == changeLevelModal) {
   this.hideModal();
   this.startGame();
  }
};

// Close the modal
function hideModal() {
  welcomeModal.style.display = "none";
  changeLevelModal.style.display = "none";
}

// When Change level is clicked display welcome modal
var changeLevelBtn = document.getElementById('change_level_button');
changeLevelBtn.onclick = function() {
  changeLevelModal.style.display = "block";
};

// Close the modal and start game
var modalCloseBtn = document.querySelectorAll(".close");
for (let i = 0 ; i < modalCloseBtn.length ; i++){
    modalCloseBtn[i].addEventListener('click', startGame); // close the modal
}

// Get the Ready to play text in the welcome modal and start game
var readyToPlay = document.getElementById("startPlayBtn");
readyToPlay.addEventListener('click', startGame)

// When How to play is clicked display welcome modal
var playBtn = document.getElementById('modal_open_link');
playBtn.onclick = function() {
  welcomeModal.style.display = "block";
};

// Select level of game depending on icon and text at top of playing page
function selectPlayingLevel(){
    let levelSelected = document.querySelector('.gameSelected').textContent;
    if (levelSelected == "EGG") {
        console.log("Game selected is " + levelSelected)
        shuffleImagesEgg(); // shuffle and display three option images           
    }     if (levelSelected == "CATERPILLAR") {
        console.log("Game selected is " + levelSelected)
        shuffleImagesCaterpillar(); // shuffle and display three option images       
}};

// On modal close or Ready to Play button clicked, start game
function startGame(){
        hideModal(); // hide modal
        selectPlayingLevel(); // select level of game 
        displayAnswer(); // display answer image
        imageFadeOut(); // start answer image fade out          
        $('.hand').addClass('rotate'); // to start clock from beginning       
};
