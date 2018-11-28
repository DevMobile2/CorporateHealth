import React, { Component } from 'react'
import Styles from './styles'

import {
	View,
	Text,
} from 'react-native'

class Home extends Component {
	render() {
		return (
			<View style={Styles.container}>
				<Text>Home</Text>
			</View>
		)
	}
}

export default Home