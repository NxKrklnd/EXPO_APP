import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, Modal, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isButtonModalVisible, setButtonModalVisible] = useState(false);
  const [buttonMessage, setButtonMessage] = useState('');

  const handleLogout = () => {
    setModalVisible(false);
    Alert.alert("Logout", "You have been logged out.", [
      { text: "OK", onPress: () => navigation.replace('Startup') } // Ensure it navigates to 'Startup'
    ]);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleButtonPress = (message) => {
    setButtonModalVisible(true);
    setButtonMessage(message);
  };

  const handleButtonModalClose = () => {
    setButtonModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Modal acting as a drawer */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={toggleModal} style={styles.modalCloseButton}>
            <Ionicons name="close-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout} style={styles.modalMenuItem}>
            <Ionicons name="log-out-outline" size={24} color="black" />
            <Text style={styles.modalMenuItemText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Button modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isButtonModalVisible}
        onRequestClose={handleButtonModalClose}
      >
        <View style={styles.buttonModalContainer}>
          <Text style={styles.buttonModalText}>{buttonMessage}</Text>
          <TouchableOpacity onPress={handleButtonModalClose} style={styles.buttonModalCloseButton}>
            <Ionicons name="close-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </Modal>

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={toggleModal} onLongPress={() => handleButtonPress('Menu button pressed')}>
            <Ionicons name="menu-outline" size={24} color="white" />
          </TouchableOpacity>
          <Image source={require('../assets/app_logo.png')} style={styles.logo} />
          <TouchableOpacity onLongPress={() => handleButtonPress('Search button pressed')}>
            <Ionicons name="search-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <Text style={styles.welcome}>Welcome to our app!</Text>

        <View style={styles.promoContainer}>
          <Text style={styles.promoText}>KVNT LOGO</Text>
        </View>

        <Text style={styles.sectionTitle}>Our Services</Text>

        {/* Swipeable services */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.servicesScrollView}>
          {/* Larger Repair Service */}
          <TouchableOpacity style={[styles.largeServiceItem, { width: 180, padding: 35 }]} onLongPress={() => handleButtonPress('Repair service pressed')}>
            <Ionicons name="build-outline" size={90} color="#3498db" />
            <Text style={styles.serviceText}>Repair</Text>
          </TouchableOpacity>
          {/* Other Services */}
          <TouchableOpacity style={[styles.serviceItem, { width: 160, padding: 30 }]} onLongPress={() => handleButtonPress('Check-Up service pressed')}>
            <Ionicons name="clipboard-outline" size={70} color="#3498db" />
            <Text style={styles.serviceText}>Check-Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.serviceItem, { width: 160, padding: 30 }]} onLongPress={() => handleButtonPress('Cleaning service pressed')}>
            <Ionicons name="brush-outline" size={70} color="#3498db" />
            <Text style={styles.serviceText}>Cleaning</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.serviceItem, { width: 160, padding: 30 }]} onLongPress={() => handleButtonPress('Car Wash service pressed')}>
            <Ionicons name="car-outline" size={70} color="#3498db" />
            <Text style={styles.serviceText}>Car Wash</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.serviceItem, { width: 160, padding: 30 }]} onLongPress={() => handleButtonPress('Home Repair service pressed')}>
            <Ionicons name="home-outline" size={70} color="#3498db" />
            <Text style={styles.serviceText}>Home Repair</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.serviceItem, { width: 160, padding: 30 }]} onLongPress={() => handleButtonPress('Bike Maintenance service pressed')}>
            <Ionicons name="bicycle-outline" size={70} color="#3498db" />
            <Text style={styles.serviceText}>Bike Maintenance</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.serviceItem, { width: 160, padding: 30 }]} onLongPress={() => handleButtonPress('Construction service pressed')}>
            <Ionicons name="hammer-outline" size={70} color="#3498db" />
            <Text style={styles.serviceText}>Construction</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.serviceItem, { width: 160, padding: 30 }]} onLongPress={() => handleButtonPress('Food Delivery service pressed')}>
            <Ionicons name="fast-food-outline" size={70} color="#3498db" />
            <Text style={styles.serviceText}>Food Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.serviceItem, { width: 160, padding: 30 }]} onLongPress={() => handleButtonPress('Personal Assistant service pressed')}>
            <Ionicons name="man-outline" size={70} color="#3498db" />
            <Text style={styles.serviceText}>Personal Assistant</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.serviceItem, { width: 160, padding: 30 }]} onLongPress={() => handleButtonPress('Healthcare service pressed')}>
            <Ionicons name="medkit-outline" size={70} color="#3498db" />
            <Text style={styles.serviceText}>Healthcare</Text>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>

      {/* Bottom navigation bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onLongPress={() => handleButtonPress('Home button pressed')}>
          <Ionicons name="home-outline" size={24} color="black" />
          <Text style={styles .navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onLongPress={() => handleButtonPress('Shop button pressed')}>
          <Ionicons name="cart-outline" size={24} color="black" />
          <Text style={styles.navText}>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onLongPress={() => handleButtonPress('Inbox button pressed')}>
          <Ionicons name="mail-outline" size={24} color="black" />
          <Text style={styles.navText}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onLongPress={() => handleButtonPress('Profile button pressed')}>
          <Ionicons name="person-outline" size={24} color="black" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db', // Clean blue background
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
  },
  welcome: {
    fontStyle: 'italic',
    fontSize: 22,
    color: 'white',
    marginTop: 20,
    marginBottom: 25,
  },
  promoContainer: {
    backgroundColor: '#fff',
    padding: 50,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  promoText: {
    textAlign: 'center',
    color : 'gray',
  },
  sectionTitle: {
    fontStyle: 'normal',
    fontSize: 22,
    color: 'white',
    marginTop: 20,
    marginBottom: 25,
  },
  servicesScrollView: {
    flexDirection: 'row',
    paddingLeft: 10,
  },
  largeServiceItem: {
    backgroundColor: '#fff',
    padding: 35, 
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center', 
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    marginRight: 15,
    width: 180, 
  },
  serviceItem: {
    backgroundColor: '#fff',
    padding: 30, 
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center', 
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    marginRight: 15,
    width: 160, 
  },
  serviceText: {
    color: '#3498db',
    marginTop: 5,
    textAlign: 'center', 
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#3498db',
  },
  modalContainer: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  modalCloseButton: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  modalMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  modalMenuItemText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#3498db',
  },
  buttonModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  buttonModalText: {
    fontSize: 18,
    color: 'white',
    padding: 20,
    backgroundColor: '#3498db',
    borderRadius: 10,
  },
  buttonModalCloseButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default HomeScreen;