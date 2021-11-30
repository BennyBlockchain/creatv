/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont().then();
function Post(props) {
  const { post } = props;

  return (
    <View style={styles.post_container}>
      <View>
        <Image style={styles.user_pic} source={{ uri: post.avatar }} />
      </View>
      <View style={styles.post}>
        <View style={styles.userInfo}>
          <Text style={styles.bold}>@{post.author}</Text>
          <Text>{post.date}</Text>
        </View>
        <View>
          <Text>{post.post}</Text>
        </View>
        {post.image && (
          <View style={styles.image_container}>
            <Image style={styles.post_image} source={{ uri: post.image }} />
          </View>
        )}
        <View style={styles.engagement}>
          <View style={{ flexDirection: 'row' }}>
            <Ionicons name="arrow-undo-outline" size={15} />
            <Text style={{ paddingLeft: 5 }}>{post.engagement.replies}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Ionicons name="thumbs-up-outline" size={15} />
            <Text style={{ paddingLeft: 5 }}>{post.engagement.likes}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Ionicons name="ios-flash-outline" size={15} />
            <Text style={{ paddingLeft: 5 }}>{post.engagement.tips}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Ionicons name="share-social-outline" size={15} />
            <Text style={{ paddingLeft: 5 }}>{post.engagement.shares}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post_container: {
    flexDirection: 'row',
    marginVertical: 10,
    width: '90%',
    backgroundColor: '#fff',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
    shadowColor: '#aaa',
    shadowOpacity: 1,
    borderRadius: 10,
    padding: 10,
  },
  user_pic: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  post: {
    paddingHorizontal: 10,
    width: '90%',
  },
  image_container: {
    width: '100%',
    marginTop: 10,
  },
  post_image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#aaa',
  },
  userInfo: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  engagement: {
    width: '100%',
    paddingTop: 10,
    paddingRight: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Post;
