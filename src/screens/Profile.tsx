/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import SwipeableMenu from '../components/SwipeableMenu';
import Post from '../components/Post';

const posts = [
  {
    postId: '1',
    username: 'bennyblockchain',
    author: 'ben',
    avatar:
      'https://pbs.twimg.com/profile_images/1435455716454805504/WL9ksAgT_400x400.jpg',
    post: "Bitcoin ipsum dolor sit amet. Miner Merkle Tree I'm in it for the tech hodl transaction genesis block address stacking sats.",
    date: '3h',
    image:
      'https://static.news.bitcoin.com/wp-content/uploads/2020/01/WhEUrarJ-bitcoin-sign-guy.jpg',
    engagement: {
      replies: 1,
      likes: 12,
      shares: 2,
      tips: 150,
    },
  },
  {
    postId: '2',
    username: 'bennyblockchain',
    author: 'evan',
    avatar:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thefamouspeople.com%2Fprofiles%2Fimages%2Fevan-joseph-asher-1.jpg&f=1&nofb=1',
    post: 'Satoshis roller coaster decentralized genesis block digital signature soft fork proof-of-work segwit. Stacking sats block height, few understand this difficulty satoshis volatility transaction proof-of-work!',
    date: '4h',
    image:
      'https://dailycoin.com/wp-content/uploads/2020/06/bitcoin-meme-4.jpg',
    engagement: {
      replies: 0,
      likes: 20,
      shares: 5,
      tips: 10,
    },
  },
  {
    postId: '3',
    username: 'bennyblockchain',
    author: 'susan',
    avatar:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette4.wikia.nocookie.net%2Ftkoc%2Fimages%2F3%2F3a%2FLazy_susan.png%2Frevision%2Flatest%3Fcb%3D20140728082318%26path-prefix%3Dpt-br&f=1&nofb=1',
    post: 'Money printer go brrrrr pizza.',
    date: '4h',
    engagement: {
      replies: 3,
      likes: 40,
      shares: 1,
      tips: 50,
    },
  },
  {
    postId: '4',
    username: 'bennyblockchain',
    author: 'bob',
    avatar:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.preoccupiedterritory.com%2Fwp-content%2Fuploads%2F2016%2F05%2FBob-the-Zionist-Builder.png&f=1&nofb=1',
    post: 'Soft fork hash private key public key SHA-256 decentralized inputs transaction, stacking sats!',
    date: '5h',
    engagement: {
      replies: 2,
      likes: 13,
      shares: 0,
      tips: 123,
    },
  },
  {
    postId: '5',
    username: 'bennyblockchain',
    author: 'satoshi',
    avatar:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyellowrocketagency.com%2Fwp-content%2Fuploads%2F2021%2F09%2FSatoshi-Nakamoto-Statue1..jpg&f=1&nofb=1',
    post: "I'm in it for the tech hyperbitcoinization blockchain public key block height cryptocurrency address.",
    date: '5h',
    engagement: {
      replies: 4,
      likes: 23,
      shares: 5,
      tips: 650,
    },
  },
];
const ProfileHeader = () => {
  return (
    <View>
      <View style={{ height: '80%' }}>
        <Image
          style={{ resizeMode: 'cover', height: '100%', width: '100%' }}
          source={{
            uri: 'https://pbs.twimg.com/profile_banners/1304412280902352896/1622003421/1500x500',
          }}
        />
      </View>
      <View>
        <Image
          style={{
            height: 75,
            width: 75,
            position: 'absolute',
            top: -25,
            left: 15,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: '#fff',
          }}
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1460475277335740417/-_XMxsIZ_400x400.jpg',
          }}
        />
      </View>
      <View style={{ position: 'absolute', top: 110, left: 100 }}>
        <Text>Ben Schroth</Text>
        <Text>@ben</Text>
      </View>
    </View>
  );
};

function Profile({ navigation }) {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.profile_container}>
        <ProfileHeader />
      </View>
      <ScrollView>
        <View style={styles.posts_container}>
          {posts.map((post) => {
            return <Post post={post} key={post.postId} />;
          })}
        </View>
      </ScrollView>
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
  profile_container: {
    height: '20%',
  },
  posts_container: {
    height: '80%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  swipable_button: {
    position: 'absolute',
    top: '100%',
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

export default Profile;
