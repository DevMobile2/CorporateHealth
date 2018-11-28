import React, { Component } from 'react'
import Styles from './styles'
import { Button } from 'native-base';
import { Icon } from 'react-native-elements'
import {
	View, ImageBackground,
	Text, TextInput
} from 'react-native'

class SignUpPage extends Component {
	render() {
		return (
			<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', ImageBackground: '../assets/img/signup.jpg' }}>
				<ImageBackground source={require('../../assets/img/signup.jpg')} style={Styles.backgroundImage}>
					<View style={Styles.container}>
						<View
							style={Styles.inputContainer}
						>
							<Icon
								name="email"
								color="#ccc"
								size={25}
							/>
						</View>
						<TextInput
							opacity={0.6}
							style={Styles.inputField}
							placeholder="Email address"
							placeholderTextColor="#FFF"
							onChangeText={(text) => this.setState({ text })}
						/>
					</View>
					<View style={Styles.container}>
						<View
							style={Styles.inputContainer}
						>
							<Icon
								name="lock"
								color="#ccc"
								size={25}
							/>
						</View>
						<TextInput
							opacity={0.6}
							style={Styles.inputField}
							placeholder="Password"
							placeholderTextColor="#FFF"
							onChangeText={(text) => this.setState({ text })}
						/>
					</View>
					<View style={Styles.container}>
						<View
							style={Styles.inputContainer}
						>
							<Icon
								name="lock"
								color="#ccc"
								size={25}
							/>
						</View>
						<TextInput
							opacity={0.6}
							style={Styles.inputField}
							placeholder="Confirm Password"
							placeholderTextColor="#FFF"
							onChangeText={(text) => this.setState({ text })}
						/>
					</View>
					<View style={Styles.container}>
						<View
							style={Styles.inputContainer}
						>
							<Icon
								name="phone"
								color="#ccc"
								size={25}
							/>
						</View>
						<TextInput
							opacity={0.6}
							style={Styles.inputField}
							placeholder="Mobile Number"
							placeholderTextColor="#FFF"
							onChangeText={(text) => this.setState({ text })}
						/>
					</View>
					<View style={Styles.button}>
						<Button light style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(2229, 115, 115, 0.9)' }}>
							<Icon color='white' name='arrow-back' />
						</Button>
						<Button full light style={{ flex: 4, backgroundColor: '#03A9F4', marginLeft: 12 }}>
							<Text style={{ color: 'white' }}>Continue</Text>
						</Button>
					</View>
				</ImageBackground>
			</View>
		)
	}
}

export default SignUpPage