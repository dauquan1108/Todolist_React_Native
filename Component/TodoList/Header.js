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
    flex: 1,
  },
  Input: {
    paddingLeft: 15,
    borderColor: '#2526269c',
    borderWidth: 1,
  },
});
export default Header;
