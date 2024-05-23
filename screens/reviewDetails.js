import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({ route, navigation }) {
  const { title, body, rating } = route.params;

  // const images = {
  //   1: require('../assets/rating-1.png'),
  //   2: require('../assets/rating-2.png'),
  //   3: require('../assets/rating-3.png'),
  //   4: require('../assets/rating-4.png'),
  //   5: require('../assets/rating-5.png'),
  // };
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.rating}>
          <Text>Game Rating:</Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee'
  }
});
