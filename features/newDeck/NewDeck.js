import React, { Component } from 'react';
import {
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { submitEntry, DECKS_STORAGE_KEY } from '../api';
import Button from '../../components/Button';

class NewDeck extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'New Card',
  });

  constructor(props) {
    super(props);
    this.state = {
      deck: '',
    };
  }

  addDeck = () => {
    const deck = {
      title: this.state.deck,
      questions: [],
    };

    submitEntry(deck, deck.title)
      .then(results => {
        console.log('results ', results);
        const resetAction = NavigationActions.reset({
          index: 1,
          actions: [
            NavigationActions.navigate({ routeName: 'Home' }),
            NavigationActions.navigate({ routeName: 'Home' }),
          ],
        });
        this.props.navigation.dispatch(resetAction);
      })
      .catch(err => console.log('erro ', err));
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 25, paddingBottom: 10 }}>
            What is the title of your deck?
          </Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={deck => this.setState({ deck })}
            value={this.state.deck}
          />
        </View>
        <Button
          onPress={this.addDeck}
          backgroundColor="gray"
          textColor="white"
          text="submit"
        />
      </View>
    );
  }
}

export default NewDeck;
