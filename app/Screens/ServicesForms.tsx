import React from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ServiceFormsComponent } from '../../components/ServiceFormsComponent'
import { StyleSheet } from 'react-native';
import { router, Stack } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function ServicesForms() {

  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.Background}>
      <ScrollView>
        <View style={styles.Container}>
          <Stack.Screen options={{
            title: 'Formularios de Servicio',
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