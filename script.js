const contenedor = document.getElementById("contenedor-servicios");
const buscador = document.getElementById("buscar");


// DATOS DIRECTOS CON TUS IMÁGENES
const servicios = [

    {
        id: 1,
        nombre: "Control de medicamentos",
        categoria: "Salud",
        descripcion: "Registro y seguimiento de medicamentos.",
        responsable: "Personal de enfermería",
        imagen: "imagenes/controldemedicamentos.jpg"
    },

    {
        id: 2,
        nombre: "Terapia física",
        categoria: "Rehabilitación",
        descripcion: "Ejercicios para mejorar movilidad.",
        responsable: "Fisioterapeuta",
        imagen: "imagenes/terapiafisica.jpg"
    },

    {
        id: 3,
        nombre: "Alimentación balanceada",
        categoria: "Nutrición",
        descripcion: "Plan alimenticio saludable.",
        responsable: "Nutricionista",
        imagen: "imagenes/alimentacionbalanciada.jpg"
    },

    {
        id: 4,
        nombre: "Actividades recreativas",
        categoria: "Recreación",
        descripcion: "Juegos y actividades grupales.",
        responsable: "Personal recreativo",
        imagen: "imagenes/actividadesrecreativas.jpg"
    },

    {
        id: 5,
        nombre: "Atención psicológica",
        categoria: "Salud emocional",
        descripcion: "Apoyo emocional y psicológico.",
        responsable: "Psicólogo",
        imagen: "imagenes/atencionpsicologica.jpg"
    },

    {
        id: 6,
        nombre: "Consulta médica",
        categoria: "Salud",
        descripcion: "Chequeos médicos periódicos.",
        responsable: "Médico general",
        imagen: "imagenes/consultamedica.jpg"
    }
];


// MOSTRAR SERVICIOS
function mostrarServicios(lista) {

    contenedor.innerHTML = "";

    if (lista.length === 0) {
        contenedor.innerHTML = `
            <p class="sin-resultados">No se encontraron servicios</p>
        `;
        return;
    }

    lista.forEach(servicio => {

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        tarjeta.innerHTML = `
            <img src="${servicio.imagen}" alt="${servicio.nombre}">

            <div class="contenido">

                <h2>${servicio.nombre}</h2>

                <p><strong>Categoría:</strong> ${servicio.categoria}</p>

                <p>${servicio.descripcion}</p>

                <p><strong>Responsable:</strong> ${servicio.responsable}</p>

                <button onclick="verDetalle(${servicio.id})">
                    Ver detalle
                </button>

            </div>
        `;

        contenedor.appendChild(tarjeta);
    });
}


// DETALLE
function verDetalle(id) {

    const servicio = servicios.find(s => s.id === id);

    alert(
        "DETALLE DEL SERVICIO\n\n" +
        "Nombre: " + servicio.nombre + "\n" +
        "Categoría: " + servicio.categoria + "\n" +
        "Descripción: " + servicio.descripcion + "\n" +
        "Responsable: " + servicio.responsable
    );
}


// BUSCADOR
buscador.addEventListener("input", () => {

    const texto = buscador.value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    const filtrados = servicios.filter(servicio => {

        const nombre = servicio.nombre
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        const categoria = servicio.categoria
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        return nombre.includes(texto) || categoria.includes(texto);
    });

    mostrarServicios(filtrados);
});


// INICIAR
mostrarServicios(servicios);