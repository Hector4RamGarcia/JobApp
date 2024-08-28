import { router } from "expo-router";
import { RouterStore } from "expo-router/build/global-state/router-store";
import { Pressable, Text, Touchable, View } from "react-native";

export default function ServicesScreen(){
  return(
    <View>
      <Text>
        Servicios
      </Text>
      <Pressable onPress={() => router.push('/Screens/ServicesForms')}>
        <Text>Detalles del servicio</Text>
      </Pressable>
    </View>
  )
}