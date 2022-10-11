
function iniciar() {
    zonaDatos=document.getElementById("zonadatos");

    boton=document.getElementById("guardar");

    boton.addEventListener("click", agregarObj, false);

    var request=indexedDB.open("miBase3");

    request.onsuccess = function(e){
        db=e.target.result;
    }

    request.onupgradeneeded = function(e){
        db=e.target.result;
        db.createObjectStore("gente", {keyPath: "clave"});
    }
}

function agregarObj(){

    var clave = document.getElementById("clave").value;
    var titulo = document.getElementById("texto").value;
    var fecha = document.getElementById("fecha").value;

    var transaccion = db.transaction(["gente"], "readwrite");
    var almacen = transaccion.objectStore("gente");
    var agregar = almacen.add({clave: clave, titulo: titulo, fecha: fecha}); 

    agregar.addEventListener("success", mostrar, false);

    document.getElementById("clave").value="";
    document.getElementById("texto").value="";
    document.getElementById("fecha").value="";
}

function mostrar(){

    zonaDatos.innerHTML = "";
    
    var transaccion = db.transaction(["gente"], "readonly");
    var almacen = transaccion.objectStore("gente");
    var cursor = almacen.openCursor();
    
    cursor.addEventListener("success", mostrarDatos, false);
}

function mostrarDatos(e){
    var cursor = e.target.result;

    if(cursor){
        zonaDatos.innerHTML += "<div>" + cursor.value.clave + " - " + cursor.value.titulo + " - " + cursor.value.fecha + "</div>";
        
        cursor.continue();
    }
}

window.addEventListener("load", iniciar, false);