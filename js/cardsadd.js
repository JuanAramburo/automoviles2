window.addEventListener("DOMContentLoaded", async (event) => {
    await crearCards();
    crearFooter();
});

async function crearCards() {
    try{
        const response = await fetch("/js/automoviles.json");
        const data = await response.json();
        const section = document.createElement("section");
        section.className = "contenedorflexAIC";

        const marcas = {};
        data.forEach(item => {
            if (!marcas[item.marca]) {
                marcas[item.marca] = [];
            }
            marcas[item.marca].push(item);
        });

        for (const marca in marcas) {
            const marcaContainer = document.createElement("div");
            marcaContainer.className = "marca-container";
            marcaContainer.id = marca.toLowerCase();

            const tituloMarca = document.createElement("h2");
            tituloMarca.className = `titulo-${marca.toLowerCase()}`;
            tituloMarca.textContent = marca;
            marcaContainer.appendChild(tituloMarca);

            const cardsContainer = document.createElement("div");
            cardsContainer.className = "cards-container";

            marcas[marca].forEach(car => {
                const item = document.createElement("div");
                item.className = "card";

                const cardImg = document.createElement("img");
                cardImg.src = car.imagen;
                cardImg.alt = car.modelo;
                cardImg.width = "100%";
                item.appendChild(cardImg);

                const cardH1 = document.createElement("h1");
                cardH1.textContent = car.modelo;
                item.appendChild(cardH1);

                const cardP = document.createElement("p");
                cardP.className = "texto";
                cardP.textContent = car.descripcion;
                item.appendChild(cardP);

                const cardBtn = document.createElement("button");
                cardBtn.textContent = car.mas;
                item.appendChild(cardBtn);

                cardsContainer.appendChild(item);
            });

            marcaContainer.appendChild(cardsContainer);
            section.appendChild(marcaContainer);
        }

        document.body.appendChild(section);
    }catch(error){
        console.error("Error al cargar datos", error);
    }
}
function crearFooter() {
    const footer = document.createElement("footer");
    footer.id = "pie";

    const footerText = document.createElement("h4");
    footerText.textContent = "Todos los derechos reservados por Juan Ramon Aramburo Osuna";

    footer.appendChild(footerText);
    document.body.appendChild(footer);
}
