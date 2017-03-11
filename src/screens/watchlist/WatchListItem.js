import React, { Component, PropTypes } from 'react'
import { Image, Text, View } from 'react-native'

import styles from './styles'

class WatchListItem extends Component {

  static propTypes = {
    movie: PropTypes.object.isRequired
  }

  render() {
    const { title, release_date, overview, poster_path } = this.props.movie
    const posterUrl = 'http://image.tmdb.org/t/p/w92/'
    return (
      <View style={styles.listItemContainer}>
        <Image
          source={{ uri: `${posterUrl}${poster_path}`}}
          style={[styles.movieImage]}
        />
      </View>
    )
  }
}

export default WatchListItem