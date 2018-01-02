import React, { Component } from 'react';
import { View, Text } from 'react-native';
import data from '../../data';

class Decks extends Component {
  render() {
    console.log('====================================');
    console.log('data ', data);
    console.log('====================================');
    return (
      <View>
        <Text>Decks</Text>
      </View>
    );
  }
}

export default Decks;
