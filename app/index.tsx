import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Text, Button, TextInput, Card, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BlurView } from 'expo-blur';  // Import BlurView
import { customColors } from '@/constants/Colors';
import { useNavigation } from 'expo-router';
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
            <ImageBackground
                source={require('../assets/images/2.jpg')} 
                style={styles.background}
                >
                    
                    <Card style={styles.card}>
                        <Card.Content>
                            <Icon name="account-circle" size={100} color={colorsScheme.textWhite} style={styles.icon} />
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
                        <Button
                            mode="outlined"
                            onPress={handleSignIn}
                            style={styles.button}
                            theme={{
                                colors: {
                                    primary: colorsScheme.textWhite,
                                    text: colorsScheme.textWhite,
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
                            onPress={() => navigation.navigate('signup')}
                            theme={{
                                colors: {
                                    primary: colorsScheme.textWhite,
                                    text: colorsScheme.textWhite,
                                },
                                fonts: {
                                    regular: { fontFamily: 'GeistSans', fontWeight: '800' },
                                },
                            }}
                        >
                            Sign Up
                        </Button>
                        <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPassword}>
                            <Text  style={styles.forgotPasswordText}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </Card>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f7f7f7',
    },
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    blurView: {
        backgroundColor: 'none',
        justifyContent: 'center',
        padding: 20,
        margin: 20,
        borderRadius: 15,
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 15,
        padding: 20,
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 10,
    },
    icon: {
        alignSelf: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        
    },
    button: {
        marginVertical: 10,
        margin: 20,
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
        marginBottom: 20,
        color: '#ffffff'
    },
    forgotPasswordText: {
        fontWeight: 'bold',
    },
});
