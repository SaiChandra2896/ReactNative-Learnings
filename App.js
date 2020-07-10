import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const [goalsList, setGoalsList] = useState([]);
  const goalInputHandler = (text) => {
    setText(text);
  };
  //console.log(goalsList);
  const addGoalHandler = () => {
    if (text.length > 0) {
      setGoalsList((prevState) => [
        ...prevState,
        { id: Math.random().toString(), value: text },
      ]);
      setText('');
    }
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Goal'
          style={styles.textInput}
          value={text}
          onChangeText={goalInputHandler}
        />
        <Button title='ADD' onPress={addGoalHandler} />
      </View>
      <FlatList
        data={goalsList}
        renderItem={(itemdata) => (
          <View style={styles.listItem}>
            <Text>{itemdata.item.value}</Text>
          </View>
        )}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
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
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    marginVertical: 10,
    borderWidth: 1,
  },
});

export default App;
