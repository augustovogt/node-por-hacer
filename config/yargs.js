
const descripcion ={
    demand:true,
    alias:'d',
    desc:'Descripcion de la tarea por hacer'
}   

const argv = require('yargs')
                 .command('crear','Crea un elemento por hacer',{
                   descripcion              
                 })
                 .command('eliminar','Elimina un elemento por hacer',{
                    descripcion                
                  })
                  .command('actualizar','Actualiza el estado completado de una tarea',{
                    descripcion,                
                    completado:{
                        alias:'c',
                        default:true,
                        desc:'Marca como completado o por hacer'
                    }                                     
                 })
                 .help()
                 .argv;


module.exports={
    argv
}