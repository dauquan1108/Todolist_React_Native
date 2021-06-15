import React, {Component} from 'react';
import TodoList from './Component/TodoList/TodoList';
import {ScrollView, View, StyleSheet} from 'react-native';
class App extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollViewApp}>
        <View style={styles.Apps}>
          <TodoList />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  scrollViewApp: {},
  Apps: {},
});
export default App;
