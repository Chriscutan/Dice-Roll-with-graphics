const numberList = [1, 2, 3, 4, 5, 6];
const imageList = ['./Assets/dice 1.png', './Assets/dice 2.png', './Assets/dice 3.png', './Assets/dice 4.png',
'./Assets/dice 5.png', './Assets/dice 6.png']
let roll = document.getElementById('roll').addEventListener('click', playAnimation)

let dieImg = document.createElement('img');
dieImg.classList.add('dice-img');

function showRandomNumber(){
    let randomDigit = Math.floor(Math.random() * numberList.length);
    dieImg.src = imageList[randomDigit];
    let dice = document.getElementById('dice');
    dice.appendChild(dieImg);
}

function playAnimation(){
    document.getElementById('dice').classList.add('play-animation');
    setTimeout( ()=>{
        document.getElementById('dice').classList.remove('play-animation');
    }, 1000);
    setTimeout( ()=>{
        showRandomNumber();
    }, 800)
}