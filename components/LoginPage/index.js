import React, { Component } from 'react'
import Styles from './styles'
import { Container, Header, Content, ListItem, CheckBox, Body, Button } from 'native-base';
import { Icon } from 'react-native-elements'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import {
	View,
	Text, ImageBackground, TextInput
} from 'react-native'

class LoginPage extends Component {
	render() {
		return (
			<View style={{ flex: 1, flexDirection: 'row' }}>
				<ImageBackground source={require('../../assets/img/signup.jpg')} style={Styles.backgroundImage}>
					<Button block onPress={() => this.props.navigation.navigate('Login')}>
						<Text style={Styles.textview_heading}>Login with Facebook</Text>
					</Button>
					<View style={{ marginTop: '5%' }}>
						<Button block style={Styles.Button_Google}>
							<Text style={Styles.textview_heading}>Login with Google</Text>
						</Button>
					</View>
					<View style={Styles.container1}>
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
					<View style={Styles.container2}>
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
					<ListItem>
						<CheckBox checked={true} />
						<Body>
							<Text style={Styles.custom_checkbox}>Show password</Text>
						</Body>
					</ListItem>


					<Button block style={Styles.Button_Submit} onPress={() => this.props.navigation.navigate('dashboard')}>
						<Text style={Styles.textview_heading}>Login</Text>
					</Button>

					<Text style={Styles.textview_sub_heading}>Forgotten Password?</Text>
					<Text style={Styles.textview_sub_heading}>Use icloud keychain</Text>
				</ImageBackground>
			</View >
		)
	}
}

export default LoginPage