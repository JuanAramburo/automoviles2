var alumnos = [ 
    { 
        "matricula": "100",
        "nombre": "Josepez",
        "domicilio" : "Mazatlan",
        "sexo" : "M",
        "especialidad" : "Programacion"
    },
    {
        "matricula" : "101",
        "nombre": "Maria Feliza",
        "domicilio" : "Culiacan",
        "sexo" : "F",
        "especialidad" : "Base de Datos"
    },
    {
        "matricula" : "102",
        "nombre" : "Luis Acosta",
        "domicilio" : "Los Mochis",
        "sexo" : "M",
        "especialidad" : "Programacion"
    }
]

const btnAgregar = document.getElementById("btnAgregar");
const btnLimpiar = document.getElementById("btnLimpiar");
const btnBuscar = document.getElementById("btnBuscar");
const labelError = document.getElementById("error");

function buscar(){
    const matricula = document.getElementById("matricula").value;

    //validar
    if(!matricula){
        labelError.textContent="Falto capturar Matricula";
        return;
    }

    let encontrado = false;

    for(let con = 0; con < alumnos.length; ++con){
        if(matricula == alumnos[con].matricula){
            document.getElementById("nombre").value = alumnos[con].nombre;
            document.getElementById("domicilio").value = alumnos[con].domicilio;
            document.getElementById("cmbsexo").value = alumnos[con].sexo;
            document.getElementById("especialidad").value = alumnos[con].especialidad;
            labelError.textContent = "";
            encontrado = true;
            break;
        }
    }
    
    if(!encontrado){
        labelError.textContent = "No se encontró";
    }
}

// función Mostrar
function mostrar(){
    let lista = document.getElementById("tabla");
    const datos = lista.querySelector("tbody");
    datos.innerHTML = "";

    for(let con = 0; con < alumnos.length; ++con){
        datos.innerHTML += 
            alumnos[con].matricula + " : " + 
            alumnos[con].nombre + " | " + 
            alumnos[con].domicilio + " | " + 
            alumnos[con].sexo + " | " +
            alumnos[con].especialidad + "<br>";
    }
}

function agregar(){
    const nuevo = {
        matricula: document.getElementById("matricula").value.toString(),
        nombre: document.getElementById("nombre").value.toString(),
        domicilio: document.getElementById("domicilio").value.toString(),
        sexo: document.getElementById("cmbsexo").value.toString(),
        especialidad: document.getElementById("especialidad").value.toString()
    }
    
    alumnos.push(nuevo);
    
    mostrar();

    if(!matricula || !nombre || !domicilio || !sexo || !especialidad){
        labelError.textContent="Falto captura algun dato";
        return;
    }
}



function limpiar(){
    const datos = document.getElementById("tabla");
    datos.innerHTML = "";
    document.getElementById("matricula").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("domicilio").value = "";
    document.getElementById("especialidad").value = "";
    labelError.textContent="";
}

btnAgregar.addEventListener('click', agregar);
btnLimpiar.addEventListener('click', limpiar);
btnBuscar.addEventListener('click', buscar);