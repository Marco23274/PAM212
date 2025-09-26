const persona={
    nombre:"Ivan Isay",
    edad: 37,
    direccion:{
        ciudad:"Queretaro",
        pais:"Mexico"
    }
};

const{nombre,edad,direccion}=persona;
const{ciudad,pais}=direccion;

console.log ("hola,mi nombre es " + nombre + " tengo " + edad + " años y vivo en " + ciudad + ", " + pais);