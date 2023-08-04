const {
  readFile,
  readFileSync,
  writeFile,
  writeFileSync,
  existsSync,
} = require("fs");
const path = require("path");
const db = "../db/tareas.json";
/**
 * @param db la dirección de la base de datos
*/
function crearDataBase() {
  
  let dato = existsSync(path.join(__dirname, db));

  if (!dato) {
     writeFileSync(path.join(__dirname, db), "[]");
  }

  
}

function obtenerDatabase(){

  let data = readFileSync(path.join(__dirname,db), "utf-8")

  return JSON.parse(data);
}

function enviarDatos(data){

     writeFileSync(path.join(__dirname,db),JSON.stringify(data));
}




module.exports ={
  crearDataBase,
  obtenerDatabase,
  enviarDatos
}





