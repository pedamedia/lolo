
let imagen;

let texto="";

const url ='https://lolo-piso.onrender.com'

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

if (nuevoTexto) {
    texto = nuevoTexto;
}


async function otro(event){

    event.preventDefault();
    const carga = document.getElementById('carga');
    const iframe = document.getElementById('pdf-viewer');

    carga.style.display = 'block';
    iframe.style.display = "none";

    const info2 = new FormData(this);

    try {
        const response = await fetch(url+'/otro', 
        {
            method: 'POST',
            body: info2
        });


        const resultado = await response.blob();  // Convertir la respuesta en un Blob
        const archivo_url = URL.createObjectURL(resultado);  // Crear una URL para el Blob

        iframe.src = archivo_url;  // Establecer el src del iframe
        iframe.style.display = 'block';  // Mostrar el iframe
        carga.style.display = 'none';

        document.getElementById('idrespuesta').innerText = resultado;
        
        console.log("Esta es la respuesta: "+resultado);
    } catch (error) {
        console.error('Error:', error);
    }

}

async function recibir(){

    try {
        const response = await fetch(url+'/recepcion'); // Solicitar el archivo PDF al backend

        const blob = await response.blob();  // Convertir la respuesta en un Blob
        const archivo_url = URL.createObjectURL(blob);  // Crear una URL para el Blob
        const iframe = document.getElementById('pdf-viewer');
        const carga = document.getElementById('carga');
        iframe.src = archivo_url+"#toolbar=0";  // Establecer el src del iframe
        iframe.style.display = 'block';  // Mostrar el iframe
        carga.style.display = 'none';
    } catch (error) {
        console.error('Error al obtener el PDF:', error);
    }

    /*
    fetch(url+'/recepcion')
    .then(response => response.blob())  // Convertir la respuesta en un Blob
    .then(blob => {
        const archivo = URL.createObjectURL(blob);  // Crear una URL para el Blob
        const iframe = document.getElementById('pdf-viewer');
        iframe.src = archivo;  // Establecer el src del iframe
        iframe.style.display = 'block';  // Mostrar el iframe
    })
    .catch(error => console.error('Error al obtener el PDF:', error));
    */
}

//------------------------------------------------------------------------------

function ejecutar_al_cargar(){
    
    //document.addEventListener('contextmenu', event => event.preventDefault());

    const visualizador = document.getElementById('pdf-viewer');
    

    document.getElementById('formulario').onsubmit = ejecutar;
    document.getElementById('formulario2').onsubmit = otro;
    //document.getElementById('dataForm').addEventListener('submit',ejecutar);

    let primera = document.getElementById('idmostrar1');
    let segunda = document.getElementById('idmostrar2');

    let seccion1 = document.getElementById('idsection1');
    let seccion2 = document.getElementById('idsection2');

    seccion1.style.display = "block"
    seccion2.style.display = "none"

    primera.addEventListener('click', function() {
        // Mostrar sección 1 y ocultar sección 2
        seccion1.style.display = "block"
        seccion2.style.display = "none"

        console.log("llega primera")
    });
    
    segunda.addEventListener('click', function() {
        // Mostrar sección 2 y ocultar sección 1
        seccion2.style.display = "block"
        seccion1.style.display = "none"
        
        console.log("llega segunda")
    });

    console.log("INICIO")



}

function handleClick() {
    alert('Haz hecho clic en el elemento LI');

    console.log("si entra")
}


window.onload = ejecutar_al_cargar;
