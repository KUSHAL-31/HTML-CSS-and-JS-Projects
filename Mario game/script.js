scoreCount = 0;
cross = true;
duration = 4;

gameAudio = new Audio('music0.mp3')
gameoverAudio = new Audio('gameover.wav')

gameAudio.loop = true
gameAudio.play()

document.addEventListener("keydown", (e) => {
    console.log(e);
    if (e.key == " ") {
        mario = document.querySelector(".mario");
        mario.classList.add("animate-mario");
        setTimeout(() => {
            mario.classList.remove("animate-mario");
        }, 700);
    }
    if (e.key == "ArrowRight") {
        mario = document.querySelector(".mario");
        marioX = parseInt(
            window.getComputedStyle(mario, null).getPropertyValue("left")
        );
        mario.style.left = marioX + 13 + "px";
    }

    if (e.key == "ArrowLeft") {
        mario = document.querySelector(".mario");
        marioX = parseInt(
            window.getComputedStyle(mario, null).getPropertyValue("left")
        );
        mario.style.left = marioX - 13 + "px";
    }
});

setInterval(() => {
    mario = document.querySelector(".mario");
    enemy = document.querySelector(".enemy");
    gameOver = document.querySelector(".gameOver");
    container = document.querySelector(".container");

    mx = parseInt(window.getComputedStyle(mario, null).getPropertyValue("left"));
    my = parseInt(window.getComputedStyle(mario, null).getPropertyValue("top"));
    ex = parseInt(window.getComputedStyle(enemy, null).getPropertyValue("left"));
    ey = parseInt(window.getComputedStyle(enemy, null).getPropertyValue("top"));

    offsetX = Math.abs(mx - ex);
    offsetY = Math.abs(my - ey);

    if (offsetX < 70 && offsetY < 50) {
        cross = false
        gameAudio.pause()
        gameoverAudio.play()
        mario.classList.add('mario-go')
        gameOver.style.display = "block";
        enemy.classList.remove("animate-enemy");
        enemy.style.left = ex + 'px'
        setTimeout(() => {
            mario.style.display = 'none'
            gameoverAudio.pause()
        }, 3000);
        cross = false
    }
    else if (offsetX < 80 && cross) {
        scoreCount += 1;
        updateScore();
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
    //     enemyAni = parseFloat(window.getComputedStyle(enemy, null).getPropertyValue("animation-duration"));
    //     newTime = enemyAni - 0.2
    //     setTimeout(() => {
    //         enemy.style.animationDuration = newTime + 's'
    //     }, 700);
    //     duration -= 0.1;
    }
}, 100);

function updateScore() {
    score = document.querySelector(".score");
    score.innerHTML = "Score : " + scoreCount;
}
