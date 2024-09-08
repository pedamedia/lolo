
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

    const info = new FormData(this);

    const usuario_var = document.getElementById('idusuario').value;
    const clave_var = document.getElementById('idclave').value;
    const correo_var = document.getElementById('idcorreo').value;

    url ='http://localhost:5000'

    try {
        const response = await fetch(url+'/solicitud', 
        {
            /*
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(
                { usuario: usuario_var, 
                    clave: clave_var, 
                    correo: correo_var, 

                }),

            */
            method: 'POST',
            body: info
        });

        //const resultado_json = await response.json();
        //const resultado = resultado_json.data;

        //const resultado = await response.formData();

        const resultado = await response.text();

        document.getElementById('idrespuesta').innerText = resultado;

        /*
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
        */
        
        console.log("Esta es la respuesta: "+resultado);
    } catch (error) {
        console.error('Error:', error);
    }

    //this.submit();


}

//------------------------------------------------------------------------------

function ejecutar_al_cargar(){

    document.getElementById('formulario').onsubmit = ejecutar;
    //document.getElementById('dataForm').addEventListener('submit',ejecutar);

    console.log("si está funcionando")
}


window.onload = ejecutar_al_cargar;