import React from 'react';
import { router, Stack } from 'expo-router';
import {
  StyleSheet, 
  Text,
  SafeAreaView, 
  View, 
  TextInput, 
  Pressable, 
  ScrollView,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen ()  {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.Background}>
      <Stack.Screen options={{headerShown:false}}/>
      <ScrollView>
        <View style={styles.Container}>
          <Image style={styles.logo} source={require('@/assets/images/job.png')}  />
          <Text style={styles.subTitle}>Ingresa con tu cuenta</Text>
          <View style={styles.InputContainer}>
            <TextInput style={styles.Input} placeholder='Correo electrónico' />
          </View>
          <View style={styles.InputContainer}>
            <TextInput style={styles.Input} placeholder='Contraseña' textContentType='password' />
          </View>
          <Text style={styles.PasswordForget}>Olvide mi contraseña</Text>
          <Pressable
            style={styles.Buton}
            onPress={() => router.push('(tabs)')}
           >
            <Text style={styles.ButonText}>Ingresar ahora</Text>
          </Pressable>
          <View style={styles.newCountContainer}>
            <Text style={styles.anounce}>¿No tienes una cuenta?</Text>
            <Pressable onPress={() => router.push('/Screens/RegisterCompany')}>
              <Text style={styles.newCount}>{' '}Registrarme</Text>
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
    marginTop: '15%',
    width: 220, 
    height: 180,
    resizeMode: 'contain',
  },
  ContainerTitle:{
    flexDirection:'row'
  },
  Title: {
    fontSize: 64,
    fontWeight: "700",
    letterSpacing:1,
    color:"#E6332A",
    fontFamily: "sans-serif",
    marginTop: '20%'
  },
  Title2: {
    fontSize: 64,
    fontWeight: "700",
    letterSpacing:1,
    color:"#1D71B8",
    fontFamily: "serif",
    marginTop: '20%'
  }
  ,
  subTitle: {
    fontSize: 20,
    fontWeight: "500",
    color: '#757575',
    marginTop: '20%',
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
  }
});

