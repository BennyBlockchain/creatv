/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import RnLdk from 'rn-ldk';

import FundChannelImage from '../../assets/fund.png';

function FundChannel({navigation}) {
  const [confirmDeposit, setConfirmDeposit] = useState(false);
  const [txInput, setTxInput] = useState('');

  const fundChannel = async txId => {
    alert(txId);
    setConfirmDeposit(true);
    // await RnLdk.openChannelStep2(txId);
  };

  const escapeOnboarding = async () => {
    try {
      await AsyncStorage.setItem('@viewedOnboarding', 'true');
      navigation.navigate('Home');
    } catch (err) {
      console.log('Error setting @viewedOnboarding', err);
    }
  };

  return (
    <SafeAreaView style={styles.safe_area}>
      <View style={styles.fund_container}>
        <Text style={styles.fund_text}>Fund Channel</Text>
        <Text style={styles.fund_subtext}>
          Provide your transaction id that you deposited your Bitcoin to the
          previous address
        </Text>
        <Image style={styles.image} source={FundChannelImage} />
        <TextInput
          style={styles.input}
          onChangeText={setTxInput}
          value={txInput}
          placeholder="Enter transaction id..."
        />
      </View>
      {!confirmDeposit ? (
        <Pressable
          style={styles.fund_channel}
          onPress={() => fundChannel(txInput)}>
          <Text>Confirm Deposit</Text>
        </Pressable>
      ) : (
        <Pressable
          style={styles.fund_channel}
          onPress={() => escapeOnboarding()}>
          <Text>Go to ~/creatv</Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe_area: {
    backgroundColor: '#000',
    height: '100%',
    alignItems: 'center',
  },
  fund_container: {
    backgroundColor: '#000000',
    height: '95%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fund_text: {
    color: '#fff',
    fontSize: 32,
  },
  fund_subtext: {
    color: '#aaa',
    textAlign: 'center',
    width: '75%',
  },
  input: {
    marginTop: 25,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    width: '75%',
  },
  image: {
    marginTop: 25,
    height: 250,
    width: 250,
  },
  fund_channel: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    height: 40,
    borderRadius: 10,
  },
});

export default FundChannel;
