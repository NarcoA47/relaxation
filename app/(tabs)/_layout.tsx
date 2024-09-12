
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Appbar } from 'react-native-paper';
import { Tabs } from 'expo-router';
import { TouchableOpacity } from 'react-native';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors, customColors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import AppBar from '../appBar';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const colorsScheme = customColors;

  return (
    <Tabs
      screenOptions={({ navigation }) => ({
        header: () => <AppBar navigation={navigation} />,  // Custom header with drawer button
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" size={size} color={colorsScheme.accent} />
        ),
      })}
      >
      <Tabs.Screen
        name="index"
        options={({ navigation }) => ({
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={colorsScheme.accent} />
          ),
          headerLeft: () => (
            <Feather
              name="menu"
              size={24}
              color="black"
              onPress={() => navigation.openDrawer()} // Assuming you have a drawer setup
              style={{ marginLeft: 15 }}
            />
          ),
          headerRight: () => (
            <Feather
              name="user"
              size={24}
              color="black"
              onPress={() => {
                // Define what happens when the profile icon is pressed
              }}
              style={{ marginRight: 15 }}
            />
          ),
        })}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
            // <FontAwesome name={focused ? 'wpexplorer' : 'wpexplorer'} size={24} color={color} />
            <AntDesign name={focused ? 'star' : 'staro'} size={24} color={colorsScheme.accent} />
          ),
        }}
      />
      <Tabs.Screen
        name="fun"
        options={{
          title: 'Fun',
          tabBarIcon: ({ color, focused }) => (
            // <FontAwesome6 name={focused ? 'star-of-life' : 'star-of-life'} color={color} />
            <Ionicons name={focused ? 'tv' : 'tv-outline'} size={26} color={colorsScheme.accent} />
          ),
        }}
      />
      <Tabs.Screen
        name="play"
        options={{
          title: 'Play',
          tabBarIcon: ({ color, focused }) => (
            // <FontAwesome6 name={focused ? 'star-of-life' : 'star-of-life'} color={color} />
            <Ionicons name={focused ? 'game-controller' : 'game-controller-outline'} size={24} color={colorsScheme.accent} />
          ),
        }}
      />
    </Tabs>
  );
}
