const formulario = document.getElementById('formulario');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');

formulario.addEventListener('submit', async(e) => {
    e.preventDefault();

    const respuesta = await fetch('https://sheet.best/api/sheets/8152e026-aacf-4dd7-abdb-895f77d92d7e', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Nombre": formulario.nombre.value,
            "Correo": formulario.correo.value,
            "Telefono": formulario.telefono.value,
        })

    });

    const contenido = await respuesta.json();
    console.log(contenido);

    registro.classList.remove('activo');
    exito.classList.add('activo');
});
       

