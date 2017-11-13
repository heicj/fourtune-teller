'use strict';
const answersArray = ['yes', 'no', 'absolutely', 'possibly', 'highly unlikly', 'who knows'];
const userAnswers = [];

function fortuneTell (name){
    this.name = name;
    this.answers = answersArray;
    this.userAnswers = [];
}

function randomAnswer(){
    if(userAnswers.length > 0){
        const userAns = userAnswers[Math.floor(Math.random() * userAnswers.length)];
        return userAns;

    }else{
        const ans = answersArray[Math.floor(Math.random() * answersArray.length)];
        return ans;
    }
}

const eightball = document.getElementById('eightBallImage');
eightBallImage.addEventListener('click', clickHandler);

function clickHandler() {

    const answer = document.getElementById('answer');
    answer.textContent = randomAnswer();
}

