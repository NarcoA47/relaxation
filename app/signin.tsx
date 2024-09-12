import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInUser } from '../middleware/apiConfig';
import { Button, TextInput, useTheme } from 'react-native-paper';
import HeaderBar from '@/components/navigation/HeaderBar';

import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

function SigninScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [error, setError] = useState('');  // For error message
  const [isError, setIsError] = useState(false); // To track input error state
  const { colors } = useTheme(); // Access theme colors

  const customColors = {
    primary: '#007910FF',
    accent: '#007910FF',
    background: '#f5f5f5',
    surface: '#ffffff',
    error: colors.error,  // Use theme's error color
    text: '#000000',
    placeholder: '#9e9e9e',
  };

  const handleSignIn = async () => {
    setError('');  // Clear error message
    setIsError(false);  // Reset error state

    try {
      const response = await signInUser(username, password);
      if (response && response.success) {
        setError('Incorrect username or password.');
        setIsError(true);  // Mark inputs as invalid
      } else {
        navigation.navigate('(tabs)');
      }
    } catch (error) {
      setError('Sign-in failed. Please try again.');
      setIsError(true);  // Mark inputs as invalid
    }
  };

  return (
    <View style={styles.container}>
      <HeaderBar />
      {error ? <Text style={[styles.errorText, { color: customColors.error }]}>{error}</Text> : null}
      <View>
        <TextInput
          mode="outlined"
          label="Username"
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.textInput}
          theme={{
            colors: {
              primary: customColors.primary,
              error: customColors.error,  // Apply error color from theme
            },
            fonts: {
              regular: { fontFamily: 'GeistSans', fontWeight: '400' },
            },
          }}
          error={isError} // Apply error style if invalid
        />
        <TextInput
          mode="outlined"
          label="Password"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={secureTextEntry}
          style={styles.textInput}
          theme={{
            colors: {
              primary: customColors.primary,
              error: customColors.error,  // Apply error color from theme
            },
            fonts: {
              regular: { fontFamily: 'GeistSans', fontWeight: '400' },
            },
          }}
          error={isError} // Apply error style if invalid
          right={
            <TextInput.Icon
              icon={secureTextEntry ? "eye"  : "eye-off"}
              onPress={() => setSecureTextEntry(!secureTextEntry)}
            />
          }
        />
        {/* Display error message below inputs */}
        
      </View>

      <Button
        mode="contained"
        onPress={handleSignIn}
        style={styles.button}
        labelStyle={styles.buttonText}
        theme={{
          colors: {
            primary: customColors.primary,
            text: customColors.text
          },
          fonts: {
            regular: { fontFamily: 'GeistSans', fontWeight: '800' },
          },
        }}
      >
        Sign in
      </Button>
    </View>
  );
}

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: 350,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
  },
  errorText: {
    marginBottom: 10,
    alignSelf: 'center',
  },
  button: {
    width: 350,
    height: 50,
    alignSelf: 'center',
  },
  buttonText: {
    marginTop: 18,
    fontSize: 20,
    fontWeight: '900',
  },
});
