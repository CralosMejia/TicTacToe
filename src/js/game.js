const labelPlayer2 = document.querySelector(".Player2");
const labelPlayer1Points = document.querySelector(".Player1-points");
const labeltiePoints = document.querySelector(".tie-points");
const labelPlayer2Points = document.querySelector(".Player2-points");
const labelTitleTurn=document.querySelector(".title-turn");

let contPonitsPlayer1 = parseInt(labelPlayer1Points.textContent);
let contPonitstie = parseInt(labeltiePoints.textContent);
let contPonitsPlayer2 = parseInt(labelPlayer2Points.textContent);

let secondPlayer=undefined;

//-------botones
const btnPosition1 = document.querySelector(".position-1");
const btnPosition2 = document.querySelector(".position-2");
const btnPosition3 = document.querySelector(".position-3");
const btnPosition4 = document.querySelector(".position-4");
const btnPosition5 = document.querySelector(".position-5");
const btnPosition6 = document.querySelector(".position-6");
const btnPosition7 = document.querySelector(".position-7");
const btnPosition8 = document.querySelector(".position-8");
const btnPosition9 = document.querySelector(".position-9");

const listBtn = [btnPosition1, btnPosition2, btnPosition3, btnPosition4, btnPosition5, btnPosition6, btnPosition7, btnPosition8, btnPosition9];
//----------------------------Variables
let turn = 1;
let winGame = false;

//---------------------Game mode
function modeGame() {
    if (localStorage.getItem('typeOfgame') === "1") {
        secondPlayer="Computer"
        labelPlayer2.innerHTML = "PC(o)";
        labelPlayer2.style.marginLeft = '3.8rem';
        labelPlayer2.style.transition = 'none';
    } else if (localStorage.getItem('typeOfgame') === "2") {
        secondPlayer="Player Two"
        labelPlayer2.innerHTML = "Player Two(o)";
    }
}
modeGame();

//---------------------------------Game
function gameTurn() {
    if (turn === 1) {
        labelTitleTurn.innerHTML=secondPlayer; 
        turn = 2;
        return "x";
    } else {
        labelTitleTurn.innerHTML="Player One";
        turn = 1;
        return "o";
    }
}

function cleanBoard() {
    for (btn of listBtn) {
        btn.innerHTML = "";
        if (btn.classList.contains('win')) {
            btn.classList.toggle('win');
        } else if (btn.classList.contains('lose')) {
            btn.classList.toggle('lose');
        }
    }
    winGame = false;
}

function updateScore(winner) {
    if (winner === 'x') {
        contPonitsPlayer1++;
        labelPlayer1Points.innerHTML = contPonitsPlayer1;
    } else if (winner === 'o') {
        contPonitsPlayer2++;
        labelPlayer2Points.innerHTML = contPonitsPlayer2;
    } else {
        contPonitstie++;
        labeltiePoints.innerHTML = contPonitstie;
    }
}

function validationWinGame() {
    if (btnPosition1.textContent === "x" && btnPosition2.textContent === "x" && btnPosition3.textContent === "x" || btnPosition1.textContent === "o" && btnPosition2.textContent === "o" && btnPosition3.textContent === "o") {
        btnPosition1.classList.toggle('win');
        btnPosition2.classList.toggle('win');
        btnPosition3.classList.toggle('win');
        btnPosition4.classList.toggle('lose');
        btnPosition5.classList.toggle('lose');
        btnPosition6.classList.toggle('lose');
        btnPosition7.classList.toggle('lose');
        btnPosition8.classList.toggle('lose');
        btnPosition9.classList.toggle('lose');
        updateScore(btnPosition1.textContent);
        return true;
    } else if (btnPosition4.textContent === "x" && btnPosition5.textContent === "x" && btnPosition6.textContent === "x" || btnPosition4.textContent === "o" && btnPosition5.textContent === "o" && btnPosition6.textContent === "o") {
        btnPosition1.classList.toggle('lose');
        btnPosition2.classList.toggle('lose');
        btnPosition3.classList.toggle('lose');
        btnPosition4.classList.toggle('win');
        btnPosition5.classList.toggle('win');
        btnPosition6.classList.toggle('win');
        btnPosition7.classList.toggle('lose');
        btnPosition8.classList.toggle('lose');
        btnPosition9.classList.toggle('lose');
        updateScore(btnPosition4.textContent);
        return true;
    } else if (btnPosition7.textContent === "x" && btnPosition8.textContent === "x" && btnPosition9.textContent === "x" || btnPosition7.textContent === "o" && btnPosition8.textContent === "o" && btnPosition9.textContent === "o") {
        btnPosition1.classList.toggle('lose');
        btnPosition2.classList.toggle('lose');
        btnPosition3.classList.toggle('lose');
        btnPosition4.classList.toggle('lose');
        btnPosition5.classList.toggle('lose');
        btnPosition6.classList.toggle('lose');
        btnPosition7.classList.toggle('win');
        btnPosition8.classList.toggle('win');
        btnPosition9.classList.toggle('win');
        updateScore(btnPosition7.textContent);
        return true;
    }
    else if (btnPosition1.textContent === "x" && btnPosition4.textContent === "x" && btnPosition7.textContent === "x" || btnPosition1.textContent === "o" && btnPosition4.textContent === "o" && btnPosition7.textContent === "o") {

        btnPosition1.classList.toggle('win');
        btnPosition2.classList.toggle('lose');
        btnPosition3.classList.toggle('lose');
        btnPosition4.classList.toggle('win');
        btnPosition5.classList.toggle('lose');
        btnPosition6.classList.toggle('lose');
        btnPosition7.classList.toggle('win');
        btnPosition8.classList.toggle('lose');
        btnPosition9.classList.toggle('lose');
        updateScore(btnPosition4.textContent);
        return true;
    } else if (btnPosition2.textContent === "x" && btnPosition5.textContent === "x" && btnPosition8.textContent === "x" || btnPosition2.textContent === "o" && btnPosition5.textContent === "o" && btnPosition8.textContent === "o") {

        btnPosition1.classList.toggle('lose');
        btnPosition2.classList.toggle('win');
        btnPosition3.classList.toggle('lose');
        btnPosition4.classList.toggle('lose');
        btnPosition5.classList.toggle('win');
        btnPosition6.classList.toggle('lose');
        btnPosition7.classList.toggle('lose');
        btnPosition8.classList.toggle('win');
        btnPosition9.classList.toggle('lose');
        updateScore(btnPosition2.textContent);
        return true;
    } else if (btnPosition3.textContent === "x" && btnPosition6.textContent === "x" && btnPosition9.textContent === "x" || btnPosition3.textContent === "o" && btnPosition6.textContent === "o" && btnPosition9.textContent === "o") {

        btnPosition1.classList.toggle('lose');
        btnPosition2.classList.toggle('lose');
        btnPosition3.classList.toggle('win');
        btnPosition4.classList.toggle('lose');
        btnPosition5.classList.toggle('lose');
        btnPosition6.classList.toggle('win');
        btnPosition7.classList.toggle('lose');
        btnPosition8.classList.toggle('lose');
        btnPosition9.classList.toggle('win');
        updateScore(btnPosition9.textContent);
        return true;
    } else if (btnPosition1.textContent === "x" && btnPosition5.textContent === "x" && btnPosition9.textContent === "x" || btnPosition1.textContent === "o" && btnPosition5.textContent === "o" && btnPosition9.textContent === "o") {

        btnPosition1.classList.toggle('win');
        btnPosition2.classList.toggle('lose');
        btnPosition3.classList.toggle('lose');
        btnPosition4.classList.toggle('lose');
        btnPosition5.classList.toggle('win');
        btnPosition6.classList.toggle('lose');
        btnPosition7.classList.toggle('lose');
        btnPosition8.classList.toggle('lose');
        btnPosition9.classList.toggle('win');
        updateScore(btnPosition1.textContent);
        return true;
    } else if (btnPosition3.textContent === "x" && btnPosition5.textContent === "x" && btnPosition7.textContent === "x" || btnPosition3.textContent === "o" && btnPosition5.textContent === "o" && btnPosition7.textContent === "o") {

        btnPosition1.classList.toggle('lose');
        btnPosition2.classList.toggle('lose');
        btnPosition3.classList.toggle('win');
        btnPosition4.classList.toggle('lose');
        btnPosition5.classList.toggle('win');
        btnPosition6.classList.toggle('lose');
        btnPosition7.classList.toggle('win');
        btnPosition8.classList.toggle('lose');
        btnPosition9.classList.toggle('lose');
        updateScore(btnPosition7.textContent);
        return true;
    }
}


