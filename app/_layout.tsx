import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />

    </Stack>
  );
}
