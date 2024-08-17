import { router, Stack } from 'expo-router';
import React from 'react';
import {Pressable, Text, View, SafeAreaView, StyleSheet} from 'react-native';
import { Link } from 'expo-router';
export default function Home() {
  return (
    <SafeAreaView style={styles.Background}>
      <Stack.Screen options={{headerShown:false}}/>
        <Pressable onPress={() => router.push('/Login')}>
          <View style={styles.Container}>
            <Text style={styles.Title}>Joby</Text>
            <Text style={styles.subTitle}>Tu negocio, nuestra misión</Text>
          </View>
        </Pressable>
    </SafeAreaView>
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
    color: '#757575'
  }
});
