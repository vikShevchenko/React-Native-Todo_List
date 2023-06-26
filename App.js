import React from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar, KeyboardAvoidingView, Text } from 'react-native';
import Todo from './components/Todo';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <KeyboardAvoidingView
        style={styles.todoContainer}
        behavior='padding'>
        <Text>Список покупок</Text>
        <Todo />
      </KeyboardAvoidingView>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  todoContainer: {
    flex: 1,
  }
});
