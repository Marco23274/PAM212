//Import:Zona de import
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,} from 'react-native';
import React,{ useState } from 'react';

//Main:zona de los componentes
export default function App() {
  const[contador,setContador]=useState(0);
  
  return (
    <View style={styles.container}>
      <Text>Picale ahi, veras que risas</Text>
      <Text>Contador:{contador}</Text>

      <Button title = "Sumale" onPress={()=>setContador(contador+1)} />
      <Button title= "quitale" onPress={()=>setContador(contador-1)} /> 
      <Button title= "reiniciar" onPress={()=>setContador(contador==0)}/>
      <StatusBar style="auto" />
    </View>
  );
}

//Estilos:zona de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
