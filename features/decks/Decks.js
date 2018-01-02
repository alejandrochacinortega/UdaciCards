import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import data from '../../data';

class Decks extends Component {
  renderDecks = () => {
    const { navigation } = this.props;
    const props = this.props;
    return Object.keys(data).map(function(key, index) {
      const deck = data[key];

      return (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('IndividualDeck', {
              deck,
            })
          }
          key={key}
          style={{
            backgroundColor: 'white',
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: 'gray',
          }}
        >
          <Text>{deck.title}</Text>
          <Text>{deck.questions.length} cards</Text>
        </TouchableOpacity>
      );
    });
  };

  render() {
    return <View style={{ flex: 1 }}>{this.renderDecks()}</View>;
  }
}

export default Decks;
