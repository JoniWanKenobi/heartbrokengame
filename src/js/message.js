'use strict';

function Message(cardElement, createFunction){
    var self = this;
    self.createFunction = createFunction;

    //Baseline DOM elements
    self.cardElement = cardElement;   
}

Message.prototype.slectIconElement = function(message){
    var self = this;
    var iconElement = document.createElement('img');
    if(message.gender === 'M'){
        iconElement.setAttribute('src', './src/images/user.svg');
    }
    else {
        iconElement.setAttribute('src', './src/images/user-female.svg');
    }
    return iconElement;
}

Message.prototype.mountCardBody = function(){
    var self = this;
    var message = messagesArray.shift(); //Gets due message form the array
    var boardCardBodyElement = self.createFunction('<div class="card-body"></div>');
    
    //Title
    var iconElement = self.slectIconElement(message);
    var cardTitleElement = document.createElement('h5');
    cardTitleElement.setAttribute('class', 'card-title');
    cardTitleElement.appendChild(iconElement);
    cardTitleElement.innerText = message.name;

    //Subtitle
    var cardSubtitleElement = document.createElement('h6');
    cardSubtitleElement.setAttribute('class', 'card-subtitle mb-2 text-muted');
    cardSubtitleElement.innerText = message.city;

    //Message text
    var quoteElement = document.createElement('div');
    quoteElement.setAttribute('class', 'blockquote');
    var messageTextElement = document.createElement('p');
    messageTextElement.setAttribute('class', 'card-text');
    messageTextElement.innerText = message.message; 

    //Author
    var authorElement = document.createElement('footer');
    authorElement.setAttribute('class', 'blockquote-footer');
    authorElement.innerText = message.author;

    //Bouilding up
    quoteElement.appendChild(messageTextElement);
    quoteElement.appendChild(authorElement);
    boardCardBodyElement.appendChild(cardTitleElement);
    boardCardBodyElement.appendChild(cardSubtitleElement);
    boardCardBodyElement.appendChild(quoteElement);

    self.cardElement.appendChild(boardCardBodyElement);
}

Message.prototype.refreshMessage = function(){
    var self = this;
    self.removeItself();
    self.mountCardBody();
}

Message.prototype.removeItself = function(){
    var self = this;
    var cardBody = self.cardElement.querySelector('.card-body');
    cardBody.remove();
}

// HTML Snippet

/* <div class="card-body">
    <h5 class="card-title"><img src="../../src/images/user.svg" alt=""> Joni Wan</h5>
    <h6 class="card-subtitle mb-2 text-muted">Barcelona</h6>
    <div class="blockquote">
        <p class="card-text">If you love someone, set them free. If they come back they're yours; if they don't they never were.</p>   
        <footer class="blockquote-footer">Someone famous</footer>
    </div>                                           
</div> */



