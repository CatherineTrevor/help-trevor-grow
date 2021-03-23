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
    } if (btnSelect == "PURPLE") {
          document.getElementById("bg_color").style.backgroundColor = "purple";
    } if (btnSelect == "PINK") {
          document.getElementById("bg_color").style.backgroundColor = "pink";
    } if (btnSelect == "RED") {
           document.getElementById('bg_color').style.backgroundColor = "red";  
    } if (btnSelect == "BLUE") {
            document.getElementById('bg_color').style.backgroundColor = "blue";
    } if (btnSelect == "ORANGE") {
           document.getElementById('bg_color').style.backgroundColor = "orangered"; 
    }
}
