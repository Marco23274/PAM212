import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TransactionCard({ date, title, amount }) {
  return (
    <View style={styles.card}>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.row}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.amount}>{amount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#8b0000',
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
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
  amount: {
    color: '#00ff00',
    fontSize: 16,
    fontWeight: 'bold',
  },
});