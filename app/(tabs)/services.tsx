import { router, Stack} from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function ServicesScreen(){
  return(
    <View>
      <Text>
        Servicios
      </Text>
      <Pressable onPress={() => router.navigate('/Screens/DetailsServices')}>
        <Text>Detalles del servicio</Text>
      </Pressable>
    </View>
  )
}