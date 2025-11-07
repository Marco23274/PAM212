// CrudScreen.js
import React from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';

export default function CrudScreen() {
  const dummyItems = ['Transporte', 'Comida', 'Renta','Transferenc'];

  return (
    <View style={styles.container}>
        <View style={styles.headerBand}>
        <Text style={styles.headerTitle}>CRUD visual</Text>
        <MaterialIcons name="notifications-none" size={24} color="#fff" />
      </View>
        <TextInput
        style={styles.input}
        placeholder="Escribe algo..."
        editable={false}
      />
      <Button title="Agregar" onPress={() => {}} />
      <FlatList
        data={dummyItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
            <Button title="Editar" onPress={() => {}} />
            <Button title="Eliminar" onPress={() => {}} color="red" />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#0a0a0a' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, padding: 8, marginBottom: 10, backgroundColor: '#349bc0ff' },
  item: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 },
  itemText: { flex: 1, color:"#0884f1ff" },

  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerBand: {
    backgroundColor: '#631b9aff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});