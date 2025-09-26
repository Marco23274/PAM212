const productos = [

{nombre: "Laptop", precio: 12000},
{nombre: "Teclado", precio: 750},
{nombre: "Mouse", precio: 250},
{nombre: "Monitor", precio: 3000}
];
 
let filtro = productos.filter(producto => producto.precio >1000);



let map = filtro.map(producto => producto.nombre);
console.log(map);
 