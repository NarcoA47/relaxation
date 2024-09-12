import { customColors } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, TextInput, Card, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { signInUser } from '../middleware/apiConfig';

export default function StartingScreen() {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [error, setError] = useState(''); 
    const [isError, setIsError] = useState(false); 
    const colorsScheme = customColors;
    const { colors } = useTheme(); 

    const handleSignIn = async () => {
        setError('');  
        setIsError(false); 

        try {
            const response = await signInUser(username, password);
            if (response && response.success) {
                setError('Incorrect username or password.');
                setIsError(true);  
            } else {
                navigation.navigate('(tabs)');
            }
        } catch (error) {
            setError('Sign-in failed. Please try again.');
            setIsError(true); 
        }
    };

    const toggleSecureTextEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const handleForgotPassword = () => {
        navigation.navigate('ForgotPassword');
    };

    return (
        <View style={styles.container}>
            {/* Vector Icon on top */}
            <Icon name="account-circle" size={100} color={colorsScheme.accent} style={styles.icon} />

            {/* Card for input fields */}
            <Card style={styles.card}>
                <Card.Content>
                    <Text style={styles.title}>Welcome to Relaxation App</Text>
                    <TextInput
                        label="Username"
                        value={username}
                        onChangeText={text => setUsername(text)}
                        mode="outlined"
                        theme={{
                          colors: {
                            primary: customColors.primary,
                            error: customColors.error,  
                          },
                          fonts: {
                            regular: { fontFamily: 'GeistSans', fontWeight: '400' },
                          },
                        }}
                        error={isError}
                    />
                    <View style={styles.passwordContainer}>
                        <TextInput
                            label="Password"
                            value={password}
                            onChangeText={text => setPassword(text)}
                            mode="outlined"
                            secureTextEntry={secureTextEntry}
                            theme={{
                              colors: {
                                primary: customColors.primary,
                                error: customColors.error,  
                              },
                              fonts: {
                                regular: { fontFamily: 'GeistSans', fontWeight: '400' },
                              },
                            }}
                            error={isError}
                        />
                        <TouchableOpacity onPress={toggleSecureTextEntry} style={styles.eyeIcon}>
                            <Icon name={secureTextEntry ? "eye-outline" : "eye-off-outline"} size={24} color={colorsScheme.accent} />
                        </TouchableOpacity>
                    </View>
                    {isError && <Text style={styles.errorText}>{error}</Text>}
                </Card.Content>
            </Card>
            <Button
                mode="contained"
                onPress={handleSignIn}
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
                Sign In
            </Button>
            <Button
                mode="outlined"
                style={styles.button}
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
                Sign Up
            </Button>

            <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText} >Forgot Password?</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f7f7f7', // Light background for modern feel
    },
    icon: {
        alignSelf: 'center',
        marginBottom: 20,
    },
    card: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        marginBottom: 15, // Default border color
    },
    errorInput: {
        borderColor: 'red', // Error border color
        borderWidth: 1,
    },
    button: {
        marginVertical: 10,
    },
    passwordContainer: {
        position: 'relative',
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
        top: 15,
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginTop: 10,
    },
    forgotPassword: {
        alignItems: 'center',
        marginTop: 20,
    },
    forgotPasswordText: {
        fontWeight: 'bold',
    },
});
