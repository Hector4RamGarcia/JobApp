import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ServiceFormsComponent } from '../../components/ServiceFormsComponent'
import { StyleSheet } from 'react-native';
import { router, Stack } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function ServicesForms() {

  const navigation = useNavigation();
  
  return (
    <View>
      <Stack.Screen options={{
        title: 'Formularios del servicio',
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
          fontSize: 22
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
        onPress={() => {
          router.navigate("/Screens/ServiceForm")
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Finalizar Servicio</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
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