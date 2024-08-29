import { router, Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {Pressable,Image, Text, View, SafeAreaView, StyleSheet, Animated} from 'react-native';
import { Link } from 'expo-router';
import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

export default function Home() {
  const [splash] = useState (new Animated.Value(0));
  useEffect(() => {
    Animated.timing(
      splash,{
        toValue:1,
        duration:500,
        useNativeDriver: true,
      }
    ).start()
    const timer = setTimeout(() => {
      router.push('/Login')
    }, 2000);
  },[])
  return (
    <View style={styles.Background }>
      <Stack.Screen options={{headerShown:false}}/>
      <Pressable style={styles.Container} onPress={() => router.push('/Login')}>   
          <Animated.View style={[styles.Container,{opacity: splash}]}>
              <Image style={styles.logo} source={require('@/assets/images/job.png')}  />
              <Text style={styles.subTitle}>Optimiza, Simplifica, Avanza</Text>
              <Text style={styles.label}>Tu Socio en la Gestion de Servicios</Text>
          </Animated.View>
      </Pressable>
    </View>
  );
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
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#FFF'

  },
  Title: {
    fontSize: 64,
    fontWeight: "700",
    letterSpacing:1,
    color:"#283891",
    fontFamily: "sans-serif",
  },
  subTitle: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: "500",
    color: '#1D71B8'
  },
  label:{
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: "500",
    color: '#757575'
  },
  logo: {
    width: 500, 
    height: 100,
    resizeMode: 'contain',
    marginTop: '10%'
  },
});
