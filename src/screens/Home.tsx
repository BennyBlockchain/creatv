/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SwipeableMenu from '../components/SwipeableMenu';
import Post from '../components/Post';
import posts from '../_data/posts.json';

function Home({ navigation }) {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <>
      <SafeAreaView style={{ backgroundColor: '#fff' }}>
        <ScrollView>
          <View style={styles.container}>
            {posts.map((post) => {
              return <Post post={post} key={post.postId} />;
            })}
            <Button
              title="Purge storage"
              onPress={() => AsyncStorage.removeItem('@viewedOnboarding')}
            />
          </View>
        </ScrollView>
        <SwipeableMenu
          displayMenu={displayMenu}
          setDisplayMenu={setDisplayMenu}
          navigation={navigation}
        />
      </SafeAreaView>
      {!displayMenu && (
        <TouchableOpacity
          style={styles.swipable_button}
          activeOpacity={0.75}
          onPress={() => setDisplayMenu(true)}
        >
          <Text style={styles.swipeable_text}>+</Text>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  swipable_button: {
    position: 'absolute',
    top: '90%',
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

export default Home;
