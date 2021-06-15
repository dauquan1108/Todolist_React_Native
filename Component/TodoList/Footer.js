import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Active: false,
    };
  }
  onActive = () => {
    const {Active} = this.state;
    this.setState({
      Active: !Active,
    });
  };
  render() {
    // const {Active} = this.state;
    return (
      <View style={styles.Footer}>
        <View style={styles.Text}>
          <Text> items left</Text>
        </View>
        <View style={styles.All} onPress={() => this.onActive}>
          <Text> All</Text>
        </View>
        <View style={styles.Active} onPress={() => this.onActive}>
          <Text> Active</Text>
        </View>
        <View style={styles.Completed} onPress={() => this.onActive}>
          <Text> Completed</Text>
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
