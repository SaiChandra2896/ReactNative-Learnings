import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
  const [goalsList, setGoalsList] = useState([]);

  //console.log(goalsList);
  const addGoalHandler = (text) => {
    if (text.length > 0) {
      setGoalsList((prevState) => [
        ...prevState,
        { id: Math.random().toString(), value: text },
      ]);
    }
  };
  return (
    <View style={styles.screen}>
      <GoalInput addGoal={addGoalHandler} />

      <FlatList
        data={goalsList}
        renderItem={(itemdata) => <GoalItem goal={itemdata.item.value} />}
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
