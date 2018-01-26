'use strict';



function main(){

    var splashHTML ='<div class=\"container\"><div class=\"wrapper\"><div class=\"img-block\"><img src=\"./src/images/SplashHeart.png\" alt=\"\"></div><div class=\"text-block\"><h2>Broken heart?</h2><h2>This game will fix it.</h2><h4>One piece at the time.</h4><button id=\"start-btn\" class=\"start-btn btn btn-outline-danger\">Start</button></div></div></div>'
    var splashElement = createElementFromHTML(splashHTML);
    var title = document.querySelector('h1');
    var app = document.querySelector('#app');  
    var stage;
    var game;
    var PUZZLE_SIZE = 36;
    var PUZZLE_WIDTH = 360;
    var IMAGE_NAME = 'bansky-heart.jpg';
    var imageURL = '../src/images/'+IMAGE_NAME;
      
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
      game.onGameover(function(){
        destroyGame();
        buildGameOver();
      });
    }
    

    function destroyGame() {
      game.destroy();
    }
  
    // -- GAME OVER
  
    var gameOverElement;
    var playAgainButton;
    var handlePlayAgainClick = function () {
      destroyGameOver();
      mySound = new Audio('./music/lovesong.mp3');
      buildGame();
      mySound.play();
    };
  
    function buildGameOver() {
      stage = 'gameOver';
  
      // create dom elements
      gameOverElement = document.createElement('div');
      gameOverElement.setAttribute('id', 'game-over');
      gameOverElement.setAttribute('class', 'wrapper');
      var imgCard = createElementFromHTML('<div class="card">\
              <div class="card-body">\
                  <img class="card-img" src="./src/images/bansky-heart.jpg" alt=""></div><div class="card-footer">\
                  <p><em>Bansky, "Ballon girl"</em></p></div></div>');
      
      var msgCard = document.createElement('div');
      msgCard.setAttribute('class','card');

      gameOverElement.appendChild(imgCard);

      var msgCardBody = createElementFromHTML('<div class="card-body">\
                  <h2 class="card-title"><strong>Congratulations!!</strong></h2>\
                  <h4>And now that your heart is fixed...</h4>\
                  <h4><strong>...it\'s time to use it again!!</strong></h4></div>');
      
      msgCard.appendChild(msgCardBody);

      var msgCardFooter = document.createElement('div');
      msgCardFooter.setAttribute('class','card-footer');

      var msgCardFooterQuote = createElementFromHTML('<div class="blockquote">\
                    <p class="card-text">"If you don\'t used, you lose it."</p><footer class="blockquote-footer">Someone famous</footer></div>');
      
      msgCardFooter.appendChild(msgCardFooterQuote);      
  
      playAgainButton = document.createElement('button');
      playAgainButton.setAttribute('class', 'btn btn-outline-success');
      playAgainButton.innerText = 'Play again';
      msgCardFooter.appendChild(playAgainButton);

      msgCard.appendChild(msgCardFooter);
      gameOverElement.appendChild(msgCard);
  
      // apppend to site-main
      app.appendChild(gameOverElement);
  
      // bind click on start play button
      playAgainButton.addEventListener('click', handlePlayAgainClick);



      // <div class="wrapper">
      //     <div class="card">
      //         <div class="card-body">
      //             <img class="card-img" src="../../src/images/bansky-heart.jpg" alt="">                    
      //         </div>  
      //         <div class="card-footer">
      //             <p><em>Bansky, "Ballon girl"</em></p>                 
      //         </div>              
      //     </div>            
      //     <div class="card">
      //         <div class="card-body">
      //             <h2 class="card-title"><strong>Congratulations!!</strong></h2>
      //             <h4>And now that your heart is fixed...</h4>
      //             <h4><strong>...it's time to use it again!!</strong></h4>                                                                   
      //       </div>
      //       <div class="card-footer">
      //           <div class="blockquote">
      //               <p class="card-text">"If you don't used, you lose it."</p>   
      //               <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
      //           </div>    
      //       </div>
      //   </div>            
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