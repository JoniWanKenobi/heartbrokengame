'use strict';

  

function CheerUpMessage(name, gender, city, message, rating, author){
    var self = this;
    self.name = name;
    self.gender = gender;
    self.city = city;
    self.message = message;
    self.rating = rating;
    self.author = author;
}


var defaultData = {
    messages: [['Sheng', 'M', 'Alicante', 'Never allow someone to be your priority while allowing yourself to be their option.', 5,''],
                ['Josep', 'M', 'Barcelona', 'An invisible red thread connects those who are destined to meet, regardless of time, place, or circumstance. The thread may stretch or tangle, but will never break.', 3, 'Ancient Chinese Proverb'],
                ['Andrea', 'M', 'Lisbon', 'What matters in life is not to predict the dangers of travels; is to have them made.', 7, 'Agostinho da Silva'],
                ['Stephanie', 'F', 'Innsbruck', 'Everything is going to be ok in the end, if it\'s not okay it\'s not the end', 5, '' ],
                ['Stephanie', 'F', 'Innsbruck', 'f you are brave enough to say goodbye, life will reward you with a new hello', 5, '' ]]
};

var messagesArray = [];

function createMessagesArray(arr){

    arr.forEach(function(element){
        var message = new CheerUpMessage(element[0], element[1], element[2], element[3], element[4], element[5], element[6]);
        messagesArray.push(message);
    });

    messagesArray.sort(function(a,b){
        return b.rating - a.rating;
    });
    
};

createMessagesArray(defaultData.messages);





