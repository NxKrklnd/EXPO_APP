import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // This is a simple check. In a real app, you'd validate against a backend.
    if (username === 'user' && password === 'password') {
      navigation.navigate('Home');
    } else {
      Alert.alert('Login Failed', 'Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>KAZERVANT</Text>
        <Text style={styles.subText}>TECHNOLOGIES</Text>
      </View>

      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#aaa" style={styles.icon} />
        <TextInput 
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#aaa" style={styles.icon} />
        <TextInput 
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Register Here</Text>
      </TouchableOpacity>

      <Text style={styles.credText}>@2024 Kazervant Technologies. All Rights Reserved</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
  },
  logoContainer: {
    marginBottom: 50,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 12,
    color: 'white',
    letterSpacing: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
  loginButton: {
    width: '40%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'transparent',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
  },
  registerText: {
    color: 'white',
    marginTop: 20,
    fontSize: 16,
  },
  credText: {
    color: 'white',
    marginTop: 40,
    fontSize: 12,
    textAlign: 'center',
    position: 'absolute',
    bottom: 30,
  }
});

export default LoginScreen;