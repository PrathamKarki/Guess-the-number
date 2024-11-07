let score = 25;
let highScore = 0;

const message = document.querySelector('.message');
const scoreEl = document.querySelector('.score')
const highScoreEl = document.querySelector('.highscore');
const checkBtn = document.querySelector('.btn-check');
const playAgainBtn = document.querySelector('.play-again');


let randomNumber = Math.floor(Math.random()*25)+1;
const randomNumEl = document.querySelector('.random-number').textContent = '?'

checkBtn.addEventListener('click', function(){
    const guess = +document.querySelector('#guessInput').value;
    if(isNaN(guess) || guess >=26 || guess===0)
    {
        message.textContent = 'Invalid or not a number!'
        return;
    } 
    if(guess === randomNumber){
        message.textContent = 'Correct Guess! Hurray ✌😁'
        if(score >highScore){
            highScore = score;
            highScoreEl.textContent = highScore;
        }
    } else if(guess > randomNumber){
        if(score > 0){
        message.textContent = 'Guess a little lower 📉';
        score--;
        scoreEl.textContent = score;
        }
        else{
            message.textContent = 'You are out of points you lose!😭😢'
        }
    } else if(guess < randomNumber){

        if(score >0){
        message.textContent = 'Guess a little higher 📈';
        score--;
        scoreEl.textContent = score;
        } else{
            message.textContent = 'You are out of points you lose! 😭😢';
        }
    }

});

playAgainBtn.addEventListener('click', function(){
    message.textContent = 'Begin guessing your number';
    document.querySelector('#guessInput').value = 0;
    score = 25;
    scoreEl.textContent = score;
    randomNumber = Math.floor(Math.random()*25)+1;
    document.querySelector('.random-number').textContent ='?';
});