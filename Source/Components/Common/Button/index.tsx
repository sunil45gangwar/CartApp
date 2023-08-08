import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  GestureResponderEvent,
} from 'react-native';

interface ButtonProps {
  title: string;
  onClick: (event: GestureResponderEvent) => void;
}

const Button: React.FC<ButtonProps> = ({title, onClick}) => {
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'purple',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    maxHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Button;
