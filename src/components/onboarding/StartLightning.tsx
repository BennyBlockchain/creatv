/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from 'react-native';

import RnLdk from 'rn-ldk';
import SyncedAsyncStorage from '../../synced-async-storage';

import StartLdkImage from '../../assets/start-ldk.png';

const startLdk = async entropy => {
  const syncedStorage = new SyncedAsyncStorage(entropy);
  await syncedStorage.selftest();
  await RnLdk.selftest();
  await syncedStorage.synchronize();

  RnLdk.setStorage(syncedStorage);
  RnLdk.setRefundAddressScript(
    '76a91419129d53e6319baf19dba059bead166df90ab8f588ac',
  );
  RnLdk.start(entropy).then(console.log);
};

function StartLightning({navigation, route}) {
  const entropy = route.params.entropy;
  const [loading, setLoading] = useState(false);
  const [nodeStarted, setNodeStarted] = useState(false);
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
          <Text style={{color: '#fff'}}>Starting your node...</Text>
        </View>
      ) : (
        <>
          <View style={styles.start_container}>
            {!nodeStarted ? (
              <>
                <Text style={styles.start_text}>Start your node</Text>
                <Text style={styles.start_subtext}>
                  Starting a Lightning node connects you to participating on the
                  ~/creatv app!
                </Text>
              </>
            ) : (
              <Text style={styles.start_text}>Node started!</Text>
            )}
            <Image source={StartLdkImage} style={styles.image} />
          </View>
          {!nodeStarted ? (
            <Pressable
              style={styles.start_lightning}
              onPress={() => {
                try {
                  setLoading(true);
                  startLdk(entropy).then(() => {
                    setNodeStarted(true);
                    setLoading(false);
                  });
                } catch (e) {
                  console.warn("Node wasn't started", e);
                }
              }}>
              <Text>Start your ⚡️ node!</Text>
            </Pressable>
          ) : (
            <Pressable
              style={styles.start_lightning}
              onPress={() => navigation.navigate('ConnectPeers')}>
              <Text>Next</Text>
            </Pressable>
          )}
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
  start_container: {
    backgroundColor: '#000000',
    height: '95%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  start_text: {
    color: '#ffffff',
    fontSize: 32,
  },
  start_subtext: {
    color: '#cccccc',
    textAlign: 'center',
    width: '75%',
  },
  image: {
    marginTop: 25,
    width: 250,
    height: 250,
  },
  start_lightning: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    height: 40,
    borderRadius: 10,
  },
});

export default StartLightning;
