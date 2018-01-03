import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
  ScrollView,
} from 'react-native';
import data from '../../data';
import { DECKS_STORAGE_KEY, clear } from '../api';
import Button from '../../components/Button';

class Decks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      decks: false,
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
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: 'gray',
            paddingVertical: 20,
          }}
        >
          <Text>{deck.title}</Text>
          <Text>{deck.questions.length} cards</Text>
        </TouchableOpacity>
      );
    });
  };

  async componentDidMount() {
    // clear();
    const response = await AsyncStorage.getItem(DECKS_STORAGE_KEY);

    // you might want to do the I18N setup here
    this.setState({
      decks: JSON.parse(response),
    });
  }

  render() {
    if (this.state.decks == null) {
      return (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Button
            onPress={() => this.props.navigation.navigate('NewDeck')}
            backgroundColor="gray"
            textColor="white"
            text="New Card"
          />
        </View>
      );
    }

    // if (!this.state.decks) {
    //   return (
    //     <View>
    //       <Text>Loading...</Text>
    //     </View>
    //   );
    // }

    return (
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
        }}
      >
        <ScrollView style={{ flex: 1, marginBottom: 100 }}>
          {this.renderDecks()}
        </ScrollView>
        <Button
          onPress={() => this.props.navigation.navigate('NewDeck')}
          backgroundColor="gray"
          textColor="white"
          text="New Card"
          styles={{
            position: 'absolute',
            bottom: 30,
            alignSelf: 'center',
            width: '90%',
          }}
          stylesText={{
            alignSelf: 'center',
          }}
        />
      </View>
    );
  }
}

export default Decks;
