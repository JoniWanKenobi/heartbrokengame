'use strict';

function Message(){
    var self = this;

    //Baseline DOM elements
    self.boardCardBodyElement = createFunction('<div class="card-body"></div>');
    
    //Data
    self.messagesArray = [];
    self.defaultData = {
        messages: [['Sheng', 'M', 'Alicante', 'Never allow someone to be your priority while allowing yourself to be their option.', 5],
                    ['Josep', 'M', 'Barcelona', 'An invisible red thread connects those who are destined to meet, regardless of time, place, or circumstance. The thread may stretch or tangle, but will never break.', 3, 'ancient Chinese Proverb'],
                    ['Andrea', 'M', 'Lisbon', 'What matters in life is not to predict the dangers of travels; is to have them made.', 4, 'Agostinho da Silva'],
                    ['Stephanie', 'F', 'Innsbruck', 'Everything is going to be ok in the end, if it\'s not okay it\'s not the end', 5 ],
                    ['Stephanie', 'F', 'Innsbruck', 'f you are brave enough to say goodbye, life will reward you with a new hello', 5 ]
    };

    self.createMessagesArray(self.defaultData.messages);
}


Message.prototype.createMessagesArray = function(arr){
    var self = this;

    arr.forEach(function(element){
        var message = new CheerUpMessage.apply(null, element);
        self.messagesArray.push(message);
    });

    self.messagesArray.sort(function(a,b){
        return a.rating - b.rating;
    });
    
};

Message.prototype.clearCardBody = function(){
    var self = this;
    while (self.boardCardBodyElement.firstChild) {
        self.boardCardBodyElement.removeChild(self.boardCardBodyElement.firstChild);
    }
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



Message.prototype.newCardBody = function(){
    var self = this;
    var message = self.messagesArray.shift(); //Gets due message form the array
    self.clearCardBody(); //Removes previous elements if present

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
    self.boardCardBodyElement.appendChild(cardTitleElement);
    self.boardCardBodyElement.appendChild(cardSubtitleElement);
    self.boardCardBodyElement.appendChild(quoteElement);
}

function CheerUpMessage(name, gender, city, message, rating, author){
    var self = this;
    self.name = name;
    self.gender = gender;
    self.city = city;
    self.message = message;
    self.rating = rating;
    self.author = author;
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