import React, { Component, PropTypes } from 'react'
import { Text, View, Button } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux'

import styles from './styles'
import { fetchList } from '../../actions'

class HomeScreen extends Component {

  static propTypes = {
    fetchList: PropTypes.func.isRequired
  }

  static navigationOptions = {
    title: 'Home',
    tabBar: {
      icon: ({ tintColor }) => <Icon name="home" size={25} color={tintColor} />
    }
  }

  render() {
    return (
      <View style={styles.homeContainer}>
        <Text style={styles.homeText}>This is HomeScreen</Text>
        <Button
          onPress={this.props.fetchList}
          title="Load Movie List"
          color="#841584"
          accessibilityLabel="Load Movie List"
        />
      </View>
    )
  }
}

export default connect(null, { fetchList })(HomeScreen)
