import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const GoalInput = ({ addGoal }) => {
  const [text, setText] = useState('');
  const goalInputHandler = (text) => {
    setText(text);
  };
  const onaddGoal = () => {
    addGoal(text);
    setText('');
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Goal'
        style={styles.textInput}
        value={text}
        onChangeText={goalInputHandler}
      />
      <Button title='ADD' onPress={onaddGoal} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    width: '80%',
  },
});

export default GoalInput;
