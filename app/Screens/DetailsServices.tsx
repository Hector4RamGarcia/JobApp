import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native';
import {ServiceDetails, PaymentDetails} from '../../components/ServiceDetails';
import { router, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import GradientBackground from '@/components/GradientBackground';


export default function DetailsServicesScreen() {
  return (
    <View style={styles.Background}>
      <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View style={styles.Container}>          
          <Stack.Screen options={{
            title: 'Detalle de Servicio',
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
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Background: {
    flex:1, 
  },
  Container: {
    flex:1,
  },
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