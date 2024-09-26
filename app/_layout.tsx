import React, { useEffect } from 'react';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useColorScheme } from '@/hooks/useColorScheme'; // Verify if this is correctly imported
import { Provider as PaperProvider } from 'react-native-paper';
import CustomDrawerContent from '../components/CustomDrawerContent'; // Verify if this is correctly exported
import Feather from '@expo/vector-icons/Feather';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Create Drawer Navigator
const Drawer = createDrawerNavigator();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  // Load custom fonts
  const [fontsLoaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // Hide the splash screen once fonts are loaded
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Prevent app from rendering until fonts are loaded
  }

  return (
    <PaperProvider>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="drawer" options={{ headerShown: false }}>
          {() => (
            <Stack>
              
              <Stack.Screen 
                name="index" 
                options={{ headerShown: false }}
              />
              <Stack.Screen name="profile" 
                options={({ navigation }) => ({
                  headerRight: () => (
                    <Feather
                    name="menu"
                    size={24}
                    color="black"
                    onPress={() => navigation.openDrawer()} 
                    style={{ marginLeft: 15 }}
                  />
                  ),
                })
              } 
              />
              <Stack.Screen name="settings" 
                options={({ navigation }) => ({
                    headerRight: () => (
                      <Feather
                      name="menu"
                      size={24}
                      color="black"
                      onPress={() => navigation.openDrawer()}
                      style={{ marginLeft: 15 }}
                    />
                    ),
                  })
                } 
              />
              <Stack.Screen name="community" 
                options={({ navigation }) => ({
                    headerRight: () => (
                      <Feather
                      name="menu"
                      size={24}
                      color="black"
                      onPress={() => navigation.openDrawer()} 
                      style={{ marginLeft: 15 }}
                    />
                    ),
                  })
                } 
              />
              <Stack.Screen name="products" 
                options={({ navigation }) => ({
                    headerRight: () => (
                      <Feather
                      name="menu"
                      size={24}
                      color="black"
                      onPress={() => navigation.openDrawer()}
                      style={{ marginLeft: 15 }}
                    />
                    ),
                  })
                } 
              />
              <Stack.Screen name="services" 
                options={({ navigation }) => ({
                    headerRight: () => (
                      <Feather
                      name="menu"
                      size={24}
                      color="black"
                      onPress={() => navigation.openDrawer()}
                      style={{ marginLeft: 15 }}
                    />
                    ),
                  })
                } 
              />
              <Stack.Screen 
              name="signup" 
              options={{ headerShown: false }} 
              />
              <Stack.Screen 
              name="(tabs)" 
              options={{ headerShown: false }} 
              />
              <Stack.Screen 
              name="+not-found" 
              />
            </Stack>
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </PaperProvider>
  );
}
