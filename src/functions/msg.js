const readline = require("readline");
const process = require("process");
const { Tarea } = require("./tareaOptions");

const leer = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const menu = async () => {
  return new Promise((resolve, reject) => {

 console.log("=============================");
  console.log(" Administrador de tareas");
  console.log("=============================");
  console.log("*opciones:");
  console.log("1.- Crear tarea");
  console.log("2.- Buscar tarea");
  console.log("3.- Completar tarea");
  console.log("4.- Eliminar tarea");
  console.log("0.- Salir");
  console.log(" ");
  leer.question("Elige una opción: ", (result) => {
     resolve(result);
  });

  })
 
};

const tarea = new Tarea();

const options = async (option) => {
  return new Promise((resolve) => {
    switch (Number(option)) {
      case 1:
        console.clear();
        leer.question("Pon un nombre a la tarea: ", (res) => {
          leer.question("Pon una descripción a la tarea: ", async(respt) => {
            resolve(await tarea.crearTareas(res, respt));
          });
        });

        break;
      case 2:
        console.clear();

        resolve(tarea.listaTareas());

        break;
      case 3:
        console.clear();
        leer.question("Menciona la tarea a completar: ", (res) => {
          resolve(tarea.completartarea(res));
        });
        break;
      case 4:
        console.clear();
        leer.question("Menciona la tarea a eliminar: ", (res) => {
          resolve(tarea.eliminarTarea(res));
        });
        break;
      case 0:
        console.clear();
         console.log("Programa terminado, !vuelve pronto¡ :D")
          leer.close();
        break;

      default:
        console.log("Opción inválida, intentelo denuevo");
        break;
    }
  });
};


const salir = async ()=>{
  return new Promise((resolve, reject) =>{
   leer.question("Presiona [Enter] para continuar",(res)=>{
       resolve(res);

 }) 
  })
 

}

module.exports = {
  menu,
  options,
  salir
};
