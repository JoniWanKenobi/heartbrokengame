'use strict';

function main(){

    var title = document.querySelector('h1');
    var app = document.querySelector('#app');  
    var stage;
    var game;

      
    // -- SPLASH
  
    var splashElement;
    var startGameButton;
    var handleStartClick = function () {
      destroySplash();
      buildGame();
    };
  
    function buildSplash() {
      stage = 'splash';
  
      // create dom elements
      splashElement = document.createElement('div');
      splashElement.setAttribute('id', 'splash');
      splashElement.appendChild(title);
      startGameButton = document.createElement('button');
      startGameButton.innerText = 'start';
      splashElement.appendChild(startGameButton);
      title.innerText = 'This is the splash';  
      // apppend to app
      app.appendChild(splashElement);
  
      // bind click on start play button
      startGameButton.addEventListener('click', handleStartClick);
    }
  
    function destroySplash() {
      // unbind click on start play button
      startGameButton.removeEventListener('click', handleStartClick);
      // remove splash from dom
      splashElement.remove();
    }
  
    // -- GAME
  
    function buildGame() {
      stage = 'game';
      game = new Game(app);
      title.innerText = 'This is the game';
      title.innerText = 'This is the splash';
  
      window.setTimeout(function () {
        destroyGame();
        buildGameOver();
      }, 5000);
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