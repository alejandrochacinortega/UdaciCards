import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Button from '../../components/Button';
import { getDecks, submitEntry } from '../api';

class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: '',
    };
  }

  addQuestion = async () => {
    const { title } = this.props.navigation.state.params;
    const { question, answer } = this.state;
    const questionToPush = { question, answer };
    let decks;
    let deck;

    await getDecks().then(results => {
      decks = JSON.parse(results);
      deck = decks[title];
      deck.questions = deck.questions.concat(questionToPush);
    });

    console.log('decks', decks);

    await submitEntry(deck, deck.title);
    // this.props.navigation.navigate('Decks');

    const resetAction = NavigationActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
        NavigationActions.navigate({ routeName: 'Home' }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  };

  componentDidMount() {
    console.log('cleaning');
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 25, paddingBottom: 10 }}>Question</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={question => this.setState({ question })}
            value={this.state.question}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 25, paddingBottom: 10 }}>Answer</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={answer => this.setState({ answer })}
            value={this.state.answer}
          />
        </View>
        <Button
          onPress={this.addQuestion}
          text="Add card"
          backgroundColor="gray"
          textColor="white"
        />
      </View>
    );
  }
}

export default AddQuestion;
