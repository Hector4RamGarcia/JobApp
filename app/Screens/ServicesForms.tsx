import React from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ServiceFormsComponent } from '../../components/ServiceFormsComponent'
import { StyleSheet } from 'react-native';
import { router, Stack } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import GradientBackground from '@/components/GradientBackground';

export default function ServicesForms() {

  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.Background}>
      <ScrollView>
        <GradientBackground style={styles.Container}>
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
            bgColor="#F5C443"
          />
          <ServiceFormsComponent
            title="Checklist de revisión"
            otNumber="FO-1450"
            description="* Sección uno, *Sección dos, *Sección tres."
            buttonStatus="Comenzar"
            status="Pendiente"
            bgColor="#283891"
          />
          <ServiceFormsComponent
            title="Auditoría ISO 27001"
            otNumber="FO-1415"
            description="* Sección uno, *Sección dos, *Sección tres."
            buttonStatus="Editar"
            status="Completado"
            bgColor="#52B46B"
          />
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.buttonText}>Finalizar Servicio</Text>
          </TouchableOpacity>
      </GradientBackground>
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