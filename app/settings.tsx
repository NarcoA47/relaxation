import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function SettingScreen() {
  return (
    <View style={styles.container}>
        <Text>This is the Settings Screen</Text>
    </View>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})