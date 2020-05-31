const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;

console.log(square);

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole');
    })

    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');

    //assign the id of the randomPostion to hitPosition for comparison
    hitPosition = randomPosition.id;
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {

        if(id.id === hitPosition) {
            result = result + 1;
            score.textContent = result;
        }

    })
})

function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 1000);
}

moveMole();

//countdown function

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime === 0) {
        clearInterval(timerId);
        alert('GAME OVER! your final score is' + result);
        result = 0;
        score.textContent = result;
        currentTime = 60;
    }

}


let timerId = setInterval(countDown, 200);