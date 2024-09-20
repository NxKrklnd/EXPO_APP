import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Alert } from 'react-native';

const StartupScreen = ({ navigation }) => {
  useEffect(() => {
    // Navigate to the Login screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => clearTimeout(timer); // Clear the timer if the component is unmounted
  }, [navigation]);

  // Handle logout action when OK is pressed after clicking Logout
  const handleLogout = () => {
    Alert.alert("Logout", "You have been logged out.", [
      { text: "OK", onPress: () => navigation.replace('StartupScreen') }
    ]);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/kzvnt_tech_800x800.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
  },
  logo: {
    width: '100%', // Adjust the width and height as needed
    height: '100%',
    resizeMode: 'contain',
  },
  subText: {
    width: 150, // Adjust the width and height as needed
    height: 50,
    marginTop: 10,
    resizeMode: 'contain',
  },
});

export default StartupScreen;
