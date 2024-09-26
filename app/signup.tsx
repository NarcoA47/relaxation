import { customColors } from '@/constants/Colors';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, TextInput, Card, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { signUpUser } from '../middleware/apiConfig';

export default function SignUpScreen() {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [error, setError] = useState('');
    const [isError, setIsError] = useState(false);
    const { colors } = useTheme();

    const handleSignUp = async () => {
        setError('');
        setIsError(false);

        try {
            const response = await signUpUser({ username, email, password });
            if (response && response.success) {
                
                setError('Sign-up failed. Please try again.');
                setIsError(true);
            } else {
              navigation.navigate('(tabs)');
            }
        } catch (error) {
            setError('Sign-up failed. Please try again.');
            setIsError(true);
        }
    };

    const toggleSecureTextEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    return (
        <View style={styles.container}>
            <Icon name="account-plus" size={100} color={customColors.accent} style={styles.icon} />

            <Card style={styles.card}>
                <Card.Content>
                    <Text style={styles.title}>Create a New Account</Text>
                    <TextInput
                        label="Username"
                        value={username}
                        onChangeText={setUsername}
                        mode="outlined"
                        theme={{
                            colors: { primary: customColors.primary, error: customColors.error },
                            fonts: { regular: { fontFamily: 'GeistSans', fontWeight: '400' } },
                        }}
                        error={isError}
                    />
                    <TextInput
                        label="Email"
                        value={email}
                        onChangeText={setEmail}
                        mode="outlined"
                        theme={{
                            colors: { primary: customColors.primary, error: customColors.error },
                            fonts: { regular: { fontFamily: 'GeistSans', fontWeight: '400' } },
                        }}
                        error={isError}
                    />
                    <View style={styles.passwordContainer}>
                        <TextInput
                            label="Password"
                            value={password}
                            onChangeText={setPassword}
                            mode="outlined"
                            secureTextEntry={secureTextEntry}
                            theme={{
                                colors: { primary: customColors.primary, error: customColors.error },
                                fonts: { regular: { fontFamily: 'GeistSans', fontWeight: '400' } },
                            }}
                            error={isError}
                        />
                        <TouchableOpacity onPress={toggleSecureTextEntry} style={styles.eyeIcon}>
                            <Icon name={secureTextEntry ? "eye-outline" : "eye-off-outline"} size={24} color={customColors.accent} />
                        </TouchableOpacity>
                    </View>
                    {isError && <Text style={styles.errorText}>{error}</Text>}
                </Card.Content>
            </Card>
            <Button
                mode="contained"
                onPress={handleSignUp}
                theme={{
                    colors: { primary: customColors.primary, text: customColors.text },
                    fonts: { regular: { fontFamily: 'GeistSans', fontWeight: '800' } },
                }}
            >
                Sign Up
            </Button>
            <TouchableOpacity onPress={() => navigation.navigate('signin')} style={styles.signInLink}>
                <Text style={styles.signInText}>Already have an account? Sign In</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f7f7f7',
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
    signInLink: {
        alignItems: 'center',
        marginTop: 20,
    },
    signInText: {
        fontWeight: 'bold',
    },
});
