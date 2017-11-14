'use strict';
const answersArray = ['yes', 'no', 'absolutely', 'possibly', 'highly unlikly', 'who knows'];
const userAnswers = [];

const eightBall = new FortuneTell('eightBall');

function FortuneTell (name){
    this.name = name;
    this.answers = answersArray;
    this.userAnswers = userAnswers;
}

if(localStorage.userAnswers){
    const userArray = JSON.parse(localStorage.userAnswers);
    for(let i = 0; i < userArray.length; i++){
        userAnswers.push(userArray[i]);
    }
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

const form = document.getElementById('userInput');
if(form) {
    if(localStorage.userAnswers){
        for(let i = 0; i < userAnswers.length; i++){
            const userAnswers = JSON.parse(localStorage.userAnswers);
            const formAnswers = userAnswers[i];
            const element = document.getElementById('answer' + (i + 1));
            if(formAnswers.length !== 0){
                element.value = formAnswers;
            }else{
                element.setAttribute('placeholder', 'Type Your Answer Here');
            }
        }
    }
};

const clear = document.getElementById('clearButton');
if(clear) {
    clear.addEventListener('click', function(e){
        e.preventDefault();
        userAnswers.length = 0;
        localStorage.clear();
        for(let i = 1; i < 11; i++){
            const answer = document.getElementById('answer' + i);
            answer.value = '';
        }
    }, false);
}

//event handler to add user input as possible answers
if(form) {
    form.addEventListener('submit', function(e){
        e.preventDefault();
        //take inputs from form push content into user answer array
        for(let i = 1; i < 11; i++){
            const answerOne = document.getElementById('answer' + i).value;
            if (answerOne.length > 0){
                if (!userAnswers.includes(answerOne)){
                // localStorage.setItem('answer' + i, JSON.stringify(answerOne));
                    console.log(answerOne.length);
                    console.log(answerOne);
                    userAnswers.push(answerOne);
                }
            }
        } localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
    }, false);
}

const eightBallImage = document.getElementById('eightBallImage'); // target HTML element with event listener
if (eightBallImage) {
    eightBallImage.addEventListener('click', clickHandler, false);
}// click handler is a function; event listener takes click handler function as a parameter

function clickHandler() {
    const answer = document.getElementById('answer'); // target HTML element to which click handler returns answer
    answer.textContent = eightBall.randomAnswer();
}