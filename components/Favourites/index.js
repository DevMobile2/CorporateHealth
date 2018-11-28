import React, { Component } from 'react'
import Styles from './styles'

import {
	View,
	Text,
} from 'react-native'

class Favourites extends Component {
	render() {
		return (
			<View style={Styles.container}>
				<Text>Favourites</Text>
			</View>
		)
	}
}

export default Favourites