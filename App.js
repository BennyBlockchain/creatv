/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import Wallet from './screens/Wallet';
import Profile from './screens/Profile';

import Welcome from './components/onboarding/Welcome';
import Mnemonic from './components/onboarding/Mnemonic';
import StartLightning from './components/onboarding/StartLightning';
import ConnectPeers from './components/onboarding/ConnectPeers';
import OpenChannel from './components/onboarding/OpenChannel';
import FundChannel from './components/onboarding/FundChannel';

const Root = createStackNavigator();

const RootStack = ({ onboarded }) => {
  return (
    <Root.Navigator initialRouteName={onboarded ? 'Home' : 'Welcome'}>
      <Root.Group screenOptions={{ headerShown: false }}>
        <Root.Screen name="Welcome" component={Welcome} />
        <Root.Screen name="Mnemonic" component={Mnemonic} />
        <Root.Screen name="StartLightning" component={StartLightning} />
        <Root.Screen name="ConnectPeers" component={ConnectPeers} />
        <Root.Screen name="OpenChannel" component={OpenChannel} />
        <Root.Screen name="FundChannel" component={FundChannel} />
      </Root.Group>
      <Root.Group screenOptions={{ headerShown: false }}>
        <Root.Screen name={'Home'} component={Home} />
        <Root.Screen name={'Wallet'} component={Wallet} />
        <Root.Screen name={'Profile'} component={Profile} />
      </Root.Group>
    </Root.Navigator>
  );
};

const Loading = () => {
  return (
    <View
      style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}
    >
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnboarding');
      if (value !== null) {
        setViewedOnboarding(true);
      }
    } catch (err) {
      console.log('Error retrieving @viewedOnboarding in App.tsx', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, []);

  return (
    <NavigationContainer>
      {loading ? <Loading /> : <RootStack onboarded={viewedOnboarding} />}
    </NavigationContainer>
  );
}
