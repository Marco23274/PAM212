function VerificarUsuario(usuario) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usuario === "admin") {
                resolve(true);
            } else {
                resolve(false);
            }
        }, 5000);
    });
}
function obtenerDatos() {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ mensaje: "Datos obtenidos correctamente", datos: [1, 2, 3] });
        }, 3000);
    });
}

async function main() {
    console.log("Espere por favor");
    const resultado = await obtenerDatos();
    console.log(resultado);
}
main();