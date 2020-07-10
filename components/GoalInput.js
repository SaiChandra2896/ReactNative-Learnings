import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';

const GoalInput = ({ addGoal, addMode, onCancel }) => {
  const [text, setText] = useState('');
  const goalInputHandler = (text) => {
    setText(text);
  };
  const onaddGoal = () => {
    addGoal(text);
    setText('');
  };
  const cancelEvent = () => {
    onCancel();
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
        <View style={styles.btnContainer}>
          <View style={styles.button}>
            <Button title='ADD' onPress={onaddGoal} />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={cancelEvent} color='red' />
          </View>
        </View>
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
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    width: '30%',
  },
});

export default GoalInput;
