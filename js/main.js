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




//Operaciones Aritmeticas
const btnCalcular2 = document.getElementById("btnCalcular2");
const btnLimpiar2 = document.getElementById("btnLimpiar2");
const labelError2 = document.getElementById("error2");

btnCalcular2.addEventListener('click', function calcular(){
    const opcion = document.getElementById("idOpcion").value;
    const idNumero1 = document.getElementById("idNumero1").value;
    const idNumero2 = document.getElementById("idNumero2").value;
    labelError2.textContent="";


    let res=0;
    let num1 = parseInt(idNumero1);
    let num2 = parseInt(idNumero2);
    let opc = parseInt(opcion);

    //validar
    if(!num1 || !num2){
        labelError2.textContent="Falto capturar algun numero";
    }

    switch(opc){
        case 1: res = num1+num2;break;
        case 2: res = num1-num2;break;
        case 3: res = num1*num2;break;
        case 4: res = num1/num2;break;
    }

    document.getElementById("idResultado").value = res;

});

btnLimpiar2.addEventListener('click', function limpiar2(){
    document.getElementById("idNumero1").value = "";
    document.getElementById("idNumero2").value = "";
    document.getElementById("idResultado").value = "";
    labelError2.textContent="";
});
