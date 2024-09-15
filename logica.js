
let imagen;

let texto="";

const url ="https://lolo-piso.onrender.com"

const params = new URLSearchParams(window.location.search);
const nuevoTexto = params.get('texto');

// Si el parámetro "texto" existe en la URL, cambiar el valor de la variable
if (nuevoTexto) {
    texto = nuevoTexto;
}

async function carga(){

    try {
        const response = await fetch(url+'/carga');

        const resultado = await response.text();

        console.log(resultado)

    } catch (error) {
        console.error('Error al cargar: ', error);
    }
}


async function ejecutar(event){

    event.preventDefault();

    const info = new FormData(this);

    const nombre_var = document.getElementById('idnombre');
    const correo_var = document.getElementById('idcorreo');
    const programa_var = document.getElementById('idprograma');

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
    /*
        nombre_var.value = "";
        correo_var.value = "";
        programa_var.value = "";
        */

        alert("ENVÍO DE FORMULARIO\n¡¡¡EXITOSO!!!");    
        console.log("Esta es la respuesta: "+resultado);
    } catch (error) {
        console.error('Error:', error);
    }

    this.reset();
}

if (nuevoTexto) {
    texto = nuevoTexto;
}


async function fun_obtencion(event){

    event.preventDefault();
    const carga = document.getElementById('carga');
    const iframe = document.getElementById('pdf-viewer');

    carga.style.display = 'block';
    iframe.style.display = "none";

    const info2 = new FormData(this);

    try {
        const response = await fetch(url+'/obtencion', 
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

async function ingreso(event){

    event.preventDefault();

    const info= new FormData(this);

    try {
        const response = await fetch(url+'/inicio', 
        {
            method: 'POST',
            body: info
        });

        const resultado = await response.text(); 
        console.log(resultado);

        const inicio = document.getElementById('idinicio')
        const principal = document.getElementById('idprincipal')

        if(resultado == "si"){
            inicio.style.display = "none";
            principal.style.display = "block";
        }else{
            alert("CLAVE O USUARIO\nINCORRECTAS")
        }
        
       
    } catch (error) {
        console.error('Error:', error);
    }
}

//------------------------------------------------------------------------------

function ejecutar_al_cargar(){

    carga();
    
    //document.addEventListener('contextmenu', event => event.preventDefault());

    const visualizador = document.getElementById('pdf-viewer');
    
    document.getElementById('formulario').onsubmit = ejecutar;
    document.getElementById('formulario2').onsubmit = fun_obtencion;
    document.getElementById('idlogueo').onsubmit = ingreso;
    
    //document.getElementById('dataForm').addEventListener('submit',ejecutar);

    let primera = document.getElementById('idmostrar1');
    let segunda = document.getElementById('idmostrar2');
    let tercera = document.getElementById('idmostrar3');
    let cuarto = document.getElementById('idmostrar4');
    let salir = document.getElementById('idsalir');

    let seccion1 = document.getElementById('idsection1');
    let seccion2 = document.getElementById('idsection2');
    let seccion3 = document.getElementById('idsection3');
    let seccion4 = document.getElementById('idsection4');

    primera.addEventListener('click', function() {
        
        seccion1.style.display = "block"
        seccion2.style.display = "none"
        seccion3.style.display = "none"
        seccion4.style.display = "none"
    });

    segunda.addEventListener('click', function() {
        
        seccion1.style.display = "none"
        seccion2.style.display = "block"
        seccion3.style.display = "none"
        seccion4.style.display = "none"
    });
    
    tercera.addEventListener('click', function() {
        
        seccion1.style.display = "none"
        seccion2.style.display = "none"
        seccion3.style.display = "block"
        seccion4.style.display = "none"
    });

    cuarto.addEventListener('click', function() {
        
        seccion1.style.display = "none"
        seccion2.style.display = "none"
        seccion3.style.display = "none"
        seccion4.style.display = "block"
    });

    salir.addEventListener('click', function() {
        window.location.reload();
    });

    console.log("----VERSION 4.0------")

}


window.onload = ejecutar_al_cargar;
