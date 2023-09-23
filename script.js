'use strict';

let num= Math.trunc(Math.random()*20)+1;


console.log(num);

let score= 20;
let highScore=0;

document.querySelector(`.check`).addEventListener(`click`, function(){
    const guess= Number(document.querySelector(`.guess`).value);
    console.log(guess);

    if(guess<1 || guess>20) document.querySelector(`.message`).textContent= `Type in a valid number!`;
    
    else if(guess==num){ 
        document.querySelector(`.message`).textContent= `Correct Answer!`;
        document.querySelector(`.number`).textContent= num;
        score= score+ 1;
        document.querySelector(`.score`).textContent= score;

        if(score>=highScore){
            highScore=score;
            document.querySelector(`.highscore`).textContent= highScore;
        }
        document.querySelector(`body`).style.backgroundColor= `#60b347`;
        document.querySelector(`.number`).style.width= `30rem`;
    }
    else if(guess !== num) {
        if(score>0){
        document.querySelector(`.message`).textContent= guess>num ? `Too HIGH! >.<` : `Too LOW! >.<`;
        score-=1;
        document.querySelector(`.score`).textContent= score;
        }
        else {
            document.querySelector(`.message`).textContent= 'GAME OVER';
        document.querySelector(`body`).style.backgroundColor= `#FF0000`;
    }
    }

    else document.querySelector(`.message`).textContent= `Enter a valid number!`;
});

document.querySelector(`.again`).addEventListener(`click`, function(){
    document.querySelector(`.message`).textContent= `Start Guessing...`;
    document.querySelector(`.score`).textContent= 20;
    num= Math.trunc(Math.random()*20)+1;
    console.log(num);
    document.querySelector(`.number`).textContent= `?`;
    document.querySelector(`body`).style.backgroundColor= `#222`;
    document.querySelector(`.number`).style.width= `15rem`;
    document.querySelector(`.guess`).value=``;
});


