// Randomize and display images A, B and C for Caterpilar level
// https://www.javatpoint.com/random-image-generator-in-javascript - copy code and modified
// shuffle the position of the three options below the answer and ensure the images are always different (so not apple, banana, apple)
function shuffleImagesCaterpillar() {

//declare an array to store the images  
let imagesArray = [
 "./assets/images/caterpillar_level/banana_multiple.jpg",
 "./assets/images/caterpillar_level/apples_multiple.jpg",
 "./assets/images/caterpillar_level/orange_multiple.jpg",
 "./assets/images/caterpillar_level/lemons_multiple.jpg",
 "./assets/images/caterpillar_level/pears_multiple.jpg",
 "./assets/images/caterpillar_level/pineapple_multiple.jpg",
 "./assets/images/caterpillar_level/strawberries_multiple.jpg",
]  
  
//generate a number and provide to the images to generate randomly  
let number = Math.floor(Math.random()*imagesArray.length); 
let number1 = Math.floor(Math.random()*imagesArray.length);  
let number2 = Math.floor(Math.random()*imagesArray.length);

//return the images generated by a random number  
document.getElementById("imageA").src = imagesArray[number]; // option 1 (left)
document.getElementById("imageB").src = imagesArray[number1]; // option 2 (center)
document.getElementById("imageC").src = imagesArray[number2]; /// option 3 (right)

// once displayed find image source
let answer1 = document.getElementById("imageA").src; // option 1 (left)
let answer2 = document.getElementById("imageB").src; // option 2 (center)
let answer3 = document.getElementById("imageC").src; /// option 3 (right)

// if the images next to each other are the same, reshuffle
if (answer1 === answer2) {
    shuffleImagesCaterpillar();
} if (answer1 === answer3) {
    shuffleImagesCaterpillar();
} if (answer2 === answer3) {
    shuffleImagesCaterpillar();
}};