if(localStorage.userAnswers){
    for(let i = 0; i < userAnswers.length; i++){
        const userAnswers = JSON.parse(localStorage.userAnswers);
        const formAnswers = userAnswers[i];
        const element = document.getElementById('answer' + (i + 1));
        if(formAnswers.length !== 0){
            element.value = formAnswers;
            element.setAttribute('placeholder', formAnswers);
        }else{
            element.setAttribute('placeholder', 'Type Your Answer Here');
        }
    }
}