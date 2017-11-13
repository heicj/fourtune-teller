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

const eightball = document.getElementById('eightBallImage'); // target HTML element with event listener
eightBallImage.addEventListener('click', clickHandler); // click handler is a function; event listener takes click handler function as a parameter

function clickHandler() {

    const answer = document.getElementById('answer'); // target HTML element to which click handler returns answer
    answer.textContent = randomAnswer(); // calls randomAnswer function, fills target element with random answer
}

