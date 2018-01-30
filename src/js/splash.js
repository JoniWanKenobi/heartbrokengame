'use strict';

function Splash(app, createFunction){
    var self = this;
    self.app = app;
    self.createFunction = createFunction;
    self.wrapperElement = createFunction('<div class="wrapper"></div>');
    self.startButton = document.createElement('button');
}


Splash.prototype.mount = function(){
    var self = this;

    var splashImageElement = document.createElement('img');
    splashImageElement.setAttribute('class', 'img-block');
    splashImageElement.setAttribute('src', './src/images/SplashHeart.png');

    var textBlockElement = document.createElement('div');
    textBlockElement.setAttribute('class', 'text-bock');

    var textElement = self.createFunction('<div><h2>Broken heart?</h2><h2>This game will fix it.</h2><h4>One piece at the time.</h4></div>');
    
    self.startButton.setAttribute('class', 'start-btn btn btn-outline-danger');
    self.startButton.innerText = 'Start';

    textBlockElement.appendChild(textElement);
    textBlockElement.appendChild(self.startButton);

    self.wrapperElement.appendChild(splashImageElement);
    self.wrapperElement.appendChild(textBlockElement);

    self.app.appendChild(self.wrapperElement);
}

Splash.prototype.unmount = function(){
    var self = this;
    self.wrapperElement.remove();
}
