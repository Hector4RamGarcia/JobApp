import LinkComponent from "@/components/LinkComponent";
import { Text, View } from "react-native";
import { Stack } from "expo-router";

export default function BillsScreen(){
  return(
    <View>
      <Stack.Screen options={{headerShown:false}}/>

      <Text>Menu principal</Text>
      <Text>Menu principal</Text>
      <Text>Menu principal</Text>
      <Text>Menu principal</Text>

    </View>
  )
}