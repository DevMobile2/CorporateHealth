import React, { Component } from 'react'
import Styles from './styles'

import {
	View,
	Text,
} from 'react-native'

class MySchedule extends Component {
	render() {
		return (
			<View style={Styles.container}>
				<Text>MySchedule</Text>
			</View>
		)
	}
}

export default MySchedule