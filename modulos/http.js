//Sirve para conectarnos con servidores externos
//o para crear un servidor desde nodejs

const http = require('http');

http.createServer(function (req, res){
    console.log('nueva peticion');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.write('hola, que tal');
            res.end();
            break;

        default:
            res.write('Error 404: No se lo que quieres')
            res.end();

    }

//     res.writeHead(201, {'Content-Type': 'text/plain'})

// //Escribir respuesta al usuario
//     res.write('hola, ya se usar http de nodejs')
//     res.end();
}).listen(3000);

console.log("Escuchando http en el puerto 3000")

