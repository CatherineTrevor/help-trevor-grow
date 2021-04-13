const welcomeModal = document.querySelector('.welcome__modal'); 
let levelEgg = document.querySelectorAll(".game--level--icon--egg");
let levelCaterpillar = document.querySelectorAll(".game--level--icon--caterpillar");
let levelButterfly = document.querySelectorAll(".game--level--icon--butterfly");
let readyToPlay = document.querySelector('.btn__start__play');
let closeModal = document.querySelector('.modal__close');
let colorBtn = document.querySelectorAll('.btn__color__select'); 
let imageSelect = document.querySelectorAll('.option__image__picture'); 

function changeBgColor() {
    btnSelect = event.target.innerText;
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
};
function hideModal() {
  welcomeModal.style.display = "none";
};
function shuffleImages() {
    let currentLevel = document.querySelector('.level__selected').innerHTML;
        if (currentLevel == "EGG") {
        imagesArray = imagesArrayEgg;
        } if (currentLevel == "CATERPILLAR") {
        imagesArray = imagesArrayCaterpillar;  
        } if (currentLevel == "BUTTERFLY") {
        imagesArray = imagesArrayButterfly;
            };          

let number = Math.floor(Math.random()*imagesArray.length); 
let number1 = Math.floor(Math.random()*imagesArray.length);  
let number2 = Math.floor(Math.random()*imagesArray.length);

document.getElementById("imageA").src = imagesArray[number]; 
document.getElementById("imageB").src = imagesArray[number1];
document.getElementById("imageC").src = imagesArray[number2]; 

let answer1 = document.getElementById("imageA").src; 
let answer2 = document.getElementById("imageB").src;
let answer3 = document.getElementById("imageC").src;

if (answer1 === answer2) {
    shuffleImages();
} if (answer1 === answer3) {
    shuffleImages();
} if (answer2 === answer3) {
    shuffleImages();
}};
function displayAnswer() {
    let answers = [
    document.getElementById("imageA").src,
    document.getElementById("imageB").src,
    document.getElementById("imageC").src,
]; 
    let answerImage = Math.floor(Math.random()*answers.length); 
    document.querySelector('.answer__image__picture').src = answers[answerImage];
};
function displayOptionImage() {
    $('.option__image__picture').removeClass('hide');
};
function imageFadeOut() {
    $('.answer__image__picture').fadeTo(5000, 0.01).delay(100).queue(function(next){
    displayOptionImage();
    next(); 
      });
};
function imageFadeIn() {
    $('.answer__image__picture').fadeTo(100, 1);   
};
function startCountdownClock() {
    $('.clock__hand').addClass('clock--hands--rotate');
};
function correctAnswerAlert () {
    swal({
        title: "You did it!",
        text: "You got the right answer, well done!",
        icon: "success",
        button: "Keep playing",
})
    .then(() => {
        imageFadeIn();
        imageFadeOut();
        startCountdownClock();
    });
};
function incorrectAnswerAlert () {
    swal({
        title: "That's not right",
        text: "Try again - Trevor knows you will get it right!",
        icon: "error",
        button: "Try again!",
        });
};
function incrementScore() {
    let oldScore = parseInt(document.querySelector('.correct__score__counter').innerText);
    document.querySelector('.correct__score__counter').innerText = ++oldScore;
};
function playEggLevel() {
    document.querySelector('.level__selected').innerHTML ="EGG";
    $('.game__selected').removeClass('game--level--icon--caterpillar game--level--icon--butterfly').addClass('game--level--icon--egg');
};
function playCaterpillarLevel() {
    document.querySelector('.level__selected').innerHTML ="CATERPILLAR";
    $('.game__selected').removeClass('game--level--icon--egg game--level--icon--butterfly').addClass('game--level--icon--caterpillar');
};
function playButterflyLevel() {
    document.querySelector('.level__selected').innerHTML ="BUTTERFLY";
    $('.game__selected').removeClass('game--level--icon--egg game--level--icon--caterpillar').addClass('game--level--icon--butterfly');
};
function resetScore() {
    document.querySelector('.correct__score__counter').innerHTML = "0";
};
function resetGame() {
    $('.clock__hand').removeClass('clock--hands--rotate');
    $('.option__image__picture').addClass('hide');
    imageFadeIn();    
};
function startGame() {
    hideModal();
    shuffleImages();
    displayAnswer();
    imageFadeOut();
    startCountdownClock();
};
function checkAnswer (event) {
    let answerImage = document.querySelector('.answer__image__picture').src;
    btnClick = event.target.src;

    if (btnClick == answerImage) {
        incrementScore();
        correctAnswerAlert();
        shuffleImages();
        displayAnswer();
        checkScore();
        resetGame();
      } else if (btnClick !== answerImage) {
        incorrectAnswerAlert();
      }
};
function checkScore () {
    let currentLevel = document.querySelector('.level__selected').innerHTML;
    let score = document.querySelector('.correct__score__counter').innerHTML;
    if (score == 2) {
        if (currentLevel == "EGG") {
            swal({
                title: "You reached 10 - Trevor has now grown into a caterpillar!",
                text: "Well done for completing this level!",
                icon: "success",
                button: "Let's try the next level!",
                })
            .then(() => {
              playCaterpillarLevel();
              imageFadeIn();
              resetGame();                        
              startGame();
              resetScore();                    
            });
            } if (currentLevel == "CATERPILLAR") {
            swal({
                title: "You reached 10 - Trevor has now grown into a butterfly!",
                text: "Great job!",
                icon: "success",
                button: "Let's try the next level!",
                })
            .then(() => {            
              playButterflyLevel();
              imageFadeIn();        
              resetGame();
              startGame();
              resetScore();  
            });
            } if (currentLevel == "BUTTERFLY") {
            swal({
                title: "You did it!",
                text: "Well done for completing all of the levels - Trevor has flown away to play with his friends!",
                icon: "success",
                button: "Start again",
                })
            .then(() => {
                playEggLevel();
                imageFadeIn();
                resetGame();         
                startGame();
                resetScore();              
            })}
    }
};
function scrollToTop() {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
};
function letsPlay() {
    swal({
        title: "Ready?",
        button: "Let's go!",
})
    .then(() => {
        startGame();
    });
};
function restartEggLevel() {
    resetGame();
    resetScore();
    playEggLevel();
    scrollToTop();
    startGame();
};
function restartCaterpillarLevel() {
    resetGame();
    resetScore();
    playCaterpillarLevel();
    scrollToTop();
    startGame();
};
function restartButterflyLevel() {
    resetGame();
    resetScore();
    playButterflyLevel();
    scrollToTop();
    startGame();
};
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

readyToPlay.addEventListener('click', startGame);
closeModal.addEventListener('click', hideModal);
closeModal.addEventListener('click', letsPlay);
for (let i = 0; i < levelEgg.length ; i++){
levelEgg[i].addEventListener('click', restartEggLevel);
};
for (let i = 0; i < levelCaterpillar.length ; i++){
levelCaterpillar[i].addEventListener('click', restartCaterpillarLevel);
};
for (let i = 0; i < levelButterfly.length ; i++){
levelButterfly[i].addEventListener('click', restartButterflyLevel);
};
for (let i = 0 ; i < colorBtn.length ; i++){
  colorBtn[i].addEventListener('click', changeBgColor);
};
for (let i = 0 ; i < imageSelect.length ; i++){
  imageSelect[i].addEventListener('click', checkAnswer);
};