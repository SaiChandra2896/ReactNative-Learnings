import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';

const GoalInput = ({ addGoal, addMode }) => {
  const [text, setText] = useState('');
  const goalInputHandler = (text) => {
    setText(text);
  };
  const onaddGoal = () => {
    addGoal(text);
    setText('');
  };
  return (
    <Modal visible={addMode} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Goal'
          style={styles.textInput}
          value={text}
          onChangeText={goalInputHandler}
        />
        <Button title='ADD' onPress={onaddGoal} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    width: '80%',
    marginBottom: 10,
  },
});

export default GoalInput;
