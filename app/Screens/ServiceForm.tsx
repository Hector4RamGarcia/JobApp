import React, {useState} from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { Section1, Section2 } from '../../components/ServiceInputComponents';
import { Stack } from 'expo-router';


export default function ServiceForm(){
  return (
    <ScrollView>
      <Stack.Screen options={{
        title: 'Inspección y condiciones del servicio',
        headerStyle: {
          backgroundColor: '#FFF',  
        },
        headerTintColor: '#161616',
        headerTitleStyle: {
        fontWeight: '600',
          fontSize: 22
        },
        headerTitleAlign: 'center',  
        }}/>
      <Section1/>
      <Section2/>
      <Text>
        Formulario del servicio
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#283891',
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
