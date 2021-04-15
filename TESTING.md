Having created the website for mainly desktop, each workflow was tested following development, using [Monday.com](https://view.monday.com/1055700560-c01e5354c02ab53b9f7b9e492d44d50f?r=use1) to 
provide structure to the testing, during development and then after set live using Gitpages. 

Testing conducted outside of the development tool on the following;

iPhone SE2020
iPhone 12
iPad Pro 9.7"
All on iOS 14.3.

Testing conducted on the following browsers;

Safari
Chrome
Microsoft Edge
Firefox
Family and friends were also invited to test it and provide feedback, one of whom is a qualified Early Years Manager, specialising in development of pre-school aged children.

**User story testing**

The following gives examples of where the deployed site meets the needs of the users / players.

| User story | Requirement met
|---|---|
| a. As an adult first-time visitor, I want to easily navigate the site and quickly start a game. |![Userstory Adult A](supporting_docs/userstory_a.jpg) |
| b. As an adult first-time visitor, I want to understand how to play the game, so I can explain it to my child if necessary. | ![Userstory Adult B](supporting_docs/userstory_b.jpg) |
| c. As an adult first-time visitor, I want to feel confident that the game is free-to-play and age appropriate. | ![Userstory Adult C](supporting_docs/userstory_c.jpg) |
| d. As an adult first-time visitor, I want to understand what my child can gain from the game. | ![Userstory Adult D](supporting_docs/userstory_d.jpg) |
| e. As an adult first-time visitor, I want to know how to make the game more personal such as changing the level or some aspect of the site. | ![Userstory Adult E](supporting_docs/userstory_e.jpg) |

| User story | Requirement met
|---|---|
| a. As a child first-time visitor, I want to quickly understand the rules of the game. | ![Userstory Child A](supporting_docs/userstory_child_a.jpg) |
| b. As a child first-time visitor, I want to have fun playing an online game. | Feedback from numerous testers: their children enjoyed playing the game, gaining a new point and moving to the next level. They also enjoyed changing the colors in the game, which many did whilst playing. |
| c. As a child first-time visitor, I want to have some independence in play and feel the game is personally for me, by making my own choices. | ![Userstory Child C](supporting_docs/userstory_child_c.jpg)|
| d. As a child first-time visitor, I want to feel good when I select the correct option. | ![Userstory Child D](supporting_docs/userstory_child_d.jpg)|
| e. As a child first-time visitor, I want to understand that I got an answer wrong, but feel motivated to try again. | ![Userstory Child E](supporting_docs/userstory_child_e.jpg)|
| f. As a child first-time visitor, I want to feel encouraged to try the next level. | ![Userstory Child F](supporting_docs/userstory_child_f.jpg)|

**Branches**

Branches were used during deployment, when testing a new page layout and function workflow.

**Lighthouse report**

![Lighthouse report desktop](supporting_docs/lighthouse_report_desktop.jpg)

![Lighthouse report mobile](supporting_docs/lighthouse_report_mobile.jpg)

**Game workflow testing**

Testing the workflow has been done throughout development, including by testers not directly involved in the project.

![Workflow test](supporting_docs/workflow_testing.jpg)

## Issues

[#1: Countdown timer continues](https://github.com/CatherineTrevor/help-trevor-grow/issues/1)

This image was finally solved when the countdown timer was changed to a clock with a rotating hand to provide better user experience for the player, and the option images appear after the answer image A has completely faded.

[#2: Fade out function continues after correct answer selected](https://github.com/CatherineTrevor/help-trevor-grow/issues/2)

[Research source](https://stackoverflow.com/questions/10517835/can-javascript-function-execution-be-interrupted)

Should the player change levels quicker than the question has finished, the imageFadeOut functions still executes, meaning the player can see the end of the previous level, before changing to a new one.

![setTimeout](supporting_docs/setTimeout.jpg)

Based on much research and attempting setTimeout and numerous functions, it has been concluded that it is not possible to stop a function mid-way through it's execution. Therefore, should a player try to change levels whilst
playing a turn, two pop-ups appear asking Ready, then Let's play, lasting 2.5 seconds each. This gives the current turn enough time to finish before the player starts the new turn.

![Bugfix 2](supporting_docs/bugfix_2.jpg)

[#3: Images don't appear on published site](https://github.com/CatherineTrevor/help-trevor-grow/issues/3)

**Code validator**

**HTML**

![HTML](supporting_docs/html_validator.jpg)

**CSS**

![CSS](supporting_docs/css_validator.jpg)

**JavaScript**

![JavaScript](supporting_docs/jshint_validator.jpg)
