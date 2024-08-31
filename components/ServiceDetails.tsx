import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Service {
  serviceTitle?: string;
  otNumber?: string;
  address?: string;
  contact?: string;
  description?: string;
  time?: string;
  status?: string;
}

interface PaymentDetails {
  subtotal:string; 
  discount:string;
  tax:string;
  total:string;
  paymentMethod:string;
}

export const ServiceDetails = ({ serviceTitle, otNumber, address, contact, description, time,status }: Service) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {serviceTitle && otNumber ? (
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Icon name="home-outline" size={20} color="#000" />
            <Text style={styles.serviceTitle}>{serviceTitle}</Text>
            <Text style={styles.serviceTitle}>{otNumber}</Text>
          </View>
        ): (
          <View style={{flexDirection:"row", justifyContent:"center"}}>
            <Text style={styles.serviceTitle}>{serviceTitle}</Text>
          </View>
        )}
        {address && <Text style={styles.serviceDescription}>{address}</Text>}
        {contact && <Text style={styles.serviceDescription}>{contact}</Text>}
        {description && <Text style={styles.serviceDescription}>{description}</Text>}
        {time && status && (
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Icon name="time-outline" size={20} color="#000" />
            <Text style={styles.serviceDescription}>{time}</Text>
            <View style={styles.statusContainer}>
                <Text style={styles.statusText}>{status}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export const PaymentDetails = ({ subtotal, discount, tax, total, paymentMethod }: PaymentDetails) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.serviceTitle}>Detalles del Pago</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Subtotal:</Text>
          <Text style={styles.value}>{subtotal}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Descuento:</Text>
          <Text style={[styles.value,{color:"#52B46B"}]}>{discount}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Impuesto:</Text>
          <Text style={styles.value}>{tax}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.label, {fontWeight:"bold"}]}>Total del Servicio:</Text>
          <Text style={styles.value}>{total}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Método de Pago:</Text>
          <Text style={styles.value}>{paymentMethod}</Text>
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
    padding: 10,
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.10,
    shadowRadius: 4.65,
    elevation: 2,
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
    borderRadius: 100,
    backgroundColor: '#E6EAFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 10,
    color: '#283891',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    color: '#000',
  },
  value: {
    fontSize: 12,
    color: '#000',
    fontWeight: 'bold',
  },
});


export default ServiceDetails;