import React, { Component, PropTypes } from 'react'
import { Text, View, Button } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux'

import styles from './styles'
import { clear, fetchList } from '../../actions'
import * as types from '../../actions/types'

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
          onPress={() => this.props.clear(types.WATCHLIST)}
          title="Clear Movie List"
          color="#61b2a7"
          accessibilityLabel="Clear Movie List"
        />
        <Button
          onPress={() => this.props.clear(types.WATCHED)}
          title="Clear Watched Movies"
          color="#841584"
          accessibilityLabel="Clear Watched Movies"
        />
      </View>
    )
  }
}

export default connect(null, { clear, fetchList })(HomeScreen)
