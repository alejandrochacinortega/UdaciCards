import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class IndividualDeck extends Component {
  render() {
    const { deck } = this.props.navigation.state.params;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>{deck.title}</Text>
        <Text>{deck.questions.length} cards</Text>
        <TouchableOpacity onPress={() => console.log('Add Card')}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('start quiz')}>
          <Text>Start quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default IndividualDeck;
