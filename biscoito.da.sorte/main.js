//variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const firstBtn = document.querySelector("#firstBtn")
const secondBtn = document.querySelector("#secondBtn")

//eventos
firstBtn.addEventListener('click', firstPage)
secondBtn.addEventListener('click', secondPage)

//funções
  function firstPage (event){
    event.preventDefault();
    toggleScreen ()
  }

  function secondPage (event){
    event.preventDefault();
    toggleScreen ()
  }

  function toggleScreen (){
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
  }
