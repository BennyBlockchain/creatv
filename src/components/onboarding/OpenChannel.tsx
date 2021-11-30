/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import RnLdk from 'rn-ldk';

import QRCode from 'react-native-qrcode-svg';
import Clipboard from '@react-native-community/clipboard';
import DepositImage from '../../assets/deposit.png';

function OpenChannel({navigation}) {
  const [displayAddress, setDisplayAddress] = useState('');
  const [fundingAddr, setFundingAddr] = useState(false);
  const [loading, setLoading] = useState(false);

  const escapeOnboarding = async () => {
    try {
      await AsyncStorage.setItem('@viewedOnboarding', 'true');
      navigation.navigate('Home');
    } catch (err) {
      console.log('Error setting @viewedOnboarding', err);
    }
  };

  const openChannel = async () => {
    setLoading(true);
    const address = await RnLdk.openChannelStep1(
      '02004c625d622245606a1ea2c1c69cfb4516b703b47945a3647713c05fe4aaeb1c',
      100000,
    );
    console.log(address);
    if (address) {
      setLoading(false);
      setDisplayAddress(address);
    }
  };

  return (
    <SafeAreaView style={styles.safe_area}>
      {loading ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            backgroundColor: '#000',
          }}>
          <ActivityIndicator size="large" color="#fff" />
          <Text style={{color: '#fff'}}>Getting deposit address...</Text>
        </View>
      ) : (
        <>
          <View style={styles.channel_container}>
            {displayAddress !== '' ? (
              <>
                <Text style={styles.channel_text}>Deposit Address</Text>
                <QRCode
                  value={displayAddress}
                  size={200}
                  backgroundColor="#ffffff"
                />
                <TouchableOpacity
                  onPress={() => Clipboard.setString(displayAddress)}>
                  <View style={styles.address_container}>
                    <Text style={styles.address_text} numberOfLines={1}>
                      {displayAddress}
                    </Text>
                  </View>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={styles.channel_text}>Get Deposit Address</Text>
                <Image style={styles.image} source={DepositImage} />
              </>
            )}
          </View>

          {!fundingAddr ? (
            <Pressable
              style={styles.open_channel}
              onPress={() => openChannel().then(() => setFundingAddr(true))}>
              <Text>Open Channel w/ Peer</Text>
            </Pressable>
          ) : (
            <Pressable
              style={styles.open_channel}
              onPress={() => navigation.navigate('FundChannel')}>
              <Text>Next</Text>
            </Pressable>
          )}
          <Pressable onPress={() => escapeOnboarding()}>
            <Text style={styles.skip}>Open Channel Later</Text>
          </Pressable>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe_area: {
    backgroundColor: '#000000',
    height: '100%',
    alignItems: 'center',
  },
  channel_container: {
    backgroundColor: '#000000',
    height: '92%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  channel_text: {
    color: '#ffffff',
    fontSize: 32,
    marginBottom: 25,
  },
  image: {
    height: 250,
    width: 250,
  },
  address_container: {
    borderWidth: 1,
    borderColor: '#999',
    width: '75%',
    padding: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 25,
  },
  address_text: {
    color: '#ffffff',
  },
  open_channel: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    height: 40,
    borderRadius: 10,
  },
  skip: {
    color: '#aaa',
    paddingTop: 10,
  },
});

export default OpenChannel;
