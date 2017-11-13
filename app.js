'use strict';
const answersArray = ['yes', 'no', 'absolutely', 'possibly', 'highly unlikly', 'who knows'];

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
