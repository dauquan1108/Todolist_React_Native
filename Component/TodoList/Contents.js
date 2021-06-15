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
    };
  }

  handleContent = e => {
    this.setState({
      value: e,
    });
  };
  itemCheck = () => {
    const {checkStatus, item} = this.props;
    checkStatus(item.id);
  };
  deleteItem = () => {
    const {deleteItem, item} = this.props;
    deleteItem(item.id);
  };
  render() {
    const {value} = this.state;
    const {item} = this.props;
    return (
      <View style={styles.Content}>
        <View style={styles.ImagesCheck}>
          <TouchableOpacity onPress={this.itemCheck}>
            <Image
              resizeMode={'cover'}
              style={styles.Images}
              source={item.status ? Minus : Check}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.InputText}>
          <TextInput
            type="text"
            style={item.status ? styles.Input : styles.InputCheck}
            placeholder="contents"
            value={value}
            onChangeText={this.handleContent}
          />
        </View>
        <View style={styles.ImagesClose}>
          <TouchableOpacity onPress={this.deleteItem}>
            <Image resizeMode={'cover'} style={styles.Images} source={Close} />
          </TouchableOpacity>
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
    borderColor: '#2526269c',
    borderWidth: 1,
    padding: 5,
    fontWeight: 'bold',
  },
  InputCheck: {
    height: 30,
    padding: 5,
    opacity: 0.5,
    textDecorationLine: 'line-through',
  },
});
export default Contents;
