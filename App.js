import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
  const [goalsList, setGoalsList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  //console.log(goalsList);
  const addGoalHandler = (text) => {
    if (text.length > 0) {
      setGoalsList((prevState) => [
        ...prevState,
        { id: Math.random().toString(), value: text },
      ]);
      setIsAddMode(false);
    }
  };

  const removeGoalHandler = (id) => {
    setGoalsList((prevState) => {
      return prevState.filter((goal) => goal.id !== id);
    });
  };
  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)} />
      <GoalInput addGoal={addGoalHandler} addMode={isAddMode} />
      <FlatList
        data={goalsList}
        renderItem={(itemdata) => (
          <GoalItem goal={itemdata.item} onDelete={removeGoalHandler} />
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
});

export default App;
