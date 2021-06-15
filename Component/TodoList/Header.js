import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  handleContent = e => {
    this.setState({
      value: e,
    });
  };
  onClick = () => {
    const {AddData} = this.props;
    const {value} = this.state;
    AddData(value);
    this.setState({value: ''});
  };
  render() {
    return (
      <View style={styles.Header}>
        <View style={styles.InputHeader}>
          <TextInput
            type="text"
            style={styles.Input}
            placeholder="Vui lòng nhập..."
            value={this.state.value}
            onChangeText={this.handleContent}
            onSubmitEditing={this.onClick}
          />
        </View>
        <View style={styles.ButtonHeader}>
          <TouchableOpacity style={styles.Button} onPress={this.onClick}>
            <Text>Click</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    flex: 1,
  },
  InputHeader: {
    flex: 8,
  },
  ButtonHeader: {
    flex: 2,
  },
  Input: {
    padding: 5,
    borderColor: '#2526269c',
    borderWidth: 1,
  },
  Button: {
    alignItems: 'center',
    backgroundColor: '#4dccc6',
    fontWeight: 'bold',
    padding: 10,
  },
});
export default Header;
