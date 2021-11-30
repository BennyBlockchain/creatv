/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView } from 'react-native';
// import bip39 from 'react-native-bip39';

// const getSeed = async () => {
//   try {
//     return await bip39.generateMnemonic();
//   } catch (e) {
//     console.warn('Error with bip39', e);
//   }
// };

// Mnemonic
// phrase: hotel milk fashion capital biology virtual caught inject behave memory unveil attend

/**
 * ? useEffect for generating seed on page load.
 * TODO: Add BIP39 generated seed.
 */
const seed =
  '8159ea26f7ed857987d43813c7b301ef886c261e470a9112bed59fd2c13eb3e20606d8ba7af94600375d7305451f2829d802728627cbe4914a7fafc2ef370598';

const seed_phrase = [
  'hotel',
  'milk',
  'fashion',
  'capital',
  'biology',
  'virtual',
  'caught',
  'inject',
  'behave',
  'memory',
  'unveil',
  'attend',
];

const Mnemonic = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safe_area}>
      <View style={styles.mnemonic_container}>
        <Text style={styles.mnemonic_text}>
          This is the seed to your ~/creatv account and wallet.
        </Text>
        <Text style={styles.mnemonic_text}>Write this down and save it!</Text>
        <View style={styles.seed_contatiner}>
          {seed_phrase.map((word, index) => {
            return (
              <View key={index} style={styles.seed_word}>
                <Text>
                  {index + 1}. {word}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
      <Pressable
        style={styles.start_lightning}
        onPress={() => {
          navigation.navigate('StartLightning', { entropy: seed });
        }}
      >
        <Text>Next</Text>
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
  mnemonic_container: {
    backgroundColor: '#000000',
    height: '95%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mnemonic_text: {
    color: '#ffffff',
    fontSize: 18,
  },
  seed_contatiner: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 50,
  },
  seed_word: {
    color: '#000000',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    width: 100,
    fontSize: 20,
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
  start_lightning: {
    backgroundColor: '#ffffff',
    width: '75%',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Mnemonic;
