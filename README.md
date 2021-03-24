# Help Trevor Grow!

## Project Overview
## User Experience Design
  ### Strategy
    Target Audience
    User Stories
  ### Scope
  ### Structure
  ### Skeleton
  ### Surface
    Typography
    Imagery
    Color Scheme
    Favicon
## Technologies Used
## Testing
## Deployment
## Credits

# Project Overview

This project is my Milestone Two project with the Code Institute. This project augments the lessons from module 1 regarding HTML5 and CSS, and introduces JavaScript and jQuery.
Help Trevor Grow is a free-to-play, simple memory game designed for children approx. age 3 - 6 years old. One item of fruit is displayed in the middle of the playing area (Image A), with three images underneath (Images A, B and C), one of which is always the same as Image A ([see wireframe below](#play_detail)). Image A fades out after 15 or 10 seconds depending on the level selected, then the player must select the same item from the three images below. There are three levels, each slightly more difficult than the last level.

<INSERT IMAGE>

<VIEW LIVE SITE HERE>

# User Experience Design

## Strategy

The game is designed primarily for use on a desktop, with limited help needed from an adult where a player is able to follow the instructions themselves. Receiving guidance from a qualified Early Years Manager to ensure the game is age appropriate, there must be nothing unecessary on the screen to distract the player, allowing them to focus on the game.

The levels available increase in difficulty:

**Egg**

This is the simplest level. Image A is of one piece of fruit, which fades out after 15 seconds. The three image options below are visually very different from each other, to make the game age appropriate. The intended age for this level is 3.

**Caterpillar**

The images shown now contain 3 items of fruit, but the options below still differ enough to make it challenging, but also possible. The target age for this level is 4.

**Butterfly**

Designed as the hardest option, this will show a quantity of fruit Image A. The three options below will be of the same fruit, but different quantities so the user must count to select the correct answer, making it slightly more difficult. The target age for this level is 5.

Although there are three levels of difficulty, each level is loosely based on age range, but it is not intended as a test to see what "level" the child is at. The game is for fun can be played as many times as required.

### Target Audience

The target audience is both parents / adults with young children, as they will connect to the game and if needed, help the child to play, and also children from approx. age 3 to 5. The game must therefore be colorful and appealing to the player, whilst to a degree, educational.

## User Stories

**Adult first-time site visitors**

a. As an adult first-time visitor, I want to easily navigate the site and quickly start a game.

b. As an adult first-time visitor, I want to understand how to play the game, so I can explain it to my child if necessary.

c. As an adult first-time visitor, I want to feel confident that the game is free-to-play and age appropriate.

d. As an adult first-time visitor, I want to understand what my child can gain from the game.

e. As an adult first-time visitor, I want to know how to make the game more personal such as changing the level or some aspect of the site.

**Child first-time visitor goals:**

a. As a child first-time visitor, I want to quickly understand the rules of the game.

b. As a child first-time visitor, I want to have fun playing an online game.

c. As a child first-time visitor, I want to have some independence in play and feel the game is personally for me, by making my own choices.

d. As a child first-time visitor, I want to feel good when I select the correct option.

e. As a child first-time visitor, I want to understand that I got an answer wrong, but feel motivated to try again.

f. As a child first-time visitor, I want to feel encouraged to try the next level.

## Scope

**Existing Features**

Based on the User Stories from the target audience, the game contains the following features:

 Feature  | Details  |
|---|---|
| Introduction pop-up modal | Basic information about the game and how to play. This is a pop-up modal which displays automatically on site opening, so there is only one file / page. This can always be opened via a link at the top of the playing page.  |
| Footer | Game name, contact email address.  |
| Images | Fun, colorful, age appropriate. The images of the fruit will be very simple, with nothing else included (i.e. not in a basket or on a tree).  |
| About | Background information about why the game exists and it's purpose for education and fun. This will be displayed in the pop-up modal. |
| Play | Large colorful buttons, to start and play the game, so it is clear to the player what they should do.  |
| Favicon  | A constant reminder to the site user of the site they are on.  |
| Color options | Color options to change the background so the player can personalise the game and have an appropriate level of control. |
| Correct / Incorrect answer pop-up modal | Clear information, whether the player selected the correct or incorrect answer. |
| Correct answer marker | Clear information that the player has answered the questions correctly which increments the score after every correct answer. There will not be a counter for incorrect answers. |

**Future features**

**Feature 1:** Animation. In the future I would like to show the Egg changing into a Caterpillar, then growing wings into a Butterfly and flying as the player moves through each level, to give more life to the game. At present I do not have the knowledge to create this feature.

**Feature 2:** More levels. The game is very basic, but if I had more time would like to build on the levels and include more options in each level, then more levels, up to age 7.

## Structure

**Wireframes**

**Welcome pop-up modal | Desktop**

![wireframe_desktop_welcome](https://user-images.githubusercontent.com/76033080/112113000-88c73f00-8bb6-11eb-91fc-91856edfac3c.jpg)

**Welcome pop-up modal | Tablet**

![wireframe_tablet_welcome](https://user-images.githubusercontent.com/76033080/112112973-81079a80-8bb6-11eb-9f97-c59939025fc0.jpg)

**Welcome pop-up modal | Mobile**

![wireframe_mobile_welcome](https://user-images.githubusercontent.com/76033080/112112982-8533b800-8bb6-11eb-9a67-53fdb32f1190.jpg)

**Play | Desktop**

![wireframe_desktop_play](https://user-images.githubusercontent.com/76033080/112112761-3ab23b80-8bb6-11eb-8df1-3f96564a18ab.jpg)

**Play | Tablet**

![wireframe_tablet_play](https://user-images.githubusercontent.com/76033080/112113499-291d6380-8bb7-11eb-9143-451333fba4a7.jpg)

**Play | Mobile**

![wireframe_mobile_play](https://user-images.githubusercontent.com/76033080/112112752-38e87800-8bb6-11eb-87ea-600ec6e16abe.jpg)

**Play area detail** <a name="play_detail"></a>

![wireframe_images](https://user-images.githubusercontent.com/76033080/112113941-c11b4d00-8bb7-11eb-846c-654270c13d12.jpg)

The game will have one file only, with the pop-up modal displaying over it. The images will be changed depending on the level selected using JavaScript.

**Workflow**

**Main game workflow**

![workflow](https://user-images.githubusercontent.com/76033080/112114572-81089a00-8bb8-11eb-9ea9-6cdb3f84dba7.jpg)

**Level selection workflow**

![level_workflow](https://user-images.githubusercontent.com/76033080/112114766-b8774680-8bb8-11eb-81f9-951cec1f8830.jpg)

## Surface

### Typography

The site uses Rocknroll from Google fonts, with sans-serif as a back up if needed. It has been chosen as it looked "fun" and engaging to meet the requirements of the child target audience, but also easy to read for those just starting to learn.

[Google Fonts - Rocknroll](https://fonts.google.com/specimen/RocknRoll+One?preview.text_type=custom&preview.text=Help%20feed%20Trevor%20the%20Caterpillar!&selection.family=RocknRoll+One)

### Imagery

[See separate Imagery file.](IMAGERY.md)

### Color Scheme

The site uses the following standard HTML colors:

**Header and footer text:** white

**Main play area and pop-up modal text:** darkslategray

**Background colors:** red; green; purple; pink; orangered; blue

### Favicon

## Technologies Used

This project uses the following languages:

HTML 5
CSS
JavaScript
jQuery

This project was created on [GitHub](http://www.github.com/).

This project uses the following libraries and frameworks:

* [Balsamiq](http://www.balsamiq.com/) - used to create all wireframes
* [Bootstrap](http://bootstrap.com/) - Bootstrap was used for part of grid structure and was heavily modified to meet the needs of the project
* [Google Fonts](https://fonts.google.com/specimen/RocknRoll+One?preview.text_type=custom&preview.text=Help%20feed%20Trevor%20the%20Caterpillar!&selection.family=RocknRoll+One) - RocknRoll
* [Font Awesome](http://www.fontawsome.com/) - used for the [star](https://fontawesome.com/icons/star?style=regular) for the correct answer counter; [sad face](https://fontawesome.com/icons/frown?style=regular) 
for the incorrect answer pop-up modal

Tiny PNG - used to resize images to reduce site loading time
Free Formatter HTML - for HTML code formatting
Free Formatter CSS - to beautify CSS code
Grammarly (Example) - the free service to double check grammar and spelling
Monday.com - used for project/task management
Am I responsive - supplied the responsive image for the top of README.md

## Testing

### Issues

## Deployment

## Credits

* Tutors at Code Institute: help with how to store used images in an array to ensure they didn't duplicate.
* YouTube tutorials on JavaScript, including 
* [W3 Schools](https://www.w3schools.com) - [modal pop-ups](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal); [fade To]( https://www.w3schools.com/jquery/jquery_fade.asp)
* [Stackoverflow](https://www.stackoverflow.com/) - [countdown timer](https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown); 
[target elements](https://stackoverflow.com/questions/22767609/add-event-listener-to-dom-elements-based-on-class); 
[find a clicked button value](https://stackoverflow.com/questions/30499447/determine-which-button-was-clicked-inside-a-div)
* MDN - JavaScript help



