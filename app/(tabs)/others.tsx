import React from 'react'
import LinkComponent from '@/components/LinkComponent';
import { StyleSheet, Text, SafeAreaView, View, TextInput, Pressable, ScrollView, Touchable, TouchableOpacity, Image } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';



export default function OthersScreen ()  {
  return (
    <SafeAreaView style={styles.Background}>
      <ScrollView>
        <View style={styles.Container}>
          <Text style={styles.subTitle}>Sofalm México</Text>
          <View style={styles.HeaderContainer}>
            <View style={styles.HeaderImage}>
              <Image
                source={{ uri: 'https://us.123rf.com/450wm/peopleimages12/peopleimages122202/peopleimages12220204356/181922127-llega-al-trabajo-en%C3%A9rgico-y-entusiasta-todos-los-d%C3%ADas.jpg?ver=6' }}
                style={styles.image}
              />
            </View>
            <View style={styles.HeaderDescription}>
              <Text style={styles.HeaderName}>John Kevin</Text>
              <Text style={styles.HeaderEmail}>alberto@jobu.com</Text>
            </View>
            <View style={styles.HeaderEdit}>
              <TouchableOpacity onPress={() => router.push('/Screens/EditProfile')} style={styles.editButton}>
                <MaterialIcons name="mode-edit-outline" type="material" color="#fff" size={25} style={styles.icon}/>
              </TouchableOpacity>
            </View>
          </View>
          <LinkComponent 
            icon={'location'}
            title={'Dashboard'}
            link={'https://www.youtube.com/'}
          />
          <LinkComponent 
            icon={'share-google'}
            title={'Administrativo'}
            link={'https://www.youtube.com/'}
          />
          <LinkComponent 
            icon={'star'}
            title={'Recursos humanos'}
            link={'https://www.youtube.com/'}
          />
          <LinkComponent 
            icon={'gear'}
            title={'Configuración'}
            link={'https://www.youtube.com/'}
          />
          <LinkComponent 
            icon={'arrow-right'}
            title={'Salir de mi cuenta'}
            link={'https://www.youtube.com/'}
          />
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
    backgroundColor: '#283891',
    borderRadius: 12,
    alignItems: 'center',
    marginTop: '20%'
  },
  ButonText:{
    fontSize: 16,
    fontWeight: '500',
    color: '#FFF',
    paddingVertical: '5%',
  },
  
  HeaderContainer: {
    flexDirection: 'row',
    alignSelf:'flex-start',
    width: '100%',
    height: 120,
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
    paddingBottom: 10,
    marginTop:'5%',
  },
  HeaderImage:{
    width:'30%',
  },
  HeaderDescription:{
    flexDirection: 'column',
    marginLeft: '3%',
    marginRight: '2%',
    marginTop: '8%',
    width: '55%'
  },
  HeaderName:{
    fontSize: 16,
    fontWeight: "700",
    color:"#161616",
    fontFamily: "sans-serif",
  },
  HeaderEmail:{
    fontSize: 12,
    fontWeight: "500",
    color:"#161616",
    fontFamily: "sans-serif",
  },
  HeaderEdit:{
    width: '12%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 75,
  },
  editButton: {
    backgroundColor: '#283891',
    borderRadius: 10,
    width: '100%',
    padding: 10
  },
  icon:{
    alignSelf: 'center'
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
  },

});

