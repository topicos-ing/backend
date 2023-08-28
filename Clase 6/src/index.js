function funcionAgregar(){
    const nombre= document.getElementById("titulo").value
    const descripcion= document.getElementById("descripcion").value
    const combo = document.getElementById("combobox");
    const prueba= `<div class="card hijo">
			<div class="card-body">
			  <h5 class="card-title">`+ nombre +`</h5>
			  <p class="card-text">` + descripcion + `</p>
			  <a href="#" class="btn btn-primary">Ver Tarjeta</a>
			</div>
		  </div>`

      document.getElementById(combo.value).innerHTML += prueba;
      document.getElementById("descripcion").value='';
      document.getElementById("titulo").value='';
      document.getElementById("combobox").value = "col1";
    
}

function getData() {
    const apiUrl = `https://run.mocky.io/v3/c733b24d-11f7-40f7-a29d-24f255b31b81`;
  
    return fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        return data;
      });
  }

async function cargardatos(){

    let lista = await getData();
    console.log("aca")
    console.log(lista)
    for (let i = 0; i < lista.length; i++) {
        const nombre= lista[i][0];
        const descripcion= lista[i][1];
        const combo = lista[i][2];
        const prueba= `<div class="card hijo">
                <div class="card-body">
                  <h5 class="card-title">`+ nombre +`</h5>
                  <p class="card-text">` + descripcion + `</p>
                  <a href="#" class="btn btn-primary">Ver Tarjeta</a>
                </div>
              </div>`
  }


}

cargardatos();