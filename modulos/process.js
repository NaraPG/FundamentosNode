//saber todo lo que pasa en el proceso

// const p = require('process');

process.on ('beforeExit', () =>{
    console.log('El proceso va a terminar');
});

process.on ('exit', () =>{
    console.log('El proceso acabo');
});

process.on('uncaughtException', (err, origen) =>{
    console.error('se nos ha olvidado capturar un error');
    console.error(err);
});

funcionQueNoExiste();

console.log('Esto si el error no se recoje, no sale');