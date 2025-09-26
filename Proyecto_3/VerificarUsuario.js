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
VerificarUsuario("admin")
    .then(res => console.log(res))
    .catch(err=>console.log(err));


VerificarUsuario("Josue")
    .then(res=>console.log(res))
    .catch(err=>console.log(err));


console.log("Verificando usuario...");
console.log("Usuario verificado.");
        



