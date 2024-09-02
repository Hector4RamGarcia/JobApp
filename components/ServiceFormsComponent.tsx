import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';

interface ServiceForm {
  title: string;
  otNumber: string;
  description: string;
  buttonStatus: string;
  status: string;
  bgColor: string;
}

export const ServiceFormsComponent = ({ title, otNumber,description, buttonStatus, status, bgColor }: ServiceForm) => {


  return (
    <View style={styles.container}>
      <View style={[styles.innerContainer, {backgroundColor:bgColor+23}]}>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <Text style={styles.serviceTitle}>{title}</Text>
          <Text style={styles.serviceTitle}>{otNumber}</Text>
        </View>
        <Text style={styles.serviceDescription}>{description}</Text>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <TouchableOpacity
            onPress={() => {
              router.navigate("/Screens/ServiceForm")
            }}
          >
            <Text style={[styles.button,{backgroundColor:bgColor}]}>{buttonStatus}</Text>
          </TouchableOpacity>
            <View style={styles.statusContainer}>
              <Text style={[styles.statusText, {color:bgColor}]}>{status}</Text>
            </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  innerContainer: {
    width: '96%',
    height: 172,
    padding: 10,
    borderRadius: 10,
  },
  serviceTitle: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  serviceDescription: {
    fontSize: 12,
    color: '#000',
  },
  statusContainer: {
    width: 94,
    height: 18, 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10, 
  },
  statusText: {
    fontSize: 14,
    color: '#283891',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#1e90ff',
    color: '#fff',
    padding: 5,
    borderRadius: 5,
    fontSize: 14,
    width: 182,
    marginTop: 10,
    textAlign: 'center',
  },
});