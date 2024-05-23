import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { useState } from 'react';
import Card from '../shared/card';

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: 'Great Game!', rating: 5, body: 'I really enjoyed playing this game. It has great graphics and the storyline is very engaging.', key: '1' },
    { title: 'Decent but has bugs', rating: 3, body: 'The game is fun, but there are a few bugs that need to be fixed. Overall, it is worth playing.', key: '2' },
    { title: 'Not worth the price', rating: 2, body: 'I found the game to be quite boring and not worth the price. The gameplay is repetitive.', key: '3' },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Card>
                <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
