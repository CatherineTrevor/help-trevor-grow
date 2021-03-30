// Pop-up modal https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal 
// Code for modal taken from w3schools.com and CI Handling DOM Events > Loading Events lesson and modified for the site

var welcomeModal = document.getElementById("welcome_modal"); // the welcome modal 

// Modal open upon page load
window.onload = (function() {
  welcomeModal.style.display = "block";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == welcomeModal) {
   /* welcomeModal.style.display = "none";*/
   this.hideModal();
   this.startGame();
  }
};

// When the user clicks on Ready to play, close the modal
function hideModal() {
  welcomeModal.style.display = "none";
}

// Get the <span> element that closes the modal and start game
var modalCloseBtn = document.getElementsByClassName("close")[0];
modalCloseBtn.addEventListener('click', startGame); // close the modal

// Get the Ready to play text in the welcome modal and start game
var readyToPlay = document.getElementById("startPlayBtn");
readyToPlay.addEventListener('click', startGame)

// When How to play is clicked display welcome modal
var playBtn = document.getElementById('modal_open_link');

playBtn.onclick = function() {
  welcomeModal.style.display = "block";
};

// On modal close or Ready to Play button clicked, start game
function startGame(){
        hideModal(); // hide modal
        shuffleImages(); // shuffle and display three option images   
        displayAnswer(); // display answer image
        imageFadeOut(); // start answer image fade out          
        $('.hand').addClass('rotate'); // to start clock from beginning  
}
