function funcionAgregar(){
    const nombre= document.getElementById("titulo").value
    const descripcion= document.getElementById("descripcion").value
    const combo = document.getElementById("combobox");
    const prueba= `<div class="tarjeta">' 
    <h3>`+ nombre +`</h3>
    <p>` + descripcion + `</p>
</div>`

      document.getElementById(combo.value).innerHTML += prueba;
      document.getElementById("descripcion").value='';
      document.getElementById("titulo").value='';
      document.getElementById("combobox").value = "col1";
    
}