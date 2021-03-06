/*jshint esversion: 6 */
/*globals $:false */

let welcomeModal = document.querySelector('.welcome__modal'); 
let modalGameIcons = document.querySelectorAll('.modal__level__icon');
let levelEgg = document.getElementById('level--egg');
let levelCaterpillar = document.getElementById('level--caterpillar');
let levelButterfly = document.getElementById('level--butterfly');
let readyToPlay = document.querySelector('.btn__start__play');
let closeModal = document.querySelector('.modal__close');
let colorBtn = document.querySelectorAll('.btn__color__select'); 
let imageSelect = document.querySelectorAll('.option__image__picture'); 
let mediaQuery = window.matchMedia('(max-width: 768px)');
let imagesArrayEgg = [
    "./assets/images/egg_level/banana_single1.jpg",
    "./assets/images/egg_level/apple_single1.jpg",
    "./assets/images/egg_level/lemon_single1.jpg",
    "./assets/images/egg_level/orange_single1.jpg",
    "./assets/images/egg_level/pear_single1.jpg",
    "./assets/images/egg_level/pineapple_single1.jpg",
    "./assets/images/egg_level/strawberry_single1.jpg",
        ];
let imagesArrayCaterpillar = [
    "./assets/images/caterpillar_level/banana_3.jpg",
    "./assets/images/caterpillar_level/apple_3.jpg",
    "./assets/images/caterpillar_level/lemon_3.jpg",
    "./assets/images/caterpillar_level/orange_3.jpg",
    "./assets/images/caterpillar_level/pear_3.jpg",
    "./assets/images/caterpillar_level/pineapple_3.jpg",
    "./assets/images/caterpillar_level/strawberry_3.jpg",   
        ];
let imagesArrayButterfly = [
    "./assets/images/butterfly_level/apples_6.jpg",
    "./assets/images/butterfly_level/apples_9.jpg",
    "./assets/images/butterfly_level/bananas_4.jpg",
    "./assets/images/butterfly_level/bananas_7.jpg",
    "./assets/images/butterfly_level/bananas_9.jpg",
    "./assets/images/butterfly_level/oranges_4.jpg",
    "./assets/images/butterfly_level/oranges_5.jpg",
    "./assets/images/butterfly_level/oranges_9.jpg",
    "./assets/images/butterfly_level/pears_4.jpg",
    "./assets/images/butterfly_level/pears_6.jpg",
        ];

