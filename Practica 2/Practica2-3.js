const personas=[
    {nombre:"Ana", edad:22},
    {nombre:"Luis", edad:35},
    {nombre:"Maria", edad:28},
];

let encontrar= personas.find(persona => persona.nombre =="Luis");

console.log(encontrar);

personas.forEach(function(nombre,edad) {
    console.log(this.value," ", nombre,);

},{value: "las personas son:" });

let edades= personas.reduce(function (acumulador,persona) {
    return acumulador + persona.edad;
},0);

console.log("la suma de las edades es: ", edades);
