import { Tabs } from "expo-router";

export default function TabLayout () {
  return(
    <Tabs>
      <Tabs.Screen name="services"/>
      <Tabs.Screen name="index"/>
      <Tabs.Screen name="others"/>
    </Tabs>
  )
}