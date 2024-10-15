// variables
const parrafo = document.getElementById("parrafo");
const btnCalcular = document.getElementById("btnCalcular");
const btnLimpiar = document.getElementById("btnLimpiar");
const labelError = document.getElementById("error");

// funciones

function calcularIMC(){
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    labelError.textContent="";
    //validar
    if(!peso || !altura){
        labelError.textContent="Falto capturar el peso o altura";
    }
    else{
        let imc = peso / (altura*altura);
        document.getElementById("resultado").value = imc;
    }
}

function limpiar(){
    document.getElementById("resultado").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    labelError.textContent="";
}

function cambiar(){
    parrafo.style.color="blue";
    parrafo.style.fontSize="40px";
    parrafo.style.alignContent="center";
}

function normal(){
    parrafo.style.color="black";
    parrafo.style.fontSize="20px";
}

// codificar los eventos del parrafo
parrafo.addEventListener('mouseover',cambiar);
parrafo.addEventListener('mouseleave', normal);
btnCalcular.addEventListener('click',calcularIMC);
btnLimpiar.addEventListener('click',limpiar);