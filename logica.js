
let imagen;

let texto="";

const params = new URLSearchParams(window.location.search);
const nuevoTexto = params.get('texto');

// Si el parámetro "texto" existe en la URL, cambiar el valor de la variable
if (nuevoTexto) {
    texto = nuevoTexto;
}


async function ejecutar(event){

    event.preventDefault();

    const usuario_var = document.getElementById('idusuario').value;
    const clave_var = document.getElementById('idclave').value;
    const correo_var = document.getElementById('idcorreo').value;

    url ='https://lolo-piso.onrender.com'

    try {
        const response = await fetch(url+'/data', 
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(
                { usuario: usuario_var, 
                    clave: clave_var, 
                    correo: correo_var, 

                }),
        });

        const resultado = await response.json();

        if (Array.isArray(resultado)) {

            resultado.forEach(item => {
                console.log('Elemento de la lista:', item);
            // Puedes hacer algo con cada `item`, como agregarlo a la interfaz de usuario
        });

        document.getElementById('idrespuesta').innerText = "Tu nombre es: "+resultado[0]+
                                                            "\ntu clave es: "+resultado[1]+
                                                            "\ntu correo es: "+resultado[2];
        } else {
            console.error('La respuesta no es una lista.');
        }
        
        console.log("Esta es la respuesta: "+resultado);
    } catch (error) {
        console.error('Error:', error);
    }

}




function ejecutar_al_cargar(){

    document.getElementById('formulario').onsubmit = ejecutar;
    //document.getElementById('dataForm').addEventListener('submit',ejecutar);

    console.log("si está funcionando")
}


window.onload = ejecutar_al_cargar;
