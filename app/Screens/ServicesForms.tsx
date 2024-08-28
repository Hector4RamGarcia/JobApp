import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ServiceFormsComponent } from '@/components/ServiceFormComponent';
import { StyleSheet } from 'react-native';

export default function ServicesForms () {  
  return (
        <ScrollView>
    <View>
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
            console.log('hoa')
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Finalizar Servicio</Text>
        </TouchableOpacity>
    </View>
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