function changeBgColor() {
    let btnSelect = event.target.innerText;
    let bodyColor = document.querySelector('.game__container');
    let starColor = document.querySelector('.correct__score__star');
    let clockColor = document.querySelector('.clock__face');        
        switch (btnSelect) {
            case "GREEN":
                bodyColor.style.backgroundColor = "green";
                starColor.style.color = "green";
                clockColor.style.backgroundColor = "green";
                break;
            case "PURPLE":
                bodyColor.style.backgroundColor = "purple";
                starColor.style.color  = "purple";
                clockColor.style.backgroundColor = "purple";
                break;
            case "PINK":
                bodyColor.style.backgroundColor = "pink";
                starColor.style.color  = "pink";
                clockColor.style.backgroundColor = "pink";
                break;   
            case "RED":
                bodyColor.style.backgroundColor = "red";
                starColor.style.color  = "red";
                clockColor.style.backgroundColor = "red";
                break;   
            case "BLUE":
                bodyColor.style.backgroundColor = "blue";
                starColor.style.color  = "blue";
                clockColor.style.backgroundColor = "blue";
                break;   
            case "ORANGE":
                bodyColor.style.backgroundColor = "orangered";
                starColor.style.color = "orangered";
                clockColor.style.backgroundColor = "orangered";
                break;                                                          
        }  
}
function scrollToTop() {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
}
function hideModal() {
  welcomeModal.style.display = "none";
  scrollToTop();
}
function startCountdownClock() {
    $('.clock__hand').addClass('clock--hands--rotate');
}
function resetCountdownClock() {
    $('.clock__hand').removeClass('clock--hands--rotate');
}
function shuffleImages() {
    let imagesArray;
    let currentLevel = document.querySelector('.level__selected').innerHTML;
        switch (currentLevel) {
            case "EGG":
                imagesArray = imagesArrayEgg;
                break;
            case "CATERPILLAR":
                imagesArray = imagesArrayCaterpillar;   
                break;      
            case "BUTTERFLY":
                imagesArray = imagesArrayButterfly;
                break;                                                
        }
        let randomSelectionA = Math.floor(Math.random()*imagesArray.length); 
        let randomSelectionB = Math.floor(Math.random()*imagesArray.length);  
        let randomSelectionC = Math.floor(Math.random()*imagesArray.length);

        document.getElementById("imageA").src = imagesArray[randomSelectionA]; 
        document.getElementById("imageB").src = imagesArray[randomSelectionB];
        document.getElementById("imageC").src = imagesArray[randomSelectionC]; 

        let option1 = document.getElementById("imageA").src; 
        let option2 = document.getElementById("imageB").src;
        let option3 = document.getElementById("imageC").src;

        if (option1 === option2) {
        shuffleImages();
        } if (option1 === option3) {
        shuffleImages();
        } if (option2 === option3) {
        shuffleImages();
}}
function displayQuestionImage() {
    let options = [
    document.getElementById("imageA").src,
    document.getElementById("imageB").src,
    document.getElementById("imageC").src,
]; 
    let questionImage = Math.floor(Math.random()*options.length); 
    document.querySelector('.question__image__picture').src = options[questionImage];
}
function imageFadeOut() {
    $('.question__image__picture').fadeTo(5000, 0.01);
}
function imageFadeIn() {
    $('.question__image__picture').fadeTo(0, 1);   
}
function displayOptionImages() {
    $('.option__image__picture').removeClass('hide');
}
function delayDisplayOptionImages() {
  setTimeout(displayOptionImages, 5000);
}
function hideOptionImages() {
    $('.option__image__picture').addClass('hide');
}
function playGame() {
    shuffleImages();   
    imageFadeIn();        
    displayQuestionImage();
    imageFadeOut();
    delayDisplayOptionImages();
    startCountdownClock();
}
function checkAnswer () {
    let questionImage = document.querySelector('.question__image__picture').src;
    let btnClick = event.target.src;
        switch (questionImage) {
            case btnClick: 
            incrementScore();
            correctAnswerAlert();
            hideOptionImages();    
            resetCountdownClock();                           
            checkScore();
            break; 
            default: 
            incorrectAnswerAlert();
        }
}
function incrementScore() {
    let oldScore = parseInt(document.querySelector('.correct__score__counter').innerText);
    document.querySelector('.correct__score__counter').innerText = ++oldScore;
}
function correctAnswerAlert () {
    swal({
        title: "You did it!",
        text: "You got the right answer, well done!",
        icon: "success",
        button: "Keep playing",
})
    .then(() => {
        playGame(); 
    });
}
function incorrectAnswerAlert () {
    swal({
        title: "That's not right",
        text: "Try again - Trevor knows you will get it right!",
        icon: "error",
        button: "Try again!",
        });
}
function checkScore() {
    let currentLevel = document.querySelector('.level__selected').innerHTML;
    let score = document.querySelector('.correct__score__counter').innerHTML;
        switch (score) {
            case "10":
                switch (currentLevel) {
                    case "EGG":
                    swal({
                        title: "You reached 10 - Trevor has now grown into a caterpillar!",
                        text: "Well done for completing the Egg level!",
                        icon: "success",
                        button: "Let's try the next level!",
                        })
                    .then(() => {
                        playCaterpillarLevel();
                        resetScore();  
                        playGame(); 
                    });
                    break;                        
                }
                switch (currentLevel) {
                    case "CATERPILLAR":
                    swal({
                        title: "You reached 10 - Trevor has now grown into a butterfly!",
                        text: "Great job!",
                        icon: "success",
                        button: "Let's try the final level!",
                        })
                    .then(() => {            
                        playButterflyLevel();
                        resetScore(); 
                        playGame();                                                       
                    });
                    break;                        
                } 
                switch (currentLevel) {
                    case "BUTTERFLY":
                    swal({
                        title: "You did it!",
                        text: "Well done for completing all of the levels - Trevor has flown away to play with his friends!",
                        icon: "success",
                        button: "Start again",
                    })
                    .then(() => {
                        playEggLevel();
                        resetScore();  
                        playGame();                                        
                    });
                    break;                        
                } 
            break;
        }    
}
function playEggLevel() {
    document.querySelector('.level__selected').innerHTML ="EGG";
    $('.game__selected').removeClass('game--level--icon--caterpillar game--level--icon--butterfly').addClass('game--level--icon--egg');
}
function playCaterpillarLevel() {
    document.querySelector('.level__selected').innerHTML ="CATERPILLAR";
    $('.game__selected').removeClass('game--level--icon--egg game--level--icon--butterfly').addClass('game--level--icon--caterpillar');
}
function playButterflyLevel() {
    document.querySelector('.level__selected').innerHTML ="BUTTERFLY";
    $('.game__selected').removeClass('game--level--icon--egg game--level--icon--caterpillar').addClass('game--level--icon--butterfly');
}
function resetScore() {
    document.querySelector('.correct__score__counter').innerHTML = "0";
}
function letsPlay() {
    swal({
        title: "Ready?",
        timer: 2500,
})
    .then(() => swal({
        title: "Let's go!",
        timer: 2500,
}))
    .then(() => {
        hideModal();
        hideOptionImages();
        playGame();
    });
}
function playModalLevel() {

    let modalGame = event.target.id;

    if (modalGame == "modal--level--egg") {
        playEggLevel();
    } if (modalGame == "modal--level--caterpillar") {
        playCaterpillarLevel();     
    } if (modalGame == "modal--level--butterfly") {
        playButterflyLevel();
    }
    letsPlay();
}
function startLevelGame(){
    resetCountdownClock();
    hideOptionImages();
    resetScore();
    letsPlay();

    let gameSelect = event.target.id;

    if (gameSelect == "level--egg") {
        playEggLevel();
    } if (gameSelect == "level--caterpillar") {
        playCaterpillarLevel();     
    } if (gameSelect == "level--butterfly") {
        playButterflyLevel();
    }
}

readyToPlay.addEventListener('click', hideModal);
readyToPlay.addEventListener('click', playGame);
closeModal.addEventListener('click', letsPlay);
for (let i = 0 ; i < modalGameIcons.length ; i++){
    modalGameIcons[i].addEventListener('click', playModalLevel);
}
levelEgg.addEventListener('click', startLevelGame);
levelCaterpillar.addEventListener('click', startLevelGame);
levelButterfly.addEventListener('click', startLevelGame);
for (let i = 0 ; i < colorBtn.length ; i++){
  colorBtn[i].addEventListener('click', changeBgColor);
}
for (let i = 0 ; i < imageSelect.length ; i++){
  imageSelect[i].addEventListener('click', checkAnswer);
}
if (mediaQuery.matches) {
  $('.footer').removeClass('fixed-bottom');
}