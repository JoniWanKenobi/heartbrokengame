'use strict';

function CardFooter(cardElement, createFunction, puzzleWidth, cellWidth, rowLength){
    var self = this;
    self.puzzleWidth = 360;
    self.cellWidth = 60;
    self.rowLength = rowLength;
    self.createFunction = createFunction;    
    self.pieces = self.createPiecesArray();   
    self.pieceNumber = 0;

    //DOM elements
    self.cardElement = cardElement;   
};

CardFooter.prototype.createPiecesArray = function(){ //Creates an array of DOM elements representing the puzzle pieces;
    var self = this;
    var arr = [];
    for(var i=self.puzzleWidth; i>=self.cellWidth; i-=self.cellWidth){        
        for(var j=self.puzzleWidth; j>=self.cellWidth; j-=self.cellWidth){
            var piece = self.createPiece(j,i, arr.length);
            arr.push(piece);           
        }
    }    
    return self.shuffle(arr);    
};

CardFooter.prototype.createPiece = function(i,j, id){
    var self = this;    
    var positionString = 'background-position: ' + i +'px' + ' ' + j + 'px'; 
    var pieceElement = document.createElement('div'); //Actual puzzle piece with cropped image
    pieceElement.setAttribute('class', 'jigsaw-img piece');
    pieceElement.setAttribute('style', positionString);

    var idElement = document.createElement('div'); //Wrapper element needed by dragula.js, will be later selected by id
    idElement.setAttribute('id', 'el-'+ (id + 1));
    idElement.appendChild(pieceElement);      

    return idElement;
};

CardFooter.prototype.shuffle = function (ar) { //Just an array shuffle function
    var shuffledArr = [];
    while(ar.length>0){
        var ranNum = Math.floor(Math.random() * ar.length);
        var el = ar.splice(ranNum,1)[0];
        shuffledArr.push(el);
    }
    return shuffledArr;
};

CardFooter.prototype.mountCardFooter = function(){//Mounts the card footer to the DOM
    var self = this;    
    var pieceElement = self.pieces.shift();
    if(pieceElement != null){
        var elementId = pieceElement.id;
        self.pieceNumber = Number(elementId.split('-')[1]);
        var cardFooterElement = self.createFunction('<div class="card-footer"></div>');
        var piecesElement = self.createFunction('<div class="pieces"></div>');
        piecesElement.appendChild(pieceElement);
        cardFooterElement.appendChild(piecesElement);
        self.cardElement.appendChild(cardFooterElement);  
    }    
}

CardFooter.prototype.refreshCardFooter = function(){//Remove, update, mount to DOM
    var self = this;
    self.removeItself();
    self.mountCardFooter();
}

CardFooter.prototype.removeItself = function(){//Remove from DOM
    var self = this;
    var footer = self.cardElement.querySelector('.card-footer');
    footer.remove();
}



