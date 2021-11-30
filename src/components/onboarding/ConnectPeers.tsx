/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';

import PeersImage from '../../assets/peer.png';

import RnLdk from 'rn-ldk';

type NodeConnect = {
  alias: string;
  pubkey: string;
  address: string;
  port: number;
};
const acinqNode: NodeConnect = {
  alias: 'ACINQ',
  pubkey: '03864ef025fde8fb587d989186ce6a4a186895ee44a926bfc370e2c366597a3f8f',
  address: '34.239.230.56',
  port: 9735,
};

const lndNode: NodeConnect = {
  alias: 'LND',
  pubkey: '02004c625d622245606a1ea2c1c69cfb4516b703b47945a3647713c05fe4aaeb1c',
  address: '172.81.178.151',
  port: 9735,
};

// const bensNode: NodeConnect = {
//   alias: 'Ben',
//   pubkey: '028565814de3c0e68be40c35c6c5aeba0369ab9d0391a6e600e03a42987099401e',
//   address: '192.168.1.186',
//   port: 9735,
// };
const connectPeers = async () => {
  RnLdk.connectPeer(acinqNode.pubkey, acinqNode.address, acinqNode.port).then(
    () => console.log('Connected to ACINQ.'),
  );
  RnLdk.connectPeer(lndNode.pubkey, lndNode.address, lndNode.port).then(() =>
    console.log('Connected to LND.'),
  );
  // try {
  //   console.warn('Trying bens node.');
  //   RnLdk.connectPeer(bensNode.pubkey, bensNode.address, bensNode.port);
  // } catch (e) {
  //   console.log('Error connecting to bens node');
  // }

  return [acinqNode, lndNode];
};

function ConnectPeers({navigation}) {
  const [loading, setLoading] = useState(false);
  const [connPeers, setConnPeers] = useState(false);
  console.log('loading: ', loading);
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
          <Text style={{color: '#fff'}}>Connecting to LND and ACINQ</Text>
        </View>
      ) : (
        <>
          <View style={styles.connect_container}>
            {!connectPeers ? (
              <>
                <Text style={styles.connect_text}>
                  Let's connect some peers
                </Text>
                <Text style={styles.connect_subtext}>
                  Connecting to peers allows you to support your favorite
                  creators!
                </Text>
              </>
            ) : (
              <Text style={styles.connect_text}>Connected to LND + ACINQ</Text>
            )}
            <Image style={styles.image} source={PeersImage} />
          </View>
          {!connPeers ? (
            <Pressable
              style={styles.connect_peers}
              onPress={() => {
                setLoading(true);
                connectPeers().then(() => {
                  setConnPeers(true);
                  setLoading(false);
                });
              }}>
              <Text>Connect to ⚡️ peers</Text>
            </Pressable>
          ) : (
            <Pressable
              style={styles.connect_peers}
              onPress={() => navigation.navigate('OpenChannel')}>
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
  connect_container: {
    backgroundColor: '#000000',
    height: '95%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  connect_text: {
    color: '#ffffff',
    fontSize: 32,
  },
  connect_subtext: {
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 10,
  },
  image: {
    marginTop: 25,
    width: 250,
    height: 250,
  },
  connect_peers: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    height: 40,
    borderRadius: 10,
  },
});

export default ConnectPeers;
