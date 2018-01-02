import React, { Component } from 'react';
import { View, Text, AsyncStorage, TouchableOpacity } from 'react-native';
import { submitEntry, DECKS_STORAGE_KEY } from '../api';

class NewDeck extends Component {
  addDeck = () => {
    const data = {
      title: 'Angular',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces',
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event',
        },
      ],
    };

    submitEntry(data, data.title)
      .then(results => {
        console.log('results ', results);
      })
      .catch(err => console.log('erro ', err));
  };

  getData = () => {
    AsyncStorage.getItem(DECKS_STORAGE_KEY)
      .then(results => {
        console.log('results ', JSON.parse(results));
      })
      .catch(err => console.log('erro ', err));
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.addDeck}>
          <Text>NewDeck Create</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.getData}>
          <Text>NewDeck get</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default NewDeck;
