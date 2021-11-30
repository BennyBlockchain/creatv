/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SwipeableMenu from '../components/SwipeableMenu';

const transactions = [
  { received: true, message: 'Received a tip from @alex', amount: '10,000' },
  { received: true, message: 'Received a tip from @alex', amount: '10,000' },
  { received: false, message: 'Sent a tip to @drboon', amount: '500' },
  { received: false, message: 'Subscribed to @satoshi', amount: '5,000' },
  {
    received: true,
    message: 'Received a subscription from @alex',
    amount: '4,500',
  },
  { received: true, message: 'Received a tip from @bill', amount: '5' },
  { received: false, message: 'Sent a tip to @alex', amount: '8,000' },
  { received: false, message: 'Sent a tip to @adam', amount: '550' },
  { received: true, message: 'Received a tip from @dorian', amount: '100,000' },
  {
    received: true,
    message: 'Received a subscription from @obama',
    amount: '650',
  },
  { received: false, message: 'Sent a tip to @kenzie', amount: '750' },
  { received: true, message: 'Received a tip from @grandpa', amount: '7,500' },
  { received: true, message: 'Received a tip from @tim', amount: '650' },
];

const Transaction = ({ received, message, amount }) => {
  const color = received ? '#00aa00' : '#ff9900';
  return (
    <View style={{ flex: 1, flexDirection: 'row', marginVertical: 5 }}>
      <View style={{ backgroundColor: color, borderRadius: 100, padding: 2 }}>
        <Ionicons
          name={received ? 'arrow-back' : 'arrow-forward'}
          size={20}
          color="#fff"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: 10,
        }}
      >
        <Text style={{ fontSize: 14 }}>
          {message} for {amount} sats.
        </Text>
      </View>
    </View>
  );
};

function Wallet({ navigation }) {
  const [displayMenu, setDisplayMenu] = useState(false);
  return (
    <SafeAreaView style={styles.safe_area}>
      <View style={styles.wallet_container}>
        <Text style={styles.wallet_text}>Wallet</Text>
        <Text style={styles.balance_text}>1,928,234 sats</Text>
      </View>
      <View style={styles.tx_container}>
        <ScrollView>
          {transactions.map((tx, index) => {
            return (
              <Transaction
                received={tx.received}
                message={tx.message}
                amount={tx.amount}
                key={index}
              />
            );
          })}
        </ScrollView>
      </View>
      <SwipeableMenu
        displayMenu={displayMenu}
        setDisplayMenu={setDisplayMenu}
        navigation={navigation}
      />
      {!displayMenu && (
        <TouchableOpacity
          style={styles.swipable_button}
          activeOpacity={0.75}
          onPress={() => setDisplayMenu(true)}
        >
          <Text style={styles.swipeable_text}>+</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe_area: {
    backgroundColor: '#aaa',
  },
  wallet_container: {
    height: '10%',
    paddingLeft: 20,
    paddingVertical: 25,
  },
  wallet_text: {
    color: '#fff',
    fontSize: 18,
  },
  balance_text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
  },
  tx_container: {
    height: '90%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginBottom: 40,
    padding: 25,
  },
  swipable_button: {
    position: 'absolute',
    top: '95%',
    left: '80%',
    backgroundColor: '#000',
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
  },
  swipeable_text: {
    position: 'absolute',
    textAlign: 'center',
    color: '#fff',
    fontSize: 40,
    left: 13,
    top: -2,
  },
});

export default Wallet;
