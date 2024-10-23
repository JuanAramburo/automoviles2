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

// función Mostrar
function mostrar(){
    let lista = document.getElementById("lista");
    lista.innerHTML = "";
    const error = document.getElementById("error");

    for(let con = 0; con < alumnos.length; ++con){
        lista.innerHTML += 
            alumnos[con].matricula + " : " + 
            alumnos[con].nombre + " | " + 
            alumnos[con].domicilio + " | " + 
            alumnos[con].sexo + " | " + 
            alumnos[con].especialidad + "<br>";


    }
}

const btnAgregar = document.getElementById("btnAgregar");
const btnLimpiar = document.getElementById("btnLimpiar");

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
}

function limpiar(){
    const lista = document.getElementById("lista");
    lista.innerHTML = "";
    document.getElementById("matricula").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("domicilio").value = "";
    document.getElementById("especialidad").value = "";
}

btnAgregar.addEventListener('click', agregar);
btnLimpiar.addEventListener('click', limpiar);