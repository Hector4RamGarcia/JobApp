import React from 'react'
import {StyleSheet, Image, Text, SafeAreaView, View, TextInput, Pressable, ScrollView, Touchable, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {useState} from 'react';
import { router, Stack } from 'expo-router';

export default function RegisterCompanyScreen  () {
  const [checkIn, setCheckIn] = useState(false)

  return (
    <SafeAreaView style={styles.Background}>
      <Stack.Screen options={{headerShown:false}}/>
      <ScrollView>
        <View style={styles.Container}>
          <Image style={styles.logo} source={require('@/assets/images/job.png')}  />
          <Text style={styles.subTitle}>Prueba Joby gratis hoy mismo</Text>
          <View style={styles.InputContainer}>
            <TextInput style={styles.Input} placeholder='Nombre de tu empresa'/>
          </View>
          <View style={styles.InputContainer}>
            <TextInput style={styles.Input} placeholder='Nombre completo' textContentType='password'/>
          </View>
          <View style={styles.InputContainer}>
            <TextInput style={styles.Input} placeholder='Telefono de contacto' textContentType='password'/>
          </View>
          <View style={styles.InputContainer}>
            <TextInput style={styles.Input} placeholder='Correo electrónico' textContentType='password'/>
          </View>
          <View style={styles.InputContainer}>
            <TextInput style={styles.Input} placeholder='Contraseña'/>
          </View>
          <View style={styles.InputContainer}>
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              items={[
                { label: 'Comercial', value: 'Comercial' },
                { label: 'Industrial', value: 'Industrial' },
                { label: 'Ganaderia', value: 'Ganaderia' },
              ]}
              placeholder={{label: 'Sector de tu empresa', value:'0'}}
              style={pickerSelectStyles}
            />
          </View>
          <View style={styles.InputContainer}>
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              items={[
                { label: 'México', value: 'México' },
                { label: 'Nicaragua', value: 'Nicaragua' },
                { label: 'Brasil', value: 'Brasil' },
              ]}
              placeholder={{label: 'Selecciona tu pais', value:'0'}}
              style={pickerSelectStyles}
            />
          </View>
          <View style={styles.TermConditions}>
            <TouchableOpacity style={styles.CheckBox} onPress={()=> setCheckIn(!checkIn)}>
              {checkIn && <Text style={styles.CheckBoxIcon}>✔</Text>}
            </TouchableOpacity>
            <Text style={styles.anounce}>He leído los {''}</Text>
            <Pressable>
              <Text style={styles.newCount}>Términos y Condiciones</Text>
            </Pressable>
          </View>
          <Pressable style={styles.Buton}>
            <Text style={styles.ButonText}>Iniciar prueba gratis</Text>
          </Pressable>
          <View style={styles.newCountContainer}>
            <Text style={styles.anounce}>¿Ya tienes una cuenta?</Text>
            <Pressable onPress={() => router.back()}>
              <Text style={styles.newCount}>{' '}Ingresar</Text>
            </Pressable>
          </View>
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
    marginHorizontal: 16,
    marginVertical:30,
    flex:1,
    alignItems: 'center',
    backgroundColor: '#FFF'

  },
  logo: {
    width: 120, 
    height: 50,
    resizeMode: 'contain',
    marginTop: '10%'
  },
  Title: {
    fontSize: 32,
    fontWeight: "700",
    letterSpacing:1,
    color:"#283891",
    fontFamily: "sans-serif",
    marginTop: '10%'
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: '#757575',
    marginTop: '10%',
    marginBottom: '5%'
  },
  InputContainer: {
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 12,
    width: '100%',
    marginTop: '5%'

  },
  Input: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    color: '#ABABAB',
    fontSize: 14,
    fontWeight: '500'
  },
  PasswordForget:{
    alignSelf: 'flex-end',
    fontSize: 14,
    fontWeight: '500',
    color: '#757575',
    marginTop: '3%'

  },
  Buton:{
    width: '100%',
    backgroundColor: '#1D71B8',
    borderRadius: 12,
    alignItems: 'center',
    marginTop: '12%'
  },
  ButonText:{
    fontSize: 16,
    fontWeight: '500',
    color: '#FFF',
    paddingVertical: '5%',
  },
  anounce:{
    fontSize: 14,
    fontWeight: '500',
    color: '#757575',  
  },
  newCount:{
    fontSize: 14,
    fontWeight: '700',
    color: '#757575',
    textDecorationLine: 'underline'
  },
  newCountContainer:{
    flexDirection:'row',
    marginTop: '4%'
  },
  TermConditions: {
    flexDirection:"row",
    marginTop: '5%',
    alignSelf: 'flex-start'
  },
  CheckBox:{
    width: 20,
    height: 20,
    borderWidth: 1.2,
    borderColor: '#000',
    marginRight: 5,
    borderRadius: 12,
    alignItems: 'center',
  },
  CheckBoxIcon:{
    fontSize: 12
  }
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    color: '#ABABAB',
    fontWeight: '500',
  },
  inputAndroid: {
    fontSize: 14,
    color: '#ABABAB',
    fontWeight: '500',
  },
});