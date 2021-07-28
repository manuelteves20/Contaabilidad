let slider = document.querySelector(".slider")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 4;
let width = sliderIndividual[0].clientWidth;
let intervalo = 8000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);



function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform 1.5s";
    contador=contador+4;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=4;
        },1500)
    }
}