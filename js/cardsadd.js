window.addEventListener("DOMContentLoaded", (event) => {
    crearCards();
});

async  function crearCards(){

    try{
        const response = await fetch("/js/cardsADD.json");
        const data = await response.json();

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
    }catch(error){
        console.error("Error al cargar datos",error);
    }
}