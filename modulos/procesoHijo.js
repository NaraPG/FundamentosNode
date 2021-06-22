const { exec, spawn } = require('child_process');

/*exec('ls ', (error, stdOut) => {
    error ? console.log(error) : console.log(stdOut);
});
*/
let proceso = spawn('cmd.exe', ['/c', 'dir']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data',  (dato)  => {
   console.log('esta muerto el proceso???')
   console.log(proceso.killed);
   console.log(dato.toString());
})

proceso.on('exit', () => {
   console.log('el proceso termino');
   console.log('ahora si esta muerto el proceso???')
   console.log(proceso.killed);
})