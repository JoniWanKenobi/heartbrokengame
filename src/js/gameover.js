'use strict';

function GameOver(app, createFunction){
var self = this;

self.app = app;
self.createFunction = createFunction;
self.gameOverElement = document.createElement('div');
self.playAgainButton = createFunction('<button class="btn btn-outline-success">Play again</button>');
    
}

GameOver.prototype.mount = function(){
    var self = this;
    sef.gameOverElement.setAttribute('id', 'game-over');
    self.gameOverElement.setAttribute('class', 'wrapper');
    var imgCard = createElementFromHTML('<div class="card">\
            <div class="card-body">\
                <img class="card-img" src="./src/images/bansky-heart.jpg" alt=""></div><div class="card-footer">\
                <p><em>Bansky, "Ballon girl"</em></p></div></div>');
    
    var msgCard = document.createElement('div');
    msgCard.setAttribute('class','card');

    self.gameOverElement.appendChild(imgCard);

    var msgCardBody = createElementFromHTML('<div class="card-body">\
                <h2 class="card-title"><strong>Congratulations!! The last piece is only up to you!!</strong></h2>\
                <h4>And now that your heart is fixed...</h4>\
                <h4><strong>...it\'s time to use it again!!</strong></h4></div>');
    
    msgCard.appendChild(msgCardBody);

    var msgCardFooter = document.createElement('div');
    msgCardFooter.setAttribute('class','card-footer');

    var msgCardFooterQuote = createElementFromHTML('<div class="blockquote">\
                  <p class="card-text">"If you don\'t used, you lose it."</p><footer class="blockquote-footer">Someone famous</footer></div>');
    
    msgCardFooter.appendChild(msgCardFooterQuote);      

    msgCardFooter.appendChild(self.playAgainButton);

    msgCard.appendChild(msgCardFooter);
    self.gameOverElement.appendChild(msgCard);

    // apppend to site-main
    self.app.appendChild(self.gameOverElement);

}

Game.prototype.unmount = function(){
    var self = this;
    self.gameOverElement.remove();
}

    
    
          
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