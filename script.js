const switchButton = document.getElementById("switch");
const body = document.getElementById("body");
const button = document.getElementById("button12");


function lightMode(){
    switchButton.style.background = "#333"
    body.classList.add("light");
    button.classList.add("move");
    document.body.style.background = "beige";
    switchButton.querySelector('i.fa-solid').classList.remove('fa-sun');
    switchButton.querySelector('i.fa-solid').classList.add('fa-moon');
  
}

function darkMode(){
    switchButton.style.background = "beige"
    body.classList.remove("light");
    button.classList.remove("move");
    document.body.style.background = "#333";
    switchButton.querySelector('i.fa-solid').classList.remove('fa-moon');
    switchButton.querySelector('i.fa-solid').classList.add('fa-sun');
  
}




switchButton.addEventListener('click',()=>{
   const containsLight = body.classList.contains('light');
    if(containsLight){
        darkMode()
    }else{
        lightMode()
    }
});