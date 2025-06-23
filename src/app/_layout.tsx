import { PortalHost } from '@rn-primitives/portal';
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import '../../global.css';
export default function RootLayout() {
  
  return (
    < >
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="dark" />
       <PortalHost />
    </>
  );
}
