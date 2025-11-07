import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';

const transactions = [
  { id: '1', date: '15 de septiembre de 2025', title: 'Transporte', amount: '-$350.00' },
  { id: '2', date: '16 de septiembre de 2025', title: 'Comida', amount: '-$200.00' },
  { id: '3', date: '18 de septiembre de 2025', title: 'Renta', amount: '-$1100.00' },
  { id: '4', date: '20 de septiembre de 2025', title: 'Transferencia', amount:'+$,5000'},
];

export default function Transacciones() {
  return (
    <View style={styles.container}>
      <View style={styles.headerBand}>
        <Text style={styles.headerTitle}>Mi Presupuesto</Text>
        <MaterialIcons name="notifications-none" size={24} color="#fff" />
      </View>

      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Historial de movimientos</Text>
          <TouchableOpacity>
            <FontAwesome5 name="filter" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.date}>{item.date}</Text>
              <View style={styles.row}>
                <View style={styles.iconText}>
                  <Entypo name="credit-card" size={20} color="#fff" />
                  <Text style={styles.titleText}>{item.title}</Text>
                </View>
                <Text style={styles.amount}>{item.amount}</Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.navbar}>
        <View style={styles.navItem}>
          <FontAwesome5 name="chart-pie" size={20} color="#fff" />
          <Text style={styles.navText}>Gráficas</Text>
        </View>
        <View style={styles.navItem}>
          <FontAwesome5 name="money-bill-wave" size={20} color="#fff" />
          <Text style={styles.navText}>Ingresos</Text>
        </View>
        <View style={styles.navItem}>
          <FontAwesome5 name="receipt" size={20} color="#fff" />
          <Text style={styles.navText}>Gastos</Text>
        </View>
        <View style={styles.navItem}>
          <FontAwesome5 name="exchange-alt" size={20} color="#fff" />
          <Text style={styles.navText}>Transacciones</Text>
        </View>
        <View style={styles.navItem}>
          <FontAwesome5 name="cog" size={20} color="#fff" />
          <Text style={styles.navText}>Ajustes</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    paddingTop: 0,
    justifyContent: 'space-between',
  },
  headerBand: {
    backgroundColor: '#6A1B9A',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  card: {
    backgroundColor: '#19171b',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  date: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  titleText: {
    color: '#fff',
    fontSize: 16,
  },
  amount: {
    color: '#05fcf8ff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#310a79',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
});