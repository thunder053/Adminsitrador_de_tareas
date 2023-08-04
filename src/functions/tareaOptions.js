const path = require("path");
const {crearDataBase,enviarDatos,obtenerDatabase}= require("./archivos")

crearDataBase();
let datos = obtenerDatabase();

class Tarea  {

  /**
   * @param tarea nombre de la tarea
   * @param des descripción de la tarea
  */
  async crearTareas(tarea, descripcion) {
  
   datos.push({tarea,descripcion,completado: false})

   enviarDatos(datos);

  }
 /**
   * @param tarea nombre de la tarea
  */
  listaTareas(){
    console.log("=============================");
    console.log("        Lista tareas");
    console.log("=============================");
    console.log(" ")
    console.log("==> Tareas completadas <==")
    if(datos.length == 0) {
      return console.log("No hay tareas listadas");
    
    }


    let a =[];
    for(let i =0; i< datos.length; i++){
        if(datos[i].completado == false) continue;
        a.push(datos[i]);
        console.log(`${i+1}.- ${datos[i].tarea}: ${datos[i].descripcion}`);
    }
    if(a.length == 0) console.log("No hay tareas completadas");

    
    console.log(" ")
    console.log("==> Tareas faltantes <==")
    let b=[];
    for(let i =0; i< datos.length; i++){
      if(datos[i].completado == true) continue;
      b.push(datos[i]);
      console.log(`${i+1}.- ${datos[i].tarea}: ${datos[i].descripcion}`);

    }

    if(b.length == 0) console.log("!Felicidades, completaste todas tus tareas¡");
  }
 /**
   * @param tarea nombre de la tarea
  */
  completartarea(tarea){
    const infoTarea = datos.find(data => data.tarea == tarea);
    if(!infoTarea) return console.log("[Error]: ","Esta tarea no existe");

    infoTarea.completado = true;

    enviarDatos(datos);
  }
 /**
   * @param tarea nombre de la tarea
  */
  eliminarTarea(tarea){
    const infoTarea = datos.find(data => data.tarea == tarea);
    if(!infoTarea) return console.log("[Error]: ","Esta tarea no existe");

  // datos.pull(infoTarea);

  datos.splice(datos.indexOf(tarea),1)

    enviarDatos(datos); 
  }

}

module.exports={
  Tarea,
}

