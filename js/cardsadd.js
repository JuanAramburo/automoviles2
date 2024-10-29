var data =[
    {
        "marca":"Toyota",
        "modelo":"Yaris 2024",
        "imagen":"/img/toyota1.jpg",
        "descripcion":"4 puerta automatico 240,000",
        "mas":"Mas informacion"
    },{
        "marca":"Toyota",
        "modelo":"Corolla 2024",
        "imagen":"/img/toyota2.jpg",
        "descripcion":"4 puerta automatico 300,000",
        "mas":"Mas informacion"
    },{
        "marca":"Toyota",
        "modelo":"Tacoma",
        "imagen":"/img/toyota3.jpg",
        "descripcion":"Camioneta 4x4 automatica 780,000",
        "mas":"Mas informacion"
    }
]

window.addEventListener("DOMContentLoaded", (event) => {
    crearCards();
});

function crearCards(){
    const section = document.createElement("section")
    section.className = "contenedorflexAIC";
    for(con=0;con<data.length;++con){
        const item = document.createElement("div")
        item.className="card";

        const cardImag = document.createElement("img");
        cardImag.src = data[con].imagen;
        cardImag.alt = data[con].modelo;
        cardImag.width = "100%";
        item.appendChild(cardImag);

        const cardh1 = document.createElement("h1");
        cardh1.textContent = data[con].marca;
        item.appendChild(cardh1);

        const cardP = document.createElement("p");
        cardP.className = "texto";
        cardP.textContent = data[con].descripcion;
        item.appendChild(cardP);

        const cardBtn = document.createElement("button");
        cardBtn.textContent = data[con].mas;
        item.appendChild(cardBtn);

        section.appendChild(item);
    }
    document.body.appendChild(section);
}