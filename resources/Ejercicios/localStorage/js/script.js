function guardar(){
    var nombre = document.getElementById('nombre').value;
    localStorage.setItem('nombre', nombre);

    if(localStorage.contador){
        localStorage.contador = Number(localStorage.contador) + 1;
    } else {
        localStorage.contador = 1;
    }



    location.reload();
}

function mostrar(){
    var texto = document.getElementById('texto');

    var name = localStorage.getItem('nombre');

    if (name){
        texto.innerHTML = 'Tu nombre es ' + name;
    } else {
        texto.innerHTML = "No has introducido un nombre";
    }

    document.getElementById('conta').innerHTML = 'Número de actualizaciones de datos ' + localStorage.contador;

}

function eliminar(){
    localStorage.removeItem('nombre');
    

    if(localStorage.contador){
        localStorage.contador = Number(localStorage.contador) + 1;
    } else {
        localStorage.contador = 1;
    }

    location.reload();
}

