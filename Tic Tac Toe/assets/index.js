let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('box__text');
    let wins = [
        [0, 1, 2, 18, 6, 0],
        [3, 4, 5, 18, 19, 0],
        [6, 7, 8, 5, 32, 0],
        [0, 3, 6, 5.5, 20, 90],
        [1, 4, 7, 17.5, 20, 90],
        [2, 5, 8, 30.5, 20, 90],
        [0, 4, 8, 18, 19, 45],
        [2, 4, 6, 18, 19, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.winner_info').innerText = boxtext[e[0]].innerText + " Won !!!"
            isgameover = true
            document.querySelector('.win__emote').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}

// Game Logic
// music.play()
let boxes = document.getElementsByClassName("game__box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.box__text');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("winner_info")[0].innerText = "Current Turn - " + turn;
            }
        }
    })
})

// Add onclick listener to reset button
let reset = document.getElementById("btn");
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.box__text');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("winner_info")[0].innerText = "Current turn - " + turn;
    document.querySelector('.win__emote').getElementsByTagName('img')[0].style.width = "0px"
})

