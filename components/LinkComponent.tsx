import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function LinkComponent({icon, title, link}: any){
  return(
    <View style={styles.Container}>
      <View style={styles.ContainerIcon}>
        <EvilIcons name={icon} size={25} />
      </View>
      <View style={styles.ContainerDescription}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Ionicons name="chevron-forward" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
    alignItems: 'baseline'
  },
  ContainerDescription:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex:1,

  },
  ContainerIcon:{
    marginRight:10,
  },
  title:{
    fontSize: 16,
    fontWeight: "500",
    color:"#161616",
    fontFamily: "sans-serif",
  }
  
})