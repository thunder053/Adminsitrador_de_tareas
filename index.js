const{menu,options,salir}= require("./src/functions/msg")

let option;
const inicio =async ()=>{
do{
 option = await menu();
    await options(option)
    await salir()
  
}while(option != 0);

}

inicio();
