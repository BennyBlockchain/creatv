/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SwipeablePanel } from 'rn-swipeable-panel';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Swipeable(props) {
  const { displayMenu, setDisplayMenu, navigation } = props;
  return (
    <SwipeablePanel
      style={styles.panel}
      fullWidth={true}
      openLarge={false}
      isActive={displayMenu}
      closeOnTouchOutside={true}
      onClose={() => setDisplayMenu(false)}
    >
      <View style={styles.panel_list}>
        <TouchableOpacity
          style={styles.panel_page}
          onPress={() => {
            setDisplayMenu(false);
            navigation.navigate('Home');
          }}
        >
          <Ionicons name="home" size={32} />
          <Text style={styles.panel_page_text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.panel_page}
          onPress={() => {
            setDisplayMenu(false);
            navigation.navigate('Wallet');
          }}
        >
          <Ionicons name="wallet" size={32} />
          <Text style={styles.panel_page_text}>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.panel_page}
          onPress={() => {
            setDisplayMenu(false);
            navigation.navigate('Profile');
          }}
        >
          <Ionicons name="person" size={32} />
          <Text style={styles.panel_page_text}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SwipeablePanel>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: '#eee',
  },
  panel_list: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  panel_page: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  panel_page_text: {
    paddingLeft: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Swipeable;
