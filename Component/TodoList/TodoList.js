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
        {id: 1, text: 'Hoc wed', status: true},
        {id: 2, text: 'Hoc Tin', status: true},
        {id: 3, text: 'Hoc css', status: false},
        {id: 4, text: 'Hoc js', status: true},
        {id: 5, text: 'Hoc html', status: true},
        {id: 6, text: 'Hoc c++', status: true},
      ],
      statusShow: 'all',
    };
  }
  static getDerivedStateFromProps(props, state) {
    const {statusShow} = state;
    switch (statusShow) {
      case 'active': {
        console.log('Active');
        break;
      }
      case 'completed': {
        console.log(' Completed');
        break;
      }
      default: {
        console.log('all');
        break;
      }
    }
  }

  updateStatusShow = statusShow => {
    this.setState({
      statusShow: statusShow,
    });
  };

  checkStatus = id => {
    const {todolist} = this.state;
    todolist.forEach(item => {
      if (item.id === id) {
        item.status = !item.status;
      }
    });
    this.setState({
      todolist,
    });
  };

  addData = value => {
    const {todolist} = this.state;
    todolist.unshift({
      id: todolist.length + 1,
      text: value,
      status: true,
    });
    this.setState({
      todolist,
    });
  };

  updatingData = (id, value) => {
    const {todolist} = this.state;
    todolist.forEach(item => {
      if (item.id === id) {
        item.text = value;
      }
    });
    this.setState({
      todolist,
    });
  };

  deleteItem = id => {
    const {todolist} = this.state;
    const todoListCopy = [...todolist];
    const todoListDeleted = todoListCopy.filter(todo => todo.id !== id);
    this.setState({
      todolist: todoListDeleted,
    });
  };

  numberActive = () => {
    // const {todolist} = this.state;
    // const todoNumber = todolist.filter(num => !num.status);
    // console.log({todoNumber});
    console.log('ok1');
  };
  render() {
    const {todolist} = this.state;
    return (
      <View style={styles.TodoList}>
        <View style={styles.Header}>
          <Header AddData={this.addData} />
        </View>
        <View style={styles.Contents}>
          <ScrollView>
            {todolist.map(item => {
              return (
                <Contents
                  item={item}
                  key={item.id}
                  checkStatus={this.checkStatus}
                  deleteItem={this.deleteItem}
                  updatingData={this.updatingData}
                />
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.Footer}>
          <Footer
            updateStatusShow={this.updateStatusShow}
            numberActive={this.numberActive}
          />
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
