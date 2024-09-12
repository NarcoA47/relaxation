import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

function AppBar({ navigation }) {
  return (
    <Appbar.Header style={styles.header}>
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.icon}>
        <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.centerContent}>
        <Appbar.Content title="" />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('profile')} style={styles.icon}>
      <FontAwesome name="user-circle-o" size={24} color="black" />
      </TouchableOpacity>
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 10,
  },
  centerContent: {
    flex: 1,
    alignItems: 'center',
  },
});

export default AppBar;
