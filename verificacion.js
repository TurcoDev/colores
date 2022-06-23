

function verifyName() {
  let name = document.getElementById("name").value
  if (name.includes(" ")){
    console.log("No se permiten espacios")
  } else{
    console.log("Muy bien")
  }
}

function verifyName2() {
  let name = document.getElementById("name").value
  if (name.search(" ") != -1){
    console.log("No se permiten espacios 2")
  } else{
    console.log("Muy bien 2")
  }
}

function verifyEspace() {
  let name = document.getElementById("name").value
  
  for (let index = 0; index < name.length; index++) {
    // const element = array[index];
    
    if (name[index] == " "){
      console.log("No se permiten espacios MIO")
    }
  }
}

// aca irian los colores
let estacionesExtrasGlobal = ['superInvierno2', 'MismisimoVerano2', 'InfiernoOtoñal2'];

function addElemToSelectTag(arreglo, selectTag) {

  for (let index = 0; index < arreglo.length; index++) {
    selectTag.innerHTML += '<option value="'+arreglo[index]+'">'+arreglo[index]+'</option>'  
  }
}

let miSelect = document.getElementById('estaciones');


addElemToSelectTag(estacionesExtrasGlobal, miSelect);

let colores = ['rojo', 'azul', 'verde'];
let selectColores = document.getElementById('primarios');
addElemToSelectTag(colores, selectColores);

function VerificarGenero() {
  let genero = document.getElementsByName('genero');
  for (let index = 0; index < genero.length; index++) {
    if (genero[index].checked){
      return genero[index].value + ' selected' ;
    }
  }
}

function verEstadoRadio() {
  console.log(VerificarGenero());
}

function verEstadoRadio() {
  alert(VerificarGenero());
}

fdghdfg