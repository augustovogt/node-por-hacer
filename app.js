//const argv = require('yargs').argv;

const argv = require('./config/yargs').argv

const porHacer = require ('./por-hacer/por-hacer');

const colors= require('colors');

let comando = argv._[0];


switch( comando ){

    case 'crear':
      let tarea = porHacer.crear(argv.descripcion);
      console.log(tarea);
    break;
    case 'listar':
      let listado = porHacer.listado();

      for(let tarea of listado){
           console.log("=================== Por Hacer ===================".green);
           console.log(tarea.descripcion);
           console.log('Estado: ',tarea.completado);
           console.log("===========================================".green);
      }
    break;
    case 'actualizar':
          let retorno = porHacer.actualizar(argv.descripcion,argv.completado);
          console.log(retorno);
          break;
    case 'eliminar':
          let eliminar = porHacer.eliminar(argv.descripcion);
          console.log(eliminar);
          break
    default:
      console.log("Comando no es reconocido");

}