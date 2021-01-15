//requireds

//const fs = require('express'); //librerías externos
//const fs = require('../fs'); //son archivos de nuestro propio proyecto
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b',
        },
        limite: {
            alias: 'l',
            defaul: 10
        }
    })
    .help()
    .argv;

const multiplicar = require('./multiplicar/multiplicar');



//let base = '5';


//let argv = process.argv;
//let parametro = argv[2];
let argv2 = process.argv;
//let base = parametro.split('=')[1];


let comando = argv._[0];

switch (comando) {

    case 'listar':
        console.log(`Listar`);
        break;
    case 'crear':
        console.log(`Crear`);
        multiplicar.creaArchivo(argv.base)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(error => console.log(error));
        break;
    default:
        console.log(`Comando no reconocido`);
}


//console.log('Limite: ' + argv.base);
//console.log(argv2);


//console.log(parametro);

/*
    multiplicar.creaArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(error => console.log(error));
    */