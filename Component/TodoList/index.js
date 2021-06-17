import React, {Component} from 'react';
import Header from './Header';
import Contents from './Contents';
import Footer from './Footer';
import {ScrollView, StyleSheet, View, FlatList} from 'react-native';
import uuid from 'react-native-uuid';
class Index extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [
        {id: 1, text: 'Hoc wed', status: true},
        {id: 2, text: 'Hoc Tin', status: false},
        {id: 3, text: 'Hoc css', status: false},
        {id: 4, text: 'Hoc js', status: true},
        {id: 5, text: 'Hoc html', status: true},
        {id: 6, text: 'Hoc c++', status: true},
        {id: 7, text: 'Hoc wed', status: true},
        {id: 8, text: 'Hoc Tin', status: false},
        {id: 9, text: 'Hoc css', status: false},
        {id: 10, text: 'Hoc js', status: true},
        {id: 11, text: 'Hoc html', status: true},
        {id: 12, text: 'Hoc c++', status: true},
        {id: 13, text: 'Hoc js', status: true},
        {id: 14, text: 'Hoc html', status: true},
      ],
      todoListView: [],
      statusShow: 'all',
    };
  }
  static getDerivedStateFromProps(props, state) {
    const {statusShow, todoList} = state;
    let todoListView = todoList;
    switch (statusShow) {
      case 'active': {
        todoListView = todoList.filter(number => number.status);
        break;
      }
      case 'completed': {
        todoListView = todoList.filter(num => !num.status);
        break;
      }
      default: {
        break;
      }
    }
    return {todoListView};
  }

  updateStatusShow = statusShow => {
    this.setState({
      statusShow: statusShow,
    });
  };

  checkStatus = id => {
    const {todoList} = this.state;
    todoList.forEach(item => {
      if (item.id === id) {
        item.status = !item.status;
      }
    });
    this.setState({
      todoList,
    });
  };

  addData = value => {
    const {todoList} = this.state;
    todoList.unshift({
      id: uuid.v4(),
      text: value,
      status: true,
    });
    this.setState({
      todoList,
    });
  };

  updatingData = (id, value) => {
    const {todoList} = this.state;
    todoList.forEach(item => {
      if (item.id === id) {
        item.text = value;
      }
    });
    this.setState({
      todoList,
    });
  };

  deleteItem = id => {
    const {todoList} = this.state;
    const todoListCopy = [...todoList];
    const todoListDeleted = todoListCopy.filter(todo => todo.id !== id);
    this.setState({
      todoList: todoListDeleted,
    });
  };

  numberActive = () => {
    const {todoList} = this.state;
    const todoNumber = todoList.filter(num => num.status);
    return todoNumber.length;
  };

  clearCompleted = () => {
    const {todoList} = this.state;
    this.setState({
      todoList: todoList.filter(item => item.status),
    });
  };
  checkNumberCompleted = () => {
    const {todoList} = this.state;
    const todoNumber = todoList.filter(num => !num.status);
    return todoNumber.length;
  };

  render() {
    const {todoListView, todoList} = this.state;
    const numbertodoList = this.numberActive();
    const onClearCompleted = this.checkNumberCompleted();
    return (
      <View style={styles.todoList}>
        <View style={styles.Header}>
          <Header AddData={this.addData} />
        </View>
        <View style={styles.Contents}>
          {/* <ScrollView> */}
          {/* {todoListView.map(item => {
              return (
                <Contents
                  item={item}
                  key={item.id}
                  checkStatus={this.checkStatus}
                  deleteItem={this.deleteItem}
                  updatingData={this.updatingData}
                />
              );
            })} */}
          {/* </ScrollView> */}
          <FlatList
            data={todoListView}
            renderItem={({item, index}) => {
              return (
                <Contents
                  item={item}
                  index={item.id}
                  checkStatus={this.checkStatus}
                  deleteItem={this.deleteItem}
                  updatingData={this.updatingData}
                />
              );
            }}></FlatList>
        </View>
        {todoList.length ? (
          <View style={styles.Footer}>
            <Footer
              clearCompleted={this.clearCompleted}
              updateStatusShow={this.updateStatusShow}
              numbertodoList={numbertodoList}
              onClearCompleted={onClearCompleted}
            />
          </View>
        ) : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  todoList: {
    borderRadius: 5,
    padding: 3,
    flex: 1,
    flexDirection: 'column',
  },
  Header: {
    height: 50,
  },
  Contents: {
    flex: 1,
  },
  Footer: {
    height: 50,
  },
});
export default Index;
