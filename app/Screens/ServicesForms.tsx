import React from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ServiceFormsComponent } from '../../components/ServiceFormsComponent'
import { StyleSheet } from 'react-native';
import { router, Stack } from 'expo-router';
import GradientBackground from '@/components/GradientBackground';

export default function ServicesForms() {

  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.Background}>
      <ScrollView>
        <View style={styles.Container}>
          <Stack.Screen options={{
            title: 'Formularios de Servicio',
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
          <ServiceFormsComponent
            title="Inspección y Condiciones del lugar"
            otNumber="FO-1567"
            description="* Sección uno, *Sección dos, *Sección tres."
            buttonStatus="Continuar"
            status="En Proceso"
            bgColor="rgba(40, 56, 145, 0.1)"
          />
          <ServiceFormsComponent
            title="Checklist de revisión"
            otNumber="FO-1450"
            description="* Sección uno, *Sección dos, *Sección tres."
            buttonStatus="Comenzar"
            status="Pendiente"
            bgColor="rgba(40, 56, 145, 0.1)"
          />
          <ServiceFormsComponent
            title="Auditoría ISO 27001"
            otNumber="FO-1415"
            description="* Sección uno, *Sección dos, *Sección tres."
            buttonStatus="Editar"
            status="Completado"
            bgColor="rgba(40, 56, 145, 0.1)"
          />
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.buttonText}>Finalizar Servicio</Text>
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