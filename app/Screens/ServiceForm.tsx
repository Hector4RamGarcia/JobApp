import React, {useState} from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { Section1, Section2, Section3 } from '../../components/ServiceInputComponents';
import { Stack } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import GradientBackground from '@/components/GradientBackground';


export default function ServiceForm(){
  return (
    <SafeAreaView style={styles.Background}>
      <ScrollView>
        <GradientBackground style={styles.Container}>
        <Stack.Screen options={{
            title: 'Inspección y Condiciones del lugar',
            headerBackground: () => (
              <GradientBackground style={{ flex: 1 }} children={undefined} />
            ),
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '600',
              fontSize: 16, 
            },
            headerTitleAlign: 'center',
            
          }}/>
          <Section1/>
          <Section2/>
          <Section3/>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Guardar</Text>
          </TouchableOpacity>
        </GradientBackground>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Background: {
    flex:1
  },
  Container: {
    flex:1,
  },
  button: {
    backgroundColor: '#E6332A',
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
