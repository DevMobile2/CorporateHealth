import React, { Component } from 'react';
import Styles from './styles';
import { SocialIcon } from 'react-native-elements';
import { TouchableOpacity, Alert } from 'react-native'
import { Container, Header, Content, Button, Text } from 'native-base';

import { View, ImageBackground } from 'react-native';

class HomePage extends Component {
	alert() {
		this.props.navigation.navigate('signup');
	}
	render() {
		return (
			<View style={Styles.container}>
				<ImageBackground source={require('../../assets/img/signup.jpg')} style={Styles.backgroundImage}>
					<Text style={Styles.textview_heading}> SignUp with </Text>
					<View style={Styles.container_horizantl}>
						<SocialIcon raised={false} type="instagram" />
						<SocialIcon raised={false} type="facebook" />
						<SocialIcon
							raised={false}
							type="google"
							style={Styles.google_button}
						/>
						<SocialIcon raised={false} type="twitter" />
					</View>
					<View style={Styles.divider_continer}>
						<View style={Styles.divider_line} />
						<Text style={Styles.textview_Content}> OR </Text>
						<View style={Styles.divider_line} />
					</View>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('signup')}>
						<View style={Styles.container_horizantl_Button} >
							<Button Full style={Styles.Button} onPress={() => this.alert()}>
								<Text style={{ color: '#FFF' }}> Create an account </Text>
							</Button>
						</View>
					</TouchableOpacity>
					<View style={Styles.divider_line_full} />
					<Text style={Styles.textview_sub_heading} onPress={() => this.props.navigation.navigate('Login')}>I'm already a member </Text>
				</ImageBackground>
			</View>
		);
	}
}

export default HomePage;
