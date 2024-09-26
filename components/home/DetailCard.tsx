import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient';
import { customColors } from '@/constants/Colors';
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function DetailCard() {

  const colorsScheme = customColors;

  return (
    <View style={styles.container}>
        <LinearGradient
        colors={['#007FFF', '#50C878']} 
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 2 }}
        style={styles.styleContainer}
        >
        <View style={styles.styleContainer}>
          <View style={styles.headManager}>
              <View style={styles.imageProcessor}>
                <Image
                source={require('../../assets/images/3.jpg')} 
                style={styles.imageManager}/>
              </View>
              <View style={styles.textManager}>
                <View style={styles.textManagerLead}>
                  <Text style={styles.textOne}>Living Stone Tour</Text>
                  <View style={styles.dot}/>
                  <Text style={styles.textOne}>1Hr : 23Mins</Text>
                </View>
                <View style={styles.textManagerMedium}>
                  <Text style={styles.textTwo}>380</Text>
                  <Text style={styles.textThree}>pts</Text>
                </View>
                <Text style={styles.textFour}>Atomic Crush</Text>
              </View>
          </View>
          <View>
          <Button
            mode="outlined"
            style={styles.button}
            // onPress={() => navigation.navigate('signup')}
            theme={{
              colors: {
                primary: colorsScheme.textWhite,
                text: colorsScheme.textWhite,
              },
              fonts: {
                regular: { fontFamily: 'GeistSans', fontWeight: '800' },
              },
            }}
            contentStyle={styles.buttonContent} // Add this to adjust content alignment
          >
            <EvilIcons style={styles.buttonIcon} name="play" size={18} color="#ffffff" />
            <Text style={styles.buttonText}>Play</Text> {/* Add a custom Text component for font size */}
          </Button>
          </View>
        </View>
    </LinearGradient>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
      flex: 1
  },

  styleContainer: {
    borderRadius: 12,
    padding: 8,
    margin: 16
  },
  imageProcessor: {
    width: 120,
    height: 120,
    borderRadius: 70,
    backgroundColor: '#FFFFFF23',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageManager: {
    width: 100,
    height: 100,
    borderRadius: 50,
    
  },

  headManager: {
    flexDirection: 'row'
  },

  textManager: {
    marginTop: 16,
    marginLeft: 10,
    color: '#ffffff'
  },

  dot: {
    width: 5,
    height: 5,
    backgroundColor: '#FFFFFFFF',
    borderRadius: 70,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
  },

  textManagerLead: {
    flexDirection: 'row'
  },

  textManagerMedium: {
    flexDirection: 'row'
  },

  textOne: {
    color: '#ffffff',
    
  }, 

  textTwo: {
    color: '#ffffff',
    marginTop: 4,
    fontSize: 30,
    fontWeight: 800,
  }, 

  textThree: {
    color: '#ffffff',
    marginTop: 16,
  },

  textFour: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 700,
  },

  button: {
    // Add your button styles here
    width: 100,
    borderColor: '#ffffff',
    margin: 20,
  },
  buttonContent: {
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center', // Center content vertically
    justifyContent: 'center', // Center content horizontally
  },
  buttonIcon: {
    marginRight: 8, // Add some space between icon and text
  },
  buttonText: {
    fontSize: 20, // Set the desired font size
    color: '#ffffff',
    fontWeight: 800,
  },
});