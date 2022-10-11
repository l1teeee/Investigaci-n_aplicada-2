btnGuardar.addEventListener('click', ()=>{
    let val = document.getElementById("valorInput").value;
    sessionStorage.setItem("nombre", val);
    document.getElementById("valorInput").value="";
})

btnMostrar.addEventListener('click', ()=>{
    let val = sessionStorage.getItem("nombre");
    document.getElementById("valor").innerHTML = val;
})

btnEliminar.addEventListener('click', ()=>{
    document.getElementById("valor").innerHTML = "";
    sessionStorage.clear();
})



