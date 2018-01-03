import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AlertIOS,
  TouchableOpacity,
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import Swiper from 'react-native-swiper';
import Button from '../../components/Button';

var styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

class QuizScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctAnswers: 0,
      showAnswer: false,
    };
  }

  showResults = () => {
    const { deck } = this.props.navigation.state.params;

    const result = `You answered ${this.state.correctAnswers} out of  ${
      deck.questions.length
    } questions`;
    AlertIOS.alert('Results', result, () => {
      const resetAction = NavigationActions.reset({
        index: 1,
        actions: [
          NavigationActions.navigate({ routeName: 'Home' }),
          NavigationActions.navigate({ routeName: 'Home' }),
        ],
      });
      this.props.navigation.dispatch(resetAction);
    });
  };

  toggleAnswer = () => {
    console.log('Show answer');
    this.setState(previousState => {
      return {
        showAnswer: !previousState.showAnswer,
      };
    });
  };

  render() {
    const { deck } = this.props.navigation.state.params;
    return (
      <Swiper
        style={styles.wrapper}
        loop={false}
        showsButtons={false}
        scrollEnabled={false}
        ref={component => {
          this.swiper = component;
        }}
      >
        {deck.questions.map((question, index) => {
          return (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
              }}
            >
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30 }}>
                  {this.state.showAnswer ? question.answer : question.question}
                </Text>
                <TouchableOpacity onPress={this.toggleAnswer}>
                  <Text style={{ color: 'red' }}>
                    <Text>{this.state.showAnswer ? 'Question' : 'Answer'}</Text>
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
              >
                <Button
                  onPress={() => {
                    this.setState(previousState => {
                      return {
                        correctAnswers: previousState.correctAnswers + 1,
                        showAnswer: false,
                      };
                    });
                    deck.questions.length - 1 === index
                      ? this.showResults()
                      : this.swiper.scrollBy(1);
                  }}
                  backgroundColor="green"
                  textColor="white"
                  text="Correct"
                  styles={{ alignSelf: 'center' }}
                />
                <Button
                  onPress={() => {
                    this.setState({ showAnswer: false });
                    deck.questions.length - 1 === index
                      ? this.showResults()
                      : this.swiper.scrollBy(1);
                  }}
                  backgroundColor="red"
                  textColor="white"
                  text="Incorrect"
                  styles={{ alignSelf: 'center' }}
                />
              </View>
            </View>
          );
        })}
      </Swiper>
    );
    return (
      <View
        style={{ backgroundColor: 'white', flex: 1, paddingHorizontal: 10 }}
      >
        <Text>{deck.questions.length}</Text>
      </View>
    );
  }
}

export default QuizScreen;
