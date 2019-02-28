
const fs= require('fs');

let listadoPorHacer=[];

const guardarDB = () =>{
    let data=JSON.stringify(listadoPorHacer);

    fs.writeFile("./db/data.json",data,(error)=>{
        if(error) throw new Error('No se pudo grabar ',error);
          console.log(error);
    })

    fs.close;
}

const cargarDB = ()=>{

    try {
        listadoPorHacer = require("../db/data.json");
        
    } catch (error) {
        listadoPorHacer=[];
    }
    

}

const listado= ()=>{

        cargarDB();
       return listadoPorHacer;


}
const crear = (descripcion)=>{

    cargarDB();
    let porHacer={
        descripcion,
        completado:false
    }

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}


const actualizar = (descripcion,completado = true)=>{
    cargarDB();
    console.log("descripcion:["+descripcion+"]");
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if( index >= 0){
        listadoPorHacer[index].completado = completado;
         guardarDB();

         return true
    }

    return false;
}

const eliminar = (descripcion)=>{
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if( index >= 0){
        listadoPorHacer.splice(index,1);
         guardarDB();

         return true
    }

    return false;
}


module.exports={
    crear,
    listado,
    actualizar,
    eliminar
}