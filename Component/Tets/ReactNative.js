import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

class ReactNative extends Component {
  render() {
    return (
      <View style={styles.Khoi1}>
        <TouchableHighlight onPress={() => alert('ok')}>
          <Text> Dauj Xuan quan</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Khoi1: {
    backgroundColor: 'red',
  },
});

export default ReactNative;
