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

//Cotizacion
const btnCalcular3 = document.getElementById("btnCalcular3");
const btnLimpiar3 = document.getElementById("btnLimpiar3");
const labelError3 = document.getElementById("error3");

function calcular2(){
    const opcion2 = document.getElementById("autoOpcion").value;
    let val = document.getElementById("idValorAuto").value;
    labelError3.textContent="";
    
    let opc2 = parseFloat(opcion2);
    let totalfin = 0;
    let pagomensual = 0;

    //validar
    if(!val){
        labelError3.textContent="Inserta el valor del automovil";
    }
    else{
        let enganche = val * 0.3;
        document.getElementById("idEnganche").value = enganche;
        let totalen = val - enganche;
        switch(opc2){
            case 1: totalfin = (val * 0.125) + totalen; break;
            case 2: totalfin = (val * 0.172) + totalen;break;
            case 3: totalfin = (val * 0.21) + totalen;break;
            case 4: totalfin = (val * 0.26) + totalen;break;
            case 5: totalfin = (val * 0.45) + totalen;break;
        }
        document.getElementById("idFinanciar").value = totalfin;
        switch(opc2){
            case 1: pagomensual = totalfin / 12;break;
            case 2: pagomensual = totalfin / 18;break;
            case 3: pagomensual = totalfin / 24;break;
            case 4: pagomensual = totalfin / 36;break;
            case 5: pagomensual = totalfin / 48;break;
        }
        document.getElementById("idMensual").value = pagomensual.toFixed(2);
    }
};

function limpiar3(){
    document.getElementById("idValorAuto").value = "";
    document.getElementById("idEnganche").value = "";
    document.getElementById("idFinanciar").value = "";
    document.getElementById("idMensual").value = "";
    labelError.textContent="";
}

btnCalcular3.addEventListener('click', calcular2);
btnLimpiar3.addEventListener('click', limpiar3);

