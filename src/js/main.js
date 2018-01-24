'use strict';

function main(){

    var splashHTML ='<div class=\"container\"><div class=\"wrapper\"><div class=\"img-block\"><img src=\"../src/images/SplashHeart.png\" alt=\"\"></div><div class=\"text-block\"><h2>Broken heart?</h2><h2>This game will fix it.</h2><h4>One piece at the time.</h4><button id=\"start-btn\" class=\"start-btn btn btn-outline-danger\">Start</button></div></div></div>'
    var splashElement = createElementFromHTML(splashHTML);
    var title = document.querySelector('h1');
    var app = document.querySelector('#app');  
    var stage;
    var game;
    var PUZZLE_SIZE = 36;
    var PUZZLE_WIDTH = 360;
    var IMAGE_NAME = 'bansky-heart.jpg';
    var imageURL = './src/images/'+IMAGE_NAME;
      
    // -- SPLASH
    
    var startBtn;
    var handleStartClick = function () {
      destroySplash();
      buildGame();
    };

    function createElementFromHTML(htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();
      
        // Change this to div.childNodes to support multiple top-level nodes
        return div.firstChild; 
    }
  
    function buildSplash() {
      stage = 'splash';
      app.appendChild(splashElement);
      startBtn = document.querySelector('#start-btn');
      startBtn.addEventListener('click', handleStartClick);
    }
  
    function destroySplash() {
      startBtn.removeEventListener('click', handleStartClick);
      splashElement.remove();
    }
  
    // -- GAME
  
    function buildGame() {
      stage = 'game';
      game = new Game(app, createElementFromHTML, PUZZLE_SIZE, PUZZLE_WIDTH, imageURL);  
      game.build();
    //   window.setTimeout(function () {
    //     destroyGame();
    //     buildGameOver();
    //   }, 5000);
    }
  
    function destroyGame() {
      game.destroy();
    }
  
    // -- GAME OVER
  
    var gameOverElement;
    var playAgainButton;
    var handlePlayAgainClick = function () {
      destroyGameOver();
      buildGame();
    };
  
    function buildGameOver() {
      stage = 'gameOver';
  
      // create dom elements
      gameOverElement = document.createElement('div');
      gameOverElement.setAttribute('id', 'game-over');
  
      var title = document.createElement('h1');
      title.innerText = 'This is the game over';
      gameOverElement.appendChild(title);
  
      playAgainButton = document.createElement('button');
      playAgainButton.innerText = 'play again';
      gameOverElement.appendChild(playAgainButton);
  
      // apppend to site-main
      app.appendChild(gameOverElement);
  
      // bind click on start play button
      playAgainButton.addEventListener('click', handlePlayAgainClick);
    }
  
    function destroyGameOver() {
      // unbind click on start play button
      playAgainButton.removeEventListener('click', handlePlayAgainClick);
      // remove gameOver from dom
      gameOverElement.remove();
    }
  
    buildSplash();



}

window.onload = main;