import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: 'Great Game!', rating: 5, body: 'I really enjoyed playing this game. It has great graphics and the storyline is very engaging.', key: '1' },
    { title: 'Decent but has bugs', rating: 3, body: 'The game is fun, but there are a few bugs that need to be fixed. Overall, it is worth playing.', key: '2' },
    { title: 'Not worth the price', rating: 2, body: 'I found the game to be quite boring and not worth the price. The gameplay is repetitive.', key: '3' },
  ]);

  addReview = (review) => {
    review.key = Math.random().toString();

    setReviews((currentReview) => {
      return [review, ...currentReview]
    });

    setModalOpen(false);
  }

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name='close'
              size={24}
              onPress={() => setModalOpen(false)}
              style={{...styles.modalToggle, ...styles.modalClose}}
            />
            <ReviewForm addReview={addReview}/>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name='add'
        size={24}
        onPress={() => setModalOpen(true)}
        style={styles.modalToggle}
      />
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
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
    padding: 20,
  }
});
