'use strict';

function Game(app) {
    var self = this;
  
    self.app = app;
  
    self.finished = false;
  
    // create dom elements'
    self.gameElement = document.createElement('div');
    self.title = document.createElement('h1');
}

    // create array of enemies
  
    
  
  Game.prototype.destroy = function () {
    var self = this;  
    self.finished = true;
  };