// Consegir los elementos

const reloj = document.getElementById("clock");
const NumerosConten = document.getElementById("numeros");

// posicion de los numeros

function NumberPosition(numero, index){

    //calcula el diametro
    let angulo = (Math.PI / 180) * (90 - (index * 30));// calcula el diametro y lo pone un poco mas pequeño
    let diametro = reloj.clientWidth * 0.8;

    // Para calcular la posicion
    let x = Math.cos(angulo) * (diametro/2);
    let y = Math.sin(angulo) * (diametro/2);

    // Mover los numeros con un transform
    numero.style.transform = `translate(calc(-50% - ${-x}px), calc(-50% - ${y}px))`
}


//Agregar los numeros

for (let i = 1; i <= 12; i++) {
    //crea los elementos y lo guarda
    let numero = document.createElement("span");

    NumberPosition(numero, i);

    //guarda el numero
    numero.textContent = i;
    //inserta un elemento en una etiqueta
    NumerosConten.appendChild(numero);
}

window.onresize = function(){

    //childNodes toma todos los hijos de un elemento y los pone en un array
    NumerosConten.childNodes.forEach(element => {
        NumberPosition(element, parseInt(element.textContent)); //parseInt para volver un texto a numero
        
    });
}

//  Segundero
const ManSegundos = document.getElementById("segundos");
//  Minutero
const ManMinutos = document.getElementById("minutos");
//  Hora
const ManHoras = document.getElementById("horas");

//Actializar fecha

function antualizarHora(){
    const date = new Date();

    const segundos = date.getSeconds();
    const minutos = date.getMinutes();
    const horas = date.getHours();

    const anguloSegundos = (segundos * 6) + 180
    const anguloMinutos = (minutos * 6) + (segundos / 10) + 180
    const anguloHoras = (horas * 30) + (minutos /2)  + 180

    ManSegundos.style.transform = `rotate(${anguloSegundos}deg)`
    ManMinutos.style.transform = `rotate(${anguloMinutos}deg)`
    ManHoras.style.transform = `rotate(${anguloHoras}deg)`
}

antualizarHora();
setInterval(antualizarHora,500)

function mood(){
    const body = document.getElementById("body");

    body.classList.toggle("dark")
}
