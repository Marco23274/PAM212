import React from 'react';
import {
  View,
  Text,
  FlatList,
  SectionList,
  StyleSheet,
} from 'react-native';

const alumnos = [
  { id: '1', nombre: 'Jose' },
  { id: '2', nombre: 'Pablo' },
  { id: '3', nombre: 'Ale' },
  { id: '4', nombre: 'CrisCross' },
  { id: '5', nombre: 'David Martines' },
];
const categorias = [
  {
    titulo: 'Primavera',
    data: ['Marzo', 'Abril', 'Mayo'],
  },
  {
    titulo: 'Verano',
    data: ['Junio', 'Julio', 'Agosto'],
  },
  {
    titulo: 'Otoño',
    data: ['Septiembre', 'Octubre', 'Noviembre'],
  },
  {
    titulo: 'Invierno',
    data: ['Diciembre', 'Enero', 'Febrero'],
  },
];

export default function FlatListSectionListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ejemplo de FlatList</Text>

      <FlatList
        data={alumnos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemBox}>
            <Text style={styles.itemText}>* {item.nombre}</Text>
          </View>
        )}
      />

      <Text style={styles.title}>Ejemplo de SectionList</Text>

      <SectionList
        sections={categorias}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Text style={styles.itemText}>- {item}</Text>
        )}
        renderSectionHeader={({ section: { titulo } }) => (
          <Text style={styles.sectionHeader}>{titulo}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 20,
    color: '#c21010ff',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  itemBox: {
    backgroundColor: '#1e1e1e',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  itemText: {
    color: '#3a56bbff',
    fontSize: 16,
  },
  sectionHeader: {
    color: '#040144ff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
});
