# JavaScript Capstone Project: Build a Shooter Game

<h1 align="center"><img src="https://raw.githubusercontent.com/phalado/JS-Capstone/shooter/dist/content/gameTitle2.png"><h1

This is Microverse's final project in Javascript's course.

In this project, I build a shooter game using JavaScript's framework [Phaser 3][phaser-url], a "fast, free and fun open-source framework for Canvas and WebGL powered browser games".


## Table of Contents

- [JavaScript Capstone Project: Build a Shooter Game](#javascript-capstone-project-build-a-shooter-game)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [The game](#the-game)
    - [How to play](#how-to-play)
    - [Design](#design)
      - [Player's ship](#players-ship)
      - [Enemies](#enemies)
      - [Scenes](#scenes)
  - [Technologies used](#technologies-used)
  - [Contact](#contact)
  - [Acknowledgements](#acknowledgements)


## About

This project's objective was to build a shooter game similar to York Computer's [tutorial][sg-tutorial]. So I used the main idea but I created my own Star Wars Space Shooter.

The assignment can be seen [here][assignment].

Link to a live version [here][live-version].

Repository: https://github.com/phalado/JS-Capstone


## The game

This is a simple endless runner. Enemies appear at the top of the canvas Some shoot you, some pass straight, some pursue you. You control Luke Skywalker's X-Wing with the keys **w**, **a**, **s** and **d** while you shoot with **space**. Just destroy as many enemies as you can before your HP runs out and you die. 

In the end, you can add your name to our Leader Board and check the high scores.


### How to play

First the most important: how to play.

The commands were explained in the previous section ![wasd][wasd] to move ![space][space] to shoot.


You can play the game online clicking [here][live-version] or locally following these steps:

* Click on the green button "Clone or Download"
* Click on Download ZIP
* Extract the game
* In your terminal, navigate to the game's folder
* Run 'node server.js'
* Open, in your browser, 'localhost:8080'
* Beat my record and make my name disappear from the Leader Board


### Design

First of all: this is a simple pixel game. You can't expect to see high-quality graphics. Or medium-quality graphics... So, the ship's designs are just a low-quality version of the movie's design. The only "enemy" that you can see on the screen that is not a Star Wars original is the bomb.


#### Player's ship

The player's ship is Luke's X-Wing: ![X-Wing][X-Wing]

Your HP is 5 and is represented by Anakin Skywalker's saber at the top of the screen: ![HP-Bar]

Each damage receive makes R2D2 complain. In your last strenth, a friend comes to give you a wise advise.


#### Enemies

The tie fighter is the most common enemy: ![Tie-Fighter][Tie-Fighter]

It's HP is 3 and it will shoot you. It gives you 300 points when destroyed.


Next, we have the Imperial Shuttle: ![Imp-Sh][Imp-Sh]

It's HP is 4, it won't shoot you and will give you 500 points.


The bomb will pursue you until be destroyed or give you some damage: ![Bomb][Bomb]

It's destroyed with a single shoot and gives only 100 points, but it's a good idea to get rid of it as soon as possible.


The most difficult is Vader himself. He comes in his Tie Advanced: ![Tie-Adv][Tie-Adv]

His HP is 20 and he gives 5000 points. He won't leave the screen like the others and will shoot you.

If you manage to destroy his ship don't fool yourself. He will be back, after all (SPOILER ALERT) he is your father!!! (Nooooooooooooooooo!!!!!!!!)


#### Scenes

This game is composed by 5 scenes each one with its music:

* Introduction: 

![SC-Intro][SC-Intro]

* Main Menu: 

![SC-MM][SC-MM]

* Game: 

![SC-Game][SC-Game]

* Game Over: 

![SC-GO][SC-GO]

* Leader Board: 

![SC-LB][SC-LB]


It is important to mention that the Leader Board will only show 20 names.

It is also important to mention that **Han shot first!!!** 


## Technologies used

To create this game I used:

* JavaScript
* A bit of HTML and CSS for the front end
* Phaser 3
* Webpack
* Eslint
* Babel
* Jest in the tests
* Express
* Github
* [Heroku](https://www.heroku.com/) for the deployment
* [Leaderboard API service][LB-API] for the leaderboard


## Contact

Author: Raphael Cordeiro

Follow me on [twitter][rapha-twitter],  visit my [Github portfolio][rapha-github], my [Linkedin][rapha-linkedin] or my [personal portfolio][rapha-personal].


## Acknowledgements

[Microverse][mcvs]




<!-- Links -->
[assignment]: https://www.notion.so/Shooter-game-203e819041c7486bb36f9e65faecba27
[live-version]: https://starwars-spaceshooter.herokuapp.com/
[phaser-url]: https://phaser.io/
[sg-tutorial]: https://learn.yorkcs.com/category/tutorials/gamedev/phaser-3/build-a-space-shooter-with-phaser-3/
[LB-API]: https://www.notion.so/Leaderboard-API-service-24c0c3c116974ac49488d4eb0267ade3
[mcvs]: https://www.microverse.org/
[rapha-github]: https://github.com/phalado
[rapha-twitter]: https://twitter.com/phalado
[rapha-linkedin]: https://www.linkedin.com/in/raphael-cordeiro/
[rapha-personal]: https://phalado.github.io/

<!-- Images -->
[logo]: https://raw.githubusercontent.com/phalado/JS-Capstone/shooter/dist/content/gameTitle2.png
[wasd]: https://raw.githubusercontent.com/phalado/JS-Capstone/shooter/Images/wasd.png
[space]: https://raw.githubusercontent.com/phalado/JS-Capstone/shooter/Images/space-key.png
[X-Wing]: https://raw.githubusercontent.com/phalado/JS-Capstone/shooter/dist/content/xWing.png
[Tie-Fighter]: https://raw.githubusercontent.com/phalado/JS-Capstone/shooter/dist/content/tieFighterp.png
[Tie-Adv]: https://raw.githubusercontent.com/phalado/JS-Capstone/shooter/dist/content/tieAdvanced.png
[Imp-Sh]: https://raw.githubusercontent.com/phalado/JS-Capstone/shooter/dist/content/imperialShutle.png
[Bomb]: https://raw.githubusercontent.com/phalado/JS-Capstone/shooter/dist/content/sprEnemy1.png
[HP-Bar]: https://raw.githubusercontent.com/phalado/JS-Capstone/shooter/dist/content/saberComplete.png
[SC-Intro]: https://raw.githubusercontent.com/phalado/JS-Capstone/shooter/Images/sceneIntro.png
[SC-MM]: https://raw.githubusercontent.com/phalado/JS-Capstone/shooter/Images/sceneMM.png
[SC-Game]: https://raw.githubusercontent.com/phalado/JS-Capstone/shooter/Images/sceneGame.png
[SC-GO]: https://raw.githubusercontent.com/phalado/JS-Capstone/shooter/Images/sceneGO.png
[SC-LB]: https://raw.githubusercontent.com/phalado/JS-Capstone/shooter/Images/sceneLB.png