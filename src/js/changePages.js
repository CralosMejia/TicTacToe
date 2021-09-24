const btnPlayerOne=document.getElementById("button-one-player");
const btnPlayerTwo=document.getElementById("button-two-player");
const btnBack=document.getElementById("button-back-id");
const labelPlayer2=document.querySelector(".Player2");

//-----------------Functions
function clickXo(){
    console.log(this+'hola');
}

function modeGame(){
    if(typeOfGame===1){
        labelPlayer2.innerHTML="Player Two(o)";
    }else if(typeOfGame === 2){
        labelPlayer2.innerHTML="PC(o)";
    }
}
//--------Cambiar la pantalla
if(btnPlayerOne !== null && btnPlayerTwo !==null){
    btnPlayerOne.addEventListener('click',()=>{
        typeOfGame=1;
        debugger;
        window.open("../html/game.html");
        window.close();
        modeGame();
    });
    
    btnPlayerTwo.addEventListener('click',()=>{
        typeOfGame=2;
        this.window.close();
        window.open("../html/game.html");
        modeGame();
    });
}else{
    btnBack.addEventListener('click',()=>{
        this.window.close();
        window.open("../html/index.html");
        typeOfGame=0;
    });
}

//listeners botones xo
