import React from 'react';
import { View } from 'react-native';
import ToDoList from './TodoList';
import ToDoForm from './ToDoForm';

function App() {
  return (
   <View>
      <ToDoList />
      <ToDoForm />
      </View>
  );
}

export default App;
