'use strict';
const answersArray = ['yes', 'no', 'absolutely', 'possibly', 'highly unlikly', 'who knows'];
const userAnswers = [];

const eightBall = new FortuneTell('eightBall');


function FortuneTell (name){
    this.name = name;
    this.answers = answersArray;
    this.userAnswers = userAnswers;
}

FortuneTell.prototype.randomAnswer = function(){
    if(userAnswers.length > 0){
        const userAns = userAnswers[Math.floor(Math.random() * userAnswers.length)];
        return userAns;

    }else{
        const ans = answersArray[Math.floor(Math.random() * answersArray.length)];
        return ans;
    }
};

const clear = document.getElementById('clearButton');
clear.addEventListener('click', function(e){
    e.preventDefault();
    userAnswers.length = 0;
});


//event handler to add user input as possible answers
const form = document.getElementById('userInput');
form.addEventListener('submit', function(e){
    e.preventDefault();
    //take inputs from form push content into user answer array
    for(let i = 1; i < 11; i++){
        const answerOne = document.getElementById('answer' + i).value;
        if (answerOne.length > 0){
            console.log(answerOne.length);
            console.log(answerOne);
            userAnswers.push(answerOne);
        }
    }
}


    // const newAnswer = document.getElementById('newAnswer').value;
    // userAnswers.push(newAnswer);

);