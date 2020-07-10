import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = ({ goal }) => {
  return (
    <View style={styles.listItem}>
      <Text>{goal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    marginVertical: 10,
    borderWidth: 1,
  },
});

export default GoalItem;
