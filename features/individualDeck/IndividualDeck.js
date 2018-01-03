import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';

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
        <Button
          onPress={() =>
            this.props.navigation.navigate('AddQuestion', { title: deck.title })
          }
          text="Add card"
          backgroundColor="green"
          textColor="white"
        />

        <Button
          onPress={() => this.props.navigation.navigate('Quiz', { deck })}
          text="Start Quiz"
          backgroundColor="orange"
          textColor="white"
        />
      </View>
    );
  }
}

export default IndividualDeck;
