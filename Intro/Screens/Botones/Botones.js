import React from 'react';




const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffffff", // Color de fondo de toda la pantalla
    alignItems: "center",        // Centra horizontalmente los elementos dentro del container
    justifyContent: "flex-start",// Alinea verticalmente los elementos desde arriba
    padding: 20,                 // Espacio interno alrededor del contenido
    paddingTop: 50,              // Espacio extra en la parte superior
  },
  header: {
    fontSize: 22,                // Tamaño de letra del encabezado
    fontWeight: "bold",          // Pone el texto en negrita
    marginBottom: 20,            // Espacio debajo del encabezado
    color: "#333",               // Color del texto
    textAlign: "center",         // Centra el texto horizontalmente
  },
  title: {
    fontWeight: "bold",          // Título de cada sección en negrita
    marginTop: 20,               // Espacio arriba del título
    marginBottom: 5,             // Espacio debajo del título
    color: "#333",               // Color del texto
  },
  text: {
    color: "white",              // Color del texto dentro de los botones
    fontWeight: "600",           // Grosor del texto para que resalte
  },
  btnOpacity: {
    backgroundColor: "#2a9fffff",// Color de fondo del botón TouchableOpacity
    padding: 10,                 // Espacio interno del botón
    borderRadius: 8,             // Bordes redondeados del botón
  },
  btnHighlight: {
    backgroundColor: "#29b6f6",  // Color de fondo del botón TouchableHighlight
    padding: 10,                 // Espacio interno del botón
    borderRadius: 8,             // Bordes redondeados
  },
  btnNoFeedback: {
    backgroundColor: "#ab47bc",  // Color de fondo del botón sin feedback visual
    padding: 10,                 // Espacio interno del botón
    borderRadius: 8,             // Bordes redondeados
  },
  btnPressable: {
    padding: 10,                 // Espacio interno del botón Pressable
    borderRadius: 8,             // Bordes redondeados
    // Los demás estilos dinámicos (color, opacidad, sombra, escala) se agregan dentro de style={({ pressed }) => ...}
  },
  btnNative: {
    padding: 10,                 // Espacio interno del botón nativo o simulación de Ripple
    borderRadius: 8,             // Bordes redondeados
    marginBottom: 15,            // Espacio debajo del botón para separarlo del siguiente
  },
});