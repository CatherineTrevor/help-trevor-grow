// Pop-up modal https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal 
// Code for modal taken from w3schools.com and CI Handling DOM Events > Loading Events lesson and modified for the site

var modal = document.getElementById("welcome_modal"); // the welcome modal 

// Modal open upon page load
window.onload = (function() {
  modal.style.display = "block";
});

// When How to play is clicked display welcome modal
var playBtn = document.getElementById('modal_link');

playBtn.onclick = function() {
  modal.style.display = "block";
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// Get the Ready to play text in the welcome modal
var readyToPlay = document.getElementById("play");

// When the user clicks on Ready to play, close the modal
readyToPlay.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}