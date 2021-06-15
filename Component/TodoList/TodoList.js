import React, {Component} from 'react';
import Header from './Header';
import Contents from './Contents';
import Footer from './Footer';
import {ScrollView, StyleSheet, View} from 'react-native';
class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todolist: [
        {id: 1, text: 'Hoc wed', close: true},
        {id: 2, text: 'Hoc Tin', close: true},
        {id: 3, text: 'Hoc css', close: true},
        {id: 4, text: 'Hoc js', close: true},
        {id: 5, text: 'Hoc html', close: true},
        {id: 6, text: 'Hoc c++', close: true},
      ],
    };
  }
  AddData = value => {
    const {todolist} = this.state;
    todolist.unshift({
      id: todolist.length + 1,
      text: value,
      close: true,
    });
    this.setState({
      todolist,
    });
  };
  render() {
    const {todolist} = this.state;
    return (
      <View style={styles.TodoList}>
        <View style={styles.Header}>
          <Header AddData={this.AddData} />
        </View>
        <View style={styles.Contents}>
          <ScrollView>
            {todolist.map(item => {
              return <Contents item={item} key={item.id} />;
            })}
          </ScrollView>
        </View>
        <View style={styles.Footer}>
          <Footer />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  TodoList: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
    flex: 1,
    flexDirection: 'column',
  },
  Header: {
    flex: 1,
  },
  Contents: {
    flex: 5,
  },
  Footer: {
    flex: 1,
  },
});
export default TodoList;
