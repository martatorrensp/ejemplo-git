const navegacion = document.querySelector("nav")
const botones = document.querySelectorAll(".abrir,.cerrar");


botones[0].addEventListener("click", function(){
    navegacion.className = "desplegado"
})

botones[1].addEventListener("click", function(){
    navegacion.className = ""
})

for(let i = 0; i < botones.length; i++){
    botones[i].addEventListener("click", function(){
    navegacion.className = i == 0 ? "desplegado" : ""
    })
}