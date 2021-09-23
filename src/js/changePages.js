const btnPlayerOne=document.getElementById("button-one-player");
const btnPlayerTwo=document.getElementById("button-two-player");
const btnBack=document.getElementById("button-back-id");

let typeOfGame=0;
//------Buttons 
if(btnPlayerOne !== null && btnPlayerTwo !==null){
    btnPlayerOne.addEventListener('click',()=>{
        this.window.close();
        window.open("../html/game.html");
        typeOfGame=1;
    });
    
    btnPlayerTwo.addEventListener('click',()=>{
        this.window.close();
        window.open("../html/game.html");
        typeOfGame=2;
    });
}else{
    btnBack.addEventListener('click',()=>{
        this.window.close();
        window.open("../html/index.html");
        typeOfGame=0;
    });
}