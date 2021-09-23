const btnSwitch= document.getElementById("switch");

btnSwitch.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    //asi se guarda el modo en localstorage

    if(document.body.classList.contains('dark')){
        //el primer parametro es el nombre del local storage y el segundo su valor
        localStorage.setItem('dark-mode',true);
    }else{
        localStorage.setItem('dark-mode',false);
    }
});


//btenemos el modo actual
if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');

}else{
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}