import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet, } from 'react-native';

export default function ModalScreen() {
  const [modalVisible, setModalVisible] = useState(false); 

  const abrirModal = () => {
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Si presionas aqui se mostrara el modal</Text>

      <Button color={"#0053c8ff"} title="Abrir Modal" onPress={abrirModal} /> 

      <Modal  
        animationType="fade"            
        transparent={true}               
        visible={modalVisible}           
        onRequestClose={cerrarModal}   
      >

        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>¡Hola! soy un Modal.</Text>
            <Button title="Cerrar" onPress={cerrarModal} /> {/* PROP onPress: cierra modal */}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#520fc6ff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  modalContainer: {
    flex: 1,  
    justifyContent: 'center',
    backgroundColor: 'rgba(92, 244, 173, 0.64)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'rgba(5, 41, 147, 0.76)',
    borderRadius: 15,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#4a3d76ff',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 16,
  },
});