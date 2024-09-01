import React, {useState} from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { Section1, Section2 } from '../../components/ServiceInputComponents';
import { Stack } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';


export default function ServiceForm(){
  return (
    <ScrollView>
      <Stack.Screen options={{
        title: 'Inspección y condiciones del servicio',
        headerBackground: () => (
          <LinearGradient
            colors={['#5BC4F1', '#1D71B8']}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          />
        ),
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: '600',
          fontSize: 18
        },
        headerTitleAlign: 'center',  
        }}/>
      <Section1/>
      <Section2/>
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
