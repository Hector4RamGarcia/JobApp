import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native';
import {ServiceDetails, PaymentDetails} from '../../components/ServiceDetails';
import { router, Stack } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';


export default function DetailsServicesScreen() {

  const navigation = useNavigation();

  return (
    <ScrollView>
      <Stack.Screen options={{
        title: 'Detalles del servicio',
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
      <ServiceDetails 
        serviceTitle="Starbucks | Plaza Palmas"
        otNumber="OT-1095"
        address="Av. Universidad 2229, San José del Arenal, 20130."
        contact="Fabian Ortiz | 449 415 7769"
        description="Servicio semanal de limpieza profunda."
        time="Martes 23 de Abril, 9:00 - 10:30"
        status="Agendado"
      />

      <ServiceDetails 
        serviceTitle='Notas internas'
        description='Includes Lorem Ipsum, dolor sit amet, consectetur adipiscing elit'
      />

      <ServiceDetails 
        serviceTitle='Servicios / Productos'
        description='Includes Lorem Ipsum, dolor sit amet, consectetur adipiscing elit'      
      />
      <PaymentDetails   
        subtotal="$1,500.00"
        discount="-$0.00"
        tax="$0.00"
        total="$1,500.00"
        paymentMethod="Efectivo"
      />
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}
          onPress={() => {
            router.back()
          }}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor:"#E6332A"}]}
          onPress={() => router.navigate('/Screens/ServicesForms')}
        >
          <Text style={styles.buttonText}>Comenzar</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    backgroundColor:"#000", 
    padding:10, 
    width: '40%', 
    borderRadius: 100, 
    alignItems: 'center',
    paddingVertical: 15,
    height: 50,
  },
  buttonText: {
    color: '#fff',
  },
});