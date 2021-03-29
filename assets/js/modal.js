// Pop-up modal https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal 
// Code for modal taken from w3schools.com and CI Handling DOM Events > Loading Events lesson and modified for the site

var welcomeModal = document.getElementById("welcome_modal"); // the welcome modal 

// Modal open upon page load
window.onload = (function() {
  welcomeModal.style.display = "block";
});

// Get the <span> element that closes the modal
var modalCloseBtn = document.getElementsByClassName("close")[0];
modalCloseBtn.addEventListener('click', startGameSwal); // close the modal

// Get the Ready to play text in the welcome modal
var readyToPlay = document.getElementById("startPlayBtn");
readyToPlay.addEventListener('click', startGameSwal)

// When the user clicks on Ready to play, close the modal
function hideModal() {
  welcomeModal.style.display = "none";
}

function startGameSwal(){
    swal({
        icon: "success",
        button: "Let's play!",
        })
    .then(() => {imageFadeOut(); // answer starts to fade again and then three images appear
          $('.hand').addClass('rotate');
          hideModal(); // rotate clock hands
    });
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    welcomeModal.style.display = "none";
  }
};

// When How to play is clicked display welcome modal
var playBtn = document.getElementById('modal_open_link');

playBtn.onclick = function() {
  welcomeModal.style.display = "block";
};
