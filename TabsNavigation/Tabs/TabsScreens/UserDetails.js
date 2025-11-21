import { View, Text, StyleSheet, Button } from 'react-native';

export default function UserDetails({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles del usuario</Text>
      <Button title="Cerrar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
});
