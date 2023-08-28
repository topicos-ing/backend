let contadorID=0;
let crea=-1;

function funcionAgregar(){
    const nombre= document.getElementById("titulo").value
    const descripcion= document.getElementById("descripcion").value
    const combo = document.getElementById("combobox");
    contadorID++;
    console.log(crea)
    if (crea==-1){
    const prueba= `<div id=`+ contadorID +` class="card hijo" draggable="true" ondragstart="drag(event)">
			<div class="card-body">
			  <h5 id= "`+contadorID+`titulo" class="card-title">`+ nombre +`</h5>
			  <p id= "`+contadorID+`descripcion" class="card-text">` + descripcion + `</p>
			  <a href="#" class="btn btn-primary" onclick="funcionModificar(`+contadorID+`)" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver Tarjeta</a>
			</div>
		  </div>`

      document.getElementById(combo.value).innerHTML += prueba;
      document.getElementById("descripcion").value='';
      document.getElementById("titulo").value='';
      document.getElementById("combobox").value = "col1";
    }else{
      
      const prueba= `<div id=`+ crea +` class="card hijo" draggable="true" ondragstart="drag(event)">
			<div class="card-body">
			  <h5 id= "`+crea+`titulo" class="card-title">`+ nombre +`</h5>
			  <p id= "`+crea+`descripcion" class="card-text">` + descripcion + `</p>
			  <a href="#" class="btn btn-primary" onclick="funcionModificar(`+crea+`)" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver Tarjeta</a>
			</div>
		  </div>`
      document.getElementById(crea).outerHTML = prueba;
      document.getElementById("descripcion").value='';
      document.getElementById("titulo").value='';
      document.getElementById("combobox").value = "col1";


    }
    crea=-1;
}

function getData() {
    const apiUrl = `https://run.mocky.io/v3/cf4ba7e2-6d32-4048-8267-bbf0e59daa76`;
  
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
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i]);
        if (contadorID<lista[i].id){
          contadorID=lista[i].id
        }
        const nombre= lista[i].nombre;
        const descripcion= lista[i].descripcion;
        const state = lista[i].state;
        const id = lista[i].id;
        const prueba= `<div id=`+id+` class="card hijo" draggable="true" ondragstart="drag(event)">
                <div class="card-body">
                  <h5 id= "`+id+`titulo" class="card-title">`+ nombre +`</h5>
                  <p id= "`+id+`descripcion" class="card-text">` + descripcion + `</p>
                  <a href="#" class="btn btn-primary" onclick="funcionModificar(`+id+`)" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver Tarjeta</a>
                </div>
              </div>`;
        document.getElementById(state).innerHTML += prueba;
  }


}

function funcionModificar(id){
  let titulo= document.getElementById(id+"titulo");
  let descripcion= document.getElementById(id+"descripcion");
  document.getElementById("titulo").value=titulo.innerHTML;
  document.getElementById("descripcion").value=descripcion.innerHTML;
  document.getElementById("combobox").style.display="none";
  crea=id;

}


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev, element) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  element.appendChild(document.getElementById(data));
}


cargardatos();