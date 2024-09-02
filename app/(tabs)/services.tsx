import { router, Stack} from "expo-router";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function ServicesScreen(){
  return(
    <SafeAreaView style={styles.Background}>
      <View style={styles.Container}>
        <Text>
          Servicios
        </Text>
        <Pressable onPress={() => router.navigate('/Screens/DetailsServices')}>
          <Text>Detalles del servicio</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    Background : {
        backgroundColor: '#FFF',
        flex: 1,
    }, 
    Container: {
      marginHorizontal: 16,
      marginVertical:30,
      flex:1,
      alignItems: 'center',
      backgroundColor: '#FFF'
    },
});