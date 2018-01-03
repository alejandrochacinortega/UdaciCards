import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const Button = ({
  backgroundColor,
  textColor,
  text,
  onPress,
  styles,
  stylesText,
}) => {
  return (
    <View
      style={[
        {
          backgroundColor: backgroundColor,
          paddingHorizontal: 20,
          paddingVertical: 20,
          marginTop: 20,
          borderRadius: 10,
        },
        styles,
      ]}
    >
      <TouchableOpacity onPress={onPress}>
        <Text style={[{ color: textColor }, stylesText]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
