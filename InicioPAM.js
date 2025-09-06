document.write("<h1>Inicio</h1>");

const nombresBotones = [
  "Reglamento POO",
  "Lineamientos classroom",
  "Fechas de parciales",
  "Porcentajes por parciales"
];
const textosBotones = [
  "1. Respeto,2. Importante participación activa en orden, 3. No entregar trabajos incompletos, 4 Plagio de trabajos = 0 para todos, 5. 3 o mas faltas = final, 6. Calificación maxima en final 8",
  "Trabajos en classroom: Entregas completas,Respetar tiempos de entrega, Presentación de trabajo calidad universitaria",
  "Fechas de parciales: 30/09/25 Primer examen, 04/11/25 Segundo examen, 02/12/25 Tercer examen, 08/12/25 Final",
  "Parcial 1:Conocimiento 40%, Desempeño 20% Producto 30%, PI 10%  Parcial 2:Conocimiento 40%, Desempeño 20% Producto 20%, PI 20%   Parcial 3: Conocimiento 20%, Desempeño 10% Producto 40%, PI 30%"
];

for (let i = 0; i < 4; i++) {
  let boton = document.createElement("button");
  boton.innerHTML = nombresBotones[i];
  boton.id = `boton${i + 1}`;
  document.body.appendChild(boton);

  let texto = document.createElement("div");
  texto.id = `texto${i + 1}`;
  texto.style.marginBottom = "10px";
  document.body.appendChild(texto);

  boton.onclick = function() {
    texto.innerHTML = textosBotones[i];
  };
}