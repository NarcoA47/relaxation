import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function LeadingBanner() {
  return (
    <View style={styles.container}>
        <View>
            <Image
            source={require('../../assets/images/2.jpg')} 
            style={styles.imageManager}/>
        </View>
        <View style={styles.textLead}>
            <Text style={styles.textLineOne}>Good Morning</Text>
            <Text style={styles.textLineDate}>25 September 2024</Text>
        </View>
        <View style={styles.Notification}>
            <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },

    imageManager: {
        width: 50,
        height: 50,
        borderRadius: 50,
        margin: 16,
    },
    textLead: {
        marginTop: 16,
    },
    textLineOne: {
        fontWeight: 800,
        fontSize: 18,
    },
    textLineDate: {
        color: '#ADADADFF',
        fontWeight: 700,
        fontSize: 14,
        marginTop: 4,
    },
    Notification: {
        marginTop: 16,
        marginLeft: 190,
    }
  });