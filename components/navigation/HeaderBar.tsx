import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

export default function HeaderBar() {
  return (
    <View style={styles.container}>
        <Text style={styles.loginHere}>Login Here</Text>
        <Text>Welcome Back!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    loginHere: {
        fontSize: 24,
        fontWeight: 800,
    }
})