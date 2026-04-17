var data = {};

async function obtenerDatos() {
    try {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        const response = await fetch("https://dragonball-api.com/api/characters", requestOptions);

        if (!response.ok) {
            throw new Error('Error en la peticion');
        }

        data = await response.json();

    } catch (error) {
        console.error('Error:', error);
    }
}

obtenerDatos();

setTimeout(() => {

    let tabla_header = `
        <table border='1'>
            <tr>
                <td>#</td>
                <td>Nombre</td>
                <td>Imagen</td>
            </tr>
    `;

    let table_footer = `</table>`;

    let table_body = '';

    data.items.forEach((element, index) => {

        table_body += `
            <tr>
                <td>${index + 1}</td>
                <td>${element.name}</td>
                <td>
                    <img src="${element.image}" width="100">
                </td>
            </tr>
        `;
    });

    let resultado = tabla_header + table_body + table_footer;

    document.getElementById("resultado").innerHTML = resultado;

}, 1500);