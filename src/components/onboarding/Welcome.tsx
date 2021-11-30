/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import WelcomeImage from '../../assets/wallet.png';

const Welcome = ({ navigation }) => {
  const escapeOnbording = async () => {
    try {
      await AsyncStorage.setItem('@viewedOnboarding', 'true');
      navigation.navigate('Home');
    } catch (err) {
      console.log('Error setting @viewedOnboarding:', err);
    }
  };

  return (
    <SafeAreaView style={styles.safe_area}>
      <View style={styles.welcome_container}>
        <Text style={styles.welcome_text}>Welcome to ~/creatv</Text>
        <Text style={styles.welcome_subtext}>
          Social media built for the creators.
        </Text>
        <Image source={WelcomeImage} style={styles.image} />
      </View>
      <Pressable
        style={styles.create_wallet}
        onPress={() => navigation.navigate('Mnemonic')}
      >
        <Text>Next</Text>
      </Pressable>
      <Pressable onPress={() => escapeOnbording()}>
        <Text style={styles.skip}>Skip</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe_area: {
    backgroundColor: '#000000',
    height: '100%',
    alignItems: 'center',
  },
  welcome_container: {
    backgroundColor: '#000000',
    height: '92%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome_text: {
    color: '#ffffff',
    fontSize: 32,
  },
  welcome_subtext: {
    color: '#cccccc',
    paddingTop: 10,
  },
  image: {
    marginTop: 25,
    width: 250,
    height: 250,
  },
  skip: {
    color: '#aaa',
    paddingTop: 10,
  },
  create_wallet: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    height: 40,
    borderRadius: 10,
  },
});

export default Welcome;
