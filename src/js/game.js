const labelPlayer2 = document.querySelector(".Player2");
const labelPlayer1Points = document.querySelector(".Player1-points");
const labeltiePoints = document.querySelector(".tie-points");
const labelPlayer2Points = document.querySelector(".Player2-points");
const labelTitleTurn = document.querySelector(".title-turn");

let contPonitsPlayer1 = parseInt(labelPlayer1Points.textContent);
let contPonitstie = parseInt(labeltiePoints.textContent);
let contPonitsPlayer2 = parseInt(labelPlayer2Points.textContent);

let secondPlayer = undefined;

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
let typeOfgame = localStorage.getItem('typeOfgame');

//---------------------Game mode
function modeGame() {
    if (typeOfgame === "1") {
        secondPlayer = "Computer"
        labelPlayer2.innerHTML = "PC(o)";
        labelPlayer2.style.marginLeft = '3.8rem';
        labelPlayer2.style.transition = 'none';
    } else if (typeOfgame === "2") {
        secondPlayer = "Player Two"
        labelPlayer2.innerHTML = "Player Two(o)";
    }
}
modeGame();

//---------------------------------Game
function gameTurn() {
    if (turn === 1) {
        if (typeOfgame === '2') labelTitleTurn.innerHTML = secondPlayer;
        turn = 2;
        return "x";
    } else {
        turn = 1;
        if (typeOfgame === '2') {
            labelTitleTurn.innerHTML = "Player One";
            return "o";
        } else {
            console.log("jajaj");
            playPC();
        }
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

function playPC() {
    let turnPc = false;
    do {
        let randomNum = Math.floor(Math.random() * 9);
        if (listBtn[randomNum].textContent === "") {
            window.setTimeout(() => {
                listBtn[randomNum].innerHTML = "o";
                winGame=validationWinGame();
            }, 100);
            break;
        } else {
            turnPc = true;
        }
    } while (turnPc === true)
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


function validationGameFinished() {
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
        if (typeOfgame === '2') {
            updateScore("");
            cleanBoard();
        }
        return true;
    } else {
        return false
    }

}

function gameTwoPlayer(i) {
    if (winGame) {
        cleanBoard();
    } else if (listBtn[i].textContent === "") {
        listBtn[i].innerHTML = gameTurn();
        winGame = validationWinGame();
    } else {
        validationGameFinished();
    }
}
function gameOnePlayer(i) {
    if(winGame){
        cleanBoard();
    }
    else if (validationGameFinished()) {
        updateScore("");
        cleanBoard();
    }
    else if (listBtn[i].textContent === "") {
        listBtn[i].innerHTML = "x";
        winGame=validationWinGame();
        if (validationGameFinished() === false && !winGame) {
            playPC();
        }
    }
}
//----------------------Btn Listeners------------------

btnPosition1.addEventListener('click', () => { (typeOfgame === '2') ? gameTwoPlayer(0) : gameOnePlayer(0); });
btnPosition2.addEventListener('click', () => { (typeOfgame === '2') ? gameTwoPlayer(1) : gameOnePlayer(1); });
btnPosition3.addEventListener('click', () => { (typeOfgame === '2') ? gameTwoPlayer(2) : gameOnePlayer(2); });
btnPosition4.addEventListener('click', () => { (typeOfgame === '2') ? gameTwoPlayer(3) : gameOnePlayer(3); });
btnPosition5.addEventListener('click', () => { (typeOfgame === '2') ? gameTwoPlayer(4) : gameOnePlayer(4); });
btnPosition6.addEventListener('click', () => { (typeOfgame === '2') ? gameTwoPlayer(5) : gameOnePlayer(5); });
btnPosition7.addEventListener('click', () => { (typeOfgame === '2') ? gameTwoPlayer(6) : gameOnePlayer(6); });
btnPosition8.addEventListener('click', () => { (typeOfgame === '2') ? gameTwoPlayer(7) : gameOnePlayer(7); });
btnPosition9.addEventListener('click', () => { (typeOfgame === '2') ? gameTwoPlayer(9) : gameOnePlayer(8); });
