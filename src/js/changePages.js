const btnPlayerOne=document.getElementById("button-one-player");
const btnPlayerTwo=document.getElementById("button-two-player");
const btnBack=document.getElementById("button-back-id");

//--------Cambiar la pantalla
if(btnPlayerOne !== null && btnPlayerTwo !==null){
    btnPlayerOne.addEventListener('click',()=>{
        localStorage.setItem('typeOfgame',1);
        window.open("./src/html/game.html");
        window.close();
    });
    
    btnPlayerTwo.addEventListener('click',()=>{
        localStorage.setItem('typeOfgame',2);
        this.window.close();
        window.open("./src/html/game.html");
    });
}else{
    btnBack.addEventListener('click',()=>{
        localStorage.setItem('typeOfgame',0);
        this.window.close();
        window.open("../../index.html");
    });
}

