'use strict';

function main(){    
    var app = document.querySelector('#app');
    var PUZZLE_SIZE = 36;
    var PUZZLE_WIDTH = 360;
    var IMAGE_NAME = 'bansky-heart.jpg';
    var imageURL = '../src/images/'+IMAGE_NAME;
    var createElementFromHTML = function(htmlString) {//Helper function that enables to transform strings into HTML elements
      var div = document.createElement('div');
      div.innerHTML = htmlString.trim();    
      // Change this to div.childNodes to support multiple top-level nodes
      return div.firstChild; 
    }
    
    //Pages
    var splash;
    var game;  
    var gameOver;
    
    // -- SPLASH 
    function mountSplash() {
      splash = new Splash(app, createElementFromHTML);
      splash.mount();      
      splash.startButton.addEventListener('click', handleStartClick);
    }
  
    function unmountSplash() {
      splash.startButton.removeEventListener('click', handleStartClick);
      splash.unmount();
    }

    var handleStartClick = function () {
      unmountSplash();
      mountGame();
    };
  
    // -- GAME  
    function mountGame() {
      game = new Game(app, createElementFromHTML, PUZZLE_SIZE, PUZZLE_WIDTH, imageURL);
      game.mount();
      game.onGameover(function(){
        unmountGame();
        mountGameOver();
      });
    }

    function unmountGame() {
      game.unmount();
    }
  
    // -- GAME OVER
    var handlePlayAgainClick = function () {
      unmountGameOver();
      mountGame();
    };
  
    function mountGameOver() {
      gameOver = new GameOver(app, createElementFromHTML);
      gameOver.mount();
      gameOver.playAgainButton.addEventListener('click', handlePlayAgainClick);            
    }
  
    function destroyGameOver() {
      gameOver.playAgainButton.removeEventListener('click', handlePlayAgainClick);
      gameover.unmount();
    }
  
    mountSplash();
}

window.onload = main;


     