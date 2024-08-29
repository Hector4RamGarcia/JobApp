import React from 'react'
import {StyleSheet, Text, SafeAreaView, View, TextInput, Pressable, ScrollView, Touchable, TouchableOpacity, Image} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Stack } from 'expo-router';

export default function ProfileScreen () {
  return (
    <SafeAreaView style={styles.Background}>
      <ScrollView>
        <Stack.Screen options={{
          title: 'Editar Perfil',
          headerStyle: {
            backgroundColor: '#FFF',
            
          },
          headerTintColor: '#161616',
          headerTitleStyle: {
            fontWeight: '600',
            fontSize: 22
          },
          headerTitleAlign: 'center',
          
        }}/>

        <View style={styles.Container}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://us.123rf.com/450wm/peopleimages12/peopleimages122202/peopleimages12220204356/181922127-llega-al-trabajo-en%C3%A9rgico-y-entusiasta-todos-los-d%C3%ADas.jpg?ver=6' }}
              style={styles.image}
            />
            <TouchableOpacity style={styles.editButton}>
              <MaterialIcons name="mode-edit-outline" type="material" color="#fff" size={20} />
            </TouchableOpacity>
          </View>
          <View style={styles.SectionContainer}>
            <Text style={styles.SectionTitle}>Nombre del empleado</Text>
            <TextInput style={styles.SectionContent} value='John Kevin'/>
          </View>
          <View style={styles.SectionContainer}>
            <Text style={styles.SectionTitle}>Correo electrónico</Text>
            <TextInput style={styles.SectionContent} value='johnkevin787@gmail.com'/>
          </View>
          <View style={styles.SectionContainer}>
            <Text style={styles.SectionTitle}>Cambiar contraseña</Text>
            <TouchableOpacity>
              <Text style={styles.SectionContent}>Enviar enlace a su correo para restablecer la contraseña</Text>
            </TouchableOpacity>
          </View>
          <Pressable style={styles.Buton}>
            <Text style={styles.ButonText}>Guardar cambios</Text>
          </Pressable>
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
    color: '#161616',
    marginTop: '10%',
    marginBottom: '5%'
  },
  Buton:{
    width: '100%',
    backgroundColor: '#1D71B8',
    borderRadius: 12,
    alignItems: 'center',
    marginTop: '20%',
  },
  ButonText:{
    fontSize: 16,
    fontWeight: '500',
    color: '#FFF',
    paddingVertical: '5%',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  editButton: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    backgroundColor: '#1D71B8',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
  },
  SectionContainer:{
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    alignSelf:'flex-start',
    marginTop: '10%',
    width: '100%'
  },
  SectionTitle:{
    fontSize: 12,
    fontWeight: '500',
    color: '#757575',
    fontFamily: "sans-serif",
  },
  SectionContent:{
    fontSize: 16,
    fontWeight: '600',
    color: '#161616',
    fontFamily: "sans-serif",
    marginTop: '2%'
}
});
