import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AgendaScreen from '../Screens/AgendaScreen';


export default function ServicesScreen() {
  return (
    <SafeAreaView style={styles.Background}>
      <AgendaScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Background: {
    backgroundColor: '#FFF',
    flex: 1,
  },
});
