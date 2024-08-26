import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomepageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>WELCOME</Text>
        <Text style={styles.subText}>TO OUR WEBSITE</Text>
      </View>

      <TouchableOpacity style={styles.exploreButton}>
        <Text style={styles.buttonText}>Explore</Text>
      </TouchableOpacity>

      <Text style={styles.credText}>@2024 Your Company Name. All Rights Reserved</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
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
  exploreButton: {
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
  buttonText: {
    color: 'white',
    fontSize: 18,
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

export default HomepageScreen;