import React, {Component} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Check from '../../asset/check.png';
import Close from '../../asset/remove.png';
import Minus from '../../asset/minus.png';
class Contents extends Component {
  constructor(props) {
    super(props);
    const {item} = this.props;
    const {text} = item;
    this.state = {
      value: text,
      check: true,
    };
  }

  handleContent = e => {
    this.setState({
      value: e,
    });
  };
  ItemCheck = () => {
    const {check} = this.state;
    console.log({check});
    this.setState({
      check: !check,
    });
  };
  render() {
    const {value, check} = this.state;
    return (
      <View style={styles.Content}>
        <View style={styles.ImagesCheck}>
          <TouchableOpacity onPress={this.ItemCheck}>
            <Image
              resizeMode={'cover'}
              style={styles.Images}
              source={check ? Minus : Check}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.InputText}>
          <TextInput
            type="text"
            style={check ? styles.Input : styles.InputCheck}
            placeholder="contents"
            value={value}
            onChangeText={this.handleContent}
          />
        </View>
        <View style={styles.ImagesClose}>
          <Image resizeMode={'cover'} style={styles.Images} source={Close} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    flex: 1,
  },

  ImagesCheck: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  InputText: {
    flex: 8,
    justifyContent: 'center',
  },

  ImagesClose: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Images: {
    width: 25,
    height: 25,
    margin: 5,
  },

  Input: {
    height: 30,
    padding: 5,
    borderColor: '#2526269c',
    borderWidth: 1,
  },
  InputCheck: {
    height: 30,
    padding: 5,
    borderColor: '#2526269c',
    borderWidth: 1,
    opacity: 0.5,
    textDecorationLine: 'line-through',
  },
});
export default Contents;
