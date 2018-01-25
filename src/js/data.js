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
                ['Andrè', 'M', 'Lisbon', 'What matters in life is not to predict the dangers of travels; is to have them made.', 7, 'Agostinho da Silva'],
                ['Stephanie', 'F', 'Innsbruck', 'Everything is going to be ok in the end, if it\'s not okay it\'s not the end', 5, '' ],
                ['Stephanie', 'F', 'Innsbruck', 'If you are brave enough to say goodbye, life will reward you with a new hello.', 5, '' ],
                ['Daniel', 'M', 'Barcelona', 'The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he, who in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother’s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy my brothers. And you will know my name is the Lord when I lay my vengeance upon thee.', 2, 'Ezekiel 25:17'],
                ['David', 'M', 'Montreal', 'You miss a hundred percent of the shots you don\'t take', 7, 'Michael Scott'],
                ['Luis', 'M', 'Alderaan', 'I would rather kiss a wookie', 6, 'Princess Leia'],
                ['Santiago', 'M', 'Barcelona', 'It\’s not about what you leave behind it\’s about what there is to come. Stay awake and life will lead you further than you ever though.', 5, ''],
                ['Santiago', 'M', 'Barcelona', 'To a disciple who was forever complaining about others the Master said, “If it is peace you want, seek to change yourself, not other people. It is easier to protect your feet with slippers than to carpet the whole of the earth.”', 4, 'Anthony de Mello'],
                ['Ania', 'F', 'Barcelona', 'I am too full of life to be half loved.', 3, ''],
                ['Ania', 'F', 'Barcelona', 'If you change the way you look at things, the things you look at change.', 8, 'Wayne Dyer'],
                ['Stephanie', 'F', 'Innsbruck', 'Move on, it\'s just a chapter in your life. Don\'t close the book, just turn the page for a new chapter', 5, ''],
                ['Stephanie', 'F', 'Innsbruck', 'Don\'t let the world change your smile, let your smile change the world ;)', 5, ''],
                ['Linda Luisa', 'F', 'Cologne', 'Keep your heart strong, you are light! Do more of the things that passionate you and I am sure you will find the person that is passionated about you!', 7, ''],
                ['Joni Wan', 'M', 'Nemi', 'If you love someone, set them free. If they come back they\'re yours; if they don\'t they never were.', 5, ''],
                ['Sheng', 'M', 'Alicante', 'Never allow someone to be your priority while allowing yourself to be their option.', 5,''],
                ['Josep', 'M', 'Barcelona', 'An invisible red thread connects those who are destined to meet, regardless of time, place, or circumstance. The thread may stretch or tangle, but will never break.', 3, 'Ancient Chinese Proverb'],
                ['Andrè', 'M', 'Lisbon', 'What matters in life is not to predict the dangers of travels; is to have them made.', 7, 'Agostinho da Silva'],
                ['Stephanie', 'F', 'Innsbruck', 'Everything is going to be ok in the end, if it\'s not okay it\'s not the end', 5, '' ],
                ['Stephanie', 'F', 'Innsbruck', 'If you are brave enough to say goodbye, life will reward you with a new hello.', 5, '' ],
                ['Daniel', 'M', 'Barcelona', 'The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he, who in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother’s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy my brothers. And you will know my name is the Lord when I lay my vengeance upon thee.', 2, 'Ezekiel 25:17'],
                ['David', 'M', 'Montreal', 'You miss a hundred percent of the shots you don\'t take', 7, 'Michael Scott'],
                ['Luis', 'M', 'Alderaan', 'I would rather kiss a wookie', 6, 'Princess Leia'],
                ['Santiago', 'M', 'Barcelona', 'It\’s not about what you leave behind it\’s about what there is to come. Stay awake and life will lead you further than you ever though.', 5, ''],
                ['Santiago', 'M', 'Barcelona', 'To a disciple who was forever complaining about others the Master said, “If it is peace you want, seek to change yourself, not other people. It is easier to protect your feet with slippers than to carpet the whole of the earth.”', 4, 'Anthony de Mello'],
                ['Ania', 'F', 'Barcelona', 'I am too full of life to be half loved.', 3, ''],
                ['Ania', 'F', 'Barcelona', 'If you change the way you look at things, the things you look at change.', 8, 'Wayne Dyer'],
                ['Stephanie', 'F', 'Innsbruck', 'Move on, it\'s just a chapter in your life. Don\'t close the book, just turn the page for a new chapter', 5, ''],
                ['Stephanie', 'F', 'Innsbruck', 'Don\'t let the world change your smile, let your smile change the world ;)', 5, ''],
                ['Linda Luisa', 'F', 'Cologne', 'Keep your heart strong, you are light! Do more of the things that passionate you and I am sure you will find the person that is passionated about you!', 7, ''],
                ['Joni Wan', 'M', 'Nemi', 'If you love someone, set them free. If they come back they\'re yours; if they don\'t they never were.', 5, 'Richard Bach'],
                ['Sheng', 'M', 'Alicante', 'Never allow someone to be your priority while allowing yourself to be their option.', 5,''],
                ['Josep', 'M', 'Barcelona', 'An invisible red thread connects those who are destined to meet, regardless of time, place, or circumstance. The thread may stretch or tangle, but will never break.', 3, 'Ancient Chinese Proverb'],
                ['Andrè', 'M', 'Lisbon', 'What matters in life is not to predict the dangers of travels; is to have them made.', 7, 'Agostinho da Silva'],
                ['Stephanie', 'F', 'Innsbruck', 'Everything is going to be ok in the end, if it\'s not okay it\'s not the end', 5, '' ],
                ['Stephanie', 'F', 'Innsbruck', 'If you are brave enough to say goodbye, life will reward you with a new hello.', 5, '' ],
                ['Daniel', 'M', 'Barcelona', 'The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he, who in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother’s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy my brothers. And you will know my name is the Lord when I lay my vengeance upon thee.', 2, 'Ezekiel 25:17'],
                ['David', 'M', 'Montreal', 'You miss a hundred percent of the shots you don\'t take', 7, 'Michael Scott'],
                ['Luis', 'M', 'Alderaan', 'I would rather kiss a wookie', 6, 'Princess Leia'],
                ['Santiago', 'M', 'Barcelona', 'It\’s not about what you leave behind it\’s about what there is to come. Stay awake and life will lead you further than you ever though.', 5, ''],
                ['Santiago', 'M', 'Barcelona', 'To a disciple who was forever complaining about others the Master said, “If it is peace you want, seek to change yourself, not other people. It is easier to protect your feet with slippers than to carpet the whole of the earth.”', 4, 'Anthony de Mello'],
                ['Ania', 'F', 'Barcelona', 'I am too full of life to be half loved.', 3, ''],
                ['Ania', 'F', 'Barcelona', 'If you change the way you look at things, the things you look at change.', 8, 'Wayne Dyer'],
                ['Stephanie', 'F', 'Innsbruck', 'Move on, it\'s just a chapter in your life. Don\'t close the book, just turn the page for a new chapter', 5, ''],
                ['Stephanie', 'F', 'Innsbruck', 'Don\'t let the world change your smile, let your smile change the world ;)', 5, ''],
                ['Linda Luisa', 'F', 'Cologne', 'Keep your heart strong, you are light! Do more of the things that passionate you and I am sure you will find the person that is passionated about you!', 7, ''],
                ['Joni Wan', 'M', 'Nemi', 'If you love someone, set them free. If they come back they\'re yours; if they don\'t they never were.', 5, ''],
                ['Sheng', 'M', 'Alicante', 'Never allow someone to be your priority while allowing yourself to be their option.', 5,''],
                ['Josep', 'M', 'Barcelona', 'An invisible red thread connects those who are destined to meet, regardless of time, place, or circumstance. The thread may stretch or tangle, but will never break.', 3, 'Ancient Chinese Proverb'],
                ['Andrè', 'M', 'Lisbon', 'What matters in life is not to predict the dangers of travels; is to have them made.', 7, 'Agostinho da Silva'],
                ['Stephanie', 'F', 'Innsbruck', 'Everything is going to be ok in the end, if it\'s not okay it\'s not the end', 5, '' ],
                ['Stephanie', 'F', 'Innsbruck', 'If you are brave enough to say goodbye, life will reward you with a new hello.', 5, '' ],
                ['Daniel', 'M', 'Barcelona', 'The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he, who in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother’s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy my brothers. And you will know my name is the Lord when I lay my vengeance upon thee.', 2, 'Ezekiel 25:17'],
                ['David', 'M', 'Montreal', 'You miss a hundred percent of the shots you don\'t take', 7, 'Michael Scott'],
                ['Luis', 'M', 'Alderaan', 'I would rather kiss a wookie', 6, 'Princess Leia'],
                ['Santiago', 'M', 'Barcelona', 'It\’s not about what you leave behind it\’s about what there is to come. Stay awake and life will lead you further than you ever though.', 5, ''],
                ['Santiago', 'M', 'Barcelona', 'To a disciple who was forever complaining about others the Master said, “If it is peace you want, seek to change yourself, not other people. It is easier to protect your feet with slippers than to carpet the whole of the earth.”', 4, 'Anthony de Mello'],
                ['Ania', 'F', 'Barcelona', 'I am too full of life to be half loved.', 3, ''],
                ['Ania', 'F', 'Barcelona', 'If you change the way you look at things, the things you look at change.', 8, 'Wayne Dyer'],
                ['Stephanie', 'F', 'Innsbruck', 'Move on, it\'s just a chapter in your life. Don\'t close the book, just turn the page for a new chapter', 5, ''],
                ['Stephanie', 'F', 'Innsbruck', 'Don\'t let the world change your smile, let your smile change the world ;)', 5, ''],
                ['Linda Luisa', 'F', 'Cologne', 'Keep your heart strong, you are light! Do more of the things that passionate you and I am sure you will find the person that is passionated about you!', 7, ''],
                ['Joni Wan', 'M', 'Nemi', 'If you love someone, set them free. If they come back they\'re yours; if they don\'t they never were.', 5, 'Richard Bach']
            ]
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


    // CardFooter.prototype.shuffle = function (ar) {
    //     // var copyArr = arr.slice();
    //     var shuffledArr = [];
    //     while(ar.length>0){
    //         var ranNum = Math.floor(Math.random() * ar.length);
    //         var el = ar.splice(ranNum,1)[0];
    //         shuffledArr.push(el);
    //     }
    
    //     return shuffledArr;
    // };
    
};

createMessagesArray(defaultData.messages);





