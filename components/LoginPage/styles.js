import { StyleSheet, Dimensions } from 'react-native'

export default Styles = StyleSheet.create({
	container1: {
		flexDirection: 'row',
		marginTop: '15%',
	},
	container2: {
		flexDirection: 'row',
		marginTop: '5%',
	},
	Button_Facebook: {
		justifyContent: 'center',
		backgroundColor: 'blue',
	},
	Button_Google: {
		justifyContent: 'center',
		backgroundColor: '#3498DB',
	},
	textview_heading: {
		fontFamily: 'Roboto-Bold',
		color: 'white',
	},
	textview_sub_heading: {
		fontFamily: 'Roboto-Bold',
		color: 'white',
		marginTop: '3%',
		textAlign: 'center',
		fontSize: 15
	},
	textview_label: {
		fontFamily: 'Roboto-Bold',
		fontSize: 30
	},
	Button_Submit: {
		justifyContent: 'center',
		backgroundColor: '#03A9F4',
	},
	backgroundImage: {
		flex: 1,
		resizeMode: 'cover', // or 'stretch'
		backgroundColor: 'rgba(0,0,0,.6)',
		padding: '4%',
	},
	inputContainer: {
		height: 60,
		flex: 1,
		backgroundColor: 'rgba(41, 54, 71, 0.5)',
		justifyContent: 'center'
	},
	icon: {
		height: 60,
		flex: 1,
		backgroundColor: 'rgba(41, 54, 71, 0.5)',
		justifyContent: 'center'

	},
	inputField: {
		height: 60, flex: 4, backgroundColor: 'rgba(62, 76, 94, 0.5)',
		color: 'white',
		fontSize: 18,

	},
	custom_checkbox: {
		color: 'white', fontSize: 16, marginLeft: '3%',
		fontFamily: 'Roboto-Regular',

	}
})