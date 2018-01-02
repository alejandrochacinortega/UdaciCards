import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import data from '../../data';
import { DECKS_STORAGE_KEY } from '../api';

class Decks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      decks: null,
    };
  }

  renderDecks = () => {
    const { navigation } = this.props;
    const props = this.props;
    const { decks } = this.state;
    return Object.keys(decks).map(function(key, index) {
      const deck = decks[key];

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

  async componentDidMount() {
    const response = await AsyncStorage.getItem(DECKS_STORAGE_KEY);

    console.log(' here my friend ', response);

    // you might want to do the I18N setup here
    this.setState({
      decks: JSON.parse(response),
    });
  }

  render() {
    console.log('decks ', this.state.decks);
    if (!this.state.decks) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }

    return <View style={{ flex: 1 }}>{this.renderDecks()}</View>;
  }
}

export default Decks;
