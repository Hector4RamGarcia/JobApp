import React, {useState} from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { Section1, Section2 } from '../../components/ServiceInputComponents';
import { Stack } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';


export default function ServiceForm(){
  return (
    <SafeAreaView style={styles.Background}>
      <ScrollView>
        <View style={styles.Container}>
        <Stack.Screen options={{
            title: 'Inspección y Condiciones del lugar',
            headerStyle: {
              backgroundColor: '#FFF',
            },
            headerTintColor: '#161616',
            headerTitleStyle: {
              fontWeight: '600',
              fontSize: 16, 
            },
            headerTitleAlign: 'center',
            
          }}/>
          <Section1/>
          <Section2/>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Background: {
    backgroundColor: '#FFF',
    flex:1
  },
  Container: {
    flex:1,
    backgroundColor: '#FFF'
  },
  button: {
    backgroundColor: '#1D71B8',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center'
  }, 
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
