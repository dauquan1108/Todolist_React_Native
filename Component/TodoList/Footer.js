import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
class Footer extends Component {
  statusShowAll = () => {
    const {updateStatusShow} = this.props;
    // updateStatusShow('all');
  };
  statusShowActive = () => {
    const {updateStatusShow} = this.props;
    // updateStatusShow('active');
  };
  statusShowCompleted = () => {
    const {updateStatusShow} = this.props;
    // updateStatusShow('completed');
  };
  render() {
    // const {numberActive} = this.props;
    // console.log({numberActive});
    return (
      <View style={styles.Footer}>
        <View style={styles.Text}>
          <Text>0 items left</Text>
        </View>
        <View style={styles.All}>
          <TouchableOpacity onPress={this.statusShowAll('all')}>
            <Text>All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Active}>
          <TouchableOpacity onPress={this.statusShowActive('active')}>
            <Text>Active</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Completed}>
          <TouchableOpacity onPress={this.statusShowCompleted('completed')}>
            <Text>Completed</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ClearCompleted}>
          <Text> Clear completed</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Footer: {
    flex: 1,
    marginTop: 8,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  Text: {
    flex: 3,
    alignItems: 'center',
  },

  All: {
    flex: 1,
    alignItems: 'center',
  },

  AllActive: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },

  Active: {
    flex: 2,
    alignItems: 'center',
  },

  ActiveActive: {
    flex: 2,
    alignItems: 'center',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },

  Completed: {
    flex: 3,
    alignItems: 'center',
  },

  CompletedActive: {
    flex: 3,
    alignItems: 'center',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },

  ClearCompleted: {
    flex: 4,
    alignItems: 'center',
  },
});
export default Footer;