function validationGameFinished(a) {
    if ((btnPosition1.textContent !== ""
        && btnPosition2.textContent !== ""
        && btnPosition3.textContent !== ""
        && btnPosition4.textContent !== ""
        && btnPosition5.textContent !== ""
        && btnPosition6.textContent !== ""
        && btnPosition7.textContent !== ""
        && btnPosition8.textContent !== ""
        && btnPosition9.textContent !== "")
        ? true
        : false) {
        updateScore("");
        cleanBoard();
    }

}

//----------------------Btn Listeners------------------
btnPosition1.addEventListener('click', () => {
    if (winGame) {
        cleanBoard();
    }
    else if (btnPosition1.textContent === "") {
        btnPosition1.innerHTML = gameTurn();
        winGame = validationWinGame();
    } else {
        validationGameFinished();
    }
});


btnPosition2.addEventListener('click', () => {
    if (winGame) {
        cleanBoard();
    }
    else if (btnPosition2.textContent === "") {
        btnPosition2.innerHTML = gameTurn();
        winGame = validationWinGame();
    } else {
        validationGameFinished();
    }
});


btnPosition3.addEventListener('click', () => {
    if (winGame) {
        cleanBoard();
    }
    else if (btnPosition3.textContent === "") {
        btnPosition3.innerHTML = gameTurn();
        winGame = validationWinGame();
    } else {
        validationGameFinished();
    }
});


btnPosition4.addEventListener('click', () => {
    if (winGame) {
        cleanBoard();
    }
    else if (btnPosition4.textContent === "") {
        btnPosition4.innerHTML = gameTurn();
        winGame = validationWinGame();
    } else {
        validationGameFinished();
    }
});


btnPosition5.addEventListener('click', () => {
    if (winGame) {
        cleanBoard();
    }
    else if (btnPosition5.textContent === "") {
        btnPosition5.innerHTML = gameTurn();
        winGame = validationWinGame();
    } else {
        validationGameFinished();
    }
});


btnPosition6.addEventListener('click', () => {
    if (winGame) {
        cleanBoard();
    }
    else if (btnPosition6.textContent === "") {
        btnPosition6.innerHTML = gameTurn();
        winGame = validationWinGame();
    } else {
        validationGameFinished();
    }
});


btnPosition7.addEventListener('click', () => {
    if (winGame) {
        cleanBoard();
    }
    else if (btnPosition7.textContent === "") {
        btnPosition7.innerHTML = gameTurn();
        winGame = validationWinGame();
    } else {
        validationGameFinished();
    }
});


btnPosition8.addEventListener('click', () => {
    if (winGame) {
        cleanBoard();
    }
    else if (btnPosition8.textContent === "") {
        btnPosition8.innerHTML = gameTurn();
        winGame = validationWinGame();
    } else {
        validationGameFinished();
    }
});


btnPosition9.addEventListener('click', () => {
    if (winGame) {
        cleanBoard();
    }
    else if (btnPosition9.textContent === "") {
        btnPosition9.innerHTML = gameTurn();
        winGame = validationWinGame();
    } else {
        validationGameFinished();
    }
});
