//Gestion de errores

function otraFuncion() {
    serompe();
}

function serompe() {
    return 3 + z;
}

function seRompeAsync(cb) {
    setTimeout(() => {
        try {
            return 3 + z
        } catch (error) {
            cb(error);
        }
    })
}

try {
    seRompeAsync((error) => console.error(error.message))
} catch (error) {
    console.error('Vaya, algo se ha roto...')
    console.error(error.message)
}

try {
    otraFuncion();

} catch(err) {
    console.error('Vaya, algo se ha roto...');
    console.error(err.message);
    console.log('Pero no pasa nada, lo hemos capturado');
}

console.log('Pero no pasa nada, lo hemos capturado');