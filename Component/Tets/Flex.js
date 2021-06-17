import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

class Flex extends Component {
  render() {
    return (
      <View style={styles.Cha}>
        <View style={styles.KhoiTop}>
          <View style={styles.KhoiTopOne}>
            <View style={styles.KhoiTopOneTop}></View>
            <View style={styles.KhoiTopOneButton}></View>
          </View>
          <View style={styles.KhoiTopTow}></View>
        </View>
        <View style={styles.KhoiButton}>
          <View style={styles.KhoiButtonOne}></View>
          <View style={styles.KhoiButtonTow}></View>
          <View style={styles.KhoiButtonFrier}>
            <View style={styles.KhoiButtonFrierTop}></View>
            <View
              style={[
                styles.KhoiButtonFrierButton,
                styles.KhoiButtonFrierButton2,
              ]}></View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Cha: {
    width: '100%',
    height: '100%',
  },
  // khoi1
  KhoiTop: {
    flex: 7,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  KhoiTopOne: {
    flex: 3,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  KhoiTopOneTop: {
    flex: 3,
    borderWidth: 4,
  },
  KhoiTopOneButton: {
    flex: 7,
    borderWidth: 4,
  },
  KhoiTopTow: {
    flex: 7,
    borderWidth: 4,
  },
  // Khoi2
  KhoiButton: {
    flex: 3,
    backgroundColor: 'black',
    flexDirection: 'row',
  },
  KhoiButtonOne: {
    flex: 3,
    backgroundColor: 'blue',
    borderWidth: 4,
  },
  KhoiButtonTow: {
    flex: 5,
    backgroundColor: 'white',
    borderWidth: 4,
  },
  KhoiButtonFrier: {
    backgroundColor: 'white',
    flex: 2,
  },
  KhoiButtonFrierTop: {
    flex: 3,
    borderWidth: 4,
  },
  KhoiButtonFrierButton: {
    flex: 7,

    backgroundColor: 'yellow',
  },
  KhoiButtonFrierButton2: {
    borderWidth: 4,
  },
});
export default Flex;
