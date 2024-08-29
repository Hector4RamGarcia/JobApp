import { Tabs } from "expo-router";
import { Ionicons, FontAwesome, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabLayout () {
  return(
    <Tabs screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName : string;

        if (route.name === 'index') {
          iconName = focused
            ? 'credit-card-multiple'
            : 'credit-card-multiple-outline';
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;

          } else if (route.name === 'services') {
          iconName = focused ? 'bars' : 'bars';
          return <AntDesign name={iconName} size={size} color={color} />;

        }else if(route.name === 'attendance'){
          iconName = focused ? 'account-clock' : 'account-clock-outline';
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        }
         else if(route.name === 'others'){
          iconName = focused ? 'switcher' : 'switcher';
          return <AntDesign name={iconName} size={size} color={color} />;
        }
      },
      tabBarActiveTintColor: '#1D71B8',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tabs.Screen name="services" options={{
          headerShown:false,
          title: 'Servicios',
          tabBarLabelStyle:{
            fontSize: 13,
            fontWeight: '500'
          }
        }}/>
      <Tabs.Screen name="index"  options={{
        headerShown:false,
        tabBarBadge: 1,
        tabBarBadgeStyle:{
          backgroundColor: '#E6332A'
        },
        title: 'Gastos',
        tabBarLabelStyle:{
          fontSize: 13,
          fontWeight: '500'
        }

        }}/>
      <Tabs.Screen name="attendance" options={{
        headerShown: false,
        title: 'Asistencia',
        tabBarLabelStyle:{
          fontSize: 13,
          fontWeight: '500'
        }
      }}/>
      <Tabs.Screen name="others" options={{
        headerShown:false,
        title: 'Otros',
        tabBarLabelStyle:{
          fontSize: 13,
          fontWeight: '500'
        }
      }}/>
    </Tabs>
  )
}