import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="menu-outline" size={24} color="white" />
          </TouchableOpacity>
          <Image source={require('../assets/kzvnt_tech_800x800.png')} style={styles.logo} />
          <TouchableOpacity>
            <Ionicons name="search-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <Text style={styles.welcome}>Welcome to our app, Lorem!</Text>

        <View style={styles.promoContainer}>
          <Text style={styles.promoText}>Promotional Advertisement</Text>
        </View>

        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.categoriesContainer}>
          <TouchableOpacity style={styles.categoryItem}>
            <Ionicons name="build-outline" size={50} color="black" />
            <Text>Repair</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Ionicons name="clipboard-outline" size={50} color="black" />
            <Text>Check-Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Ionicons name="brush-outline" size={50} color="black" />
            <Text>Cleaning</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Available Personnels</Text>
        <View style={styles.personnelsContainer}>
          {[1, 2, 3, 4].map((item) => (
            <TouchableOpacity key={item} style={styles.personnelItem}>
              <Ionicons name="person-circle-outline" size={40} color="gray" />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.personnelsContainer}>
          {[1, 2, 3, 4].map((item) => (
            <TouchableOpacity key={item} style={styles.personnelItem}>
              <Ionicons name="person-circle-outline" size={40} color="gray" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={24} color="black" />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="cart-outline" size={24} color="black" />
          <Text>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="mail-outline" size={24} color="black" />
          <Text>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="black" />
          <Text>Profile</Text>
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
    maxWidth: 200,
    maxHeight: 200,
    width: 50,
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
    backgroundColor: 'white',
    padding: 70,
    borderRadius: 20,
    marginBottom: 20,
  },
  promoText: {
    textAlign: 'center',
    color: 'gray',
  },
  sectionTitle: {
    fontStyle: 'normal',
    fontSize: 22,
    color: 'white',
    marginTop: 20,
    marginBottom: 25,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryItem: {
    backgroundColor: 'white',
    padding: 35,
    borderRadius: 20,
    alignItems: 'center',
  },
  personnelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
  },
  personnelItem: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 50,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navItem: {
    alignItems: 'center',
  },
});

export default HomeScreen;