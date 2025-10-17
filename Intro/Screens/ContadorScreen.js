//Import:Zona de import
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,} from 'react-native';
import React,{ useState } from 'react';

//Main:zona de los componentes
export default function ContadorScreen() {
  const[contador,setContador]=useState(0);
  
  return (
    <View style={styles.container }>
      <Text style={styles.titulo}>Picale ahi, veras que risas</Text>
      <Text style={styles.texto}>Contador:  </Text>
      <Text style={styles.numContador}> {contador} </Text>
      <View style={styles.contenedorBotones} >
      <Button color={"rgba(187, 187, 58, 1)"} title = "Sumale" onPress={()=>setContador(contador+1)} />
      <Button color={"rgba(255, 1, 1, 1)"} title= "quitale" onPress={()=>setContador(contador-1)} /> 
      <Button color={"rgba(25, 17, 45, 0.61)"} title= "reiniciar" onPress={()=>setContador(contador==  0)}/>
       </View>
      <StatusBar style="auto" />
    </View>
  );
}

//Estilos:zona de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282032ff',
    alignItems: 'center',
    justifyContent: 'Start',
  },

  titulo:{

    color:"#3603a4ff",
    fontSize:30,
    fontFamily:"TimesNewRoman",
    fontWeight:"100",
    fontStyle:"italic",
    textDecorationLine:"Line-through",
  },

  numContador:{

    color:"#ff2424ff",
    fontSize:40,
    fontFamily:"Courier",
    fontWeight:"1000",
    textDecorationLine:"underline",
    
  },

  contenedorBotones:{
    marginTop:30,
    flexDirection:"row",
    gap:15,
  },

  texto:{
    color:"#d702c9ff",
    fontSize:20,
  },

});
