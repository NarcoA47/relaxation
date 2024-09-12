import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signUpUser } from '../middleware/apiConfig';

function SignupScreen() {
  const navigation = useNavigation();
  

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    setLoading(true);
    try {
      
      const response = await signUpUser(firstname, lastname, email, password);
      Alert.alert('Success', 'Sign up successful');
      navigation.navigate('(tabs)'); 
    } catch (error) {
      Alert.alert('Error', 'Sign up failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.textHeaderInput}>Firstname</Text>
          <TextInput
            placeholder='Joe'
            value={firstname}
            onChangeText={setFirstname}
            style={styles.textInput}
          />
        </View>
        <View style={styles.headerInput}>
          <Text style={styles.textHeaderInput}>Lastname</Text>
          <TextInput
            placeholder='Doe'
            value={lastname}
            onChangeText={setLastname}
            style={styles.textInput}
          />
        </View>
        <View style={styles.headerInput}>
          <Text style={styles.textHeaderInput}>Email</Text>
          <TextInput
            placeholder='username@gmail.com'
            value={email}
            onChangeText={setEmail}
            style={styles.textInput}
          />
        </View>
        <View style={styles.headerInput}>
          <Text style={styles.textHeaderInput}>Password</Text>
          <TextInput
            placeholder='Your Password'
            value={password}
            onChangeText={setPassword}
            style={styles.textInput}
            secureTextEntry
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignUp}
        disabled={loading} // Disable button while loading
      >
        <Text style={styles.buttonText}>{loading ? 'Signing Up...' : 'Sign Up'}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textHeaderInput: {
    marginLeft: 15,
    fontSize: 14,
  },
  headerInput: {
    marginTop: 15,
  },
  textInput: {
    width: 380,
    height: 35,
    borderColor: '#0000007C',
    borderWidth: 1,
    marginLeft: 15,
    padding: 5,
    borderRadius: 2,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#047900',
    width: 375,
    height: 50,
    borderRadius: 5,
    padding: 15,
    marginTop: 25,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});
