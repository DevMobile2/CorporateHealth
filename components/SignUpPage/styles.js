import { StyleSheet, Dimensions } from 'react-native'

export default Styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginTop: '10%',
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
	button: {
		flexDirection: 'row',
		flex: 1,
		marginTop: '10%',

	},
	backgroundImage: {
		justifyContent: 'center',
		flex: 1,
		resizeMode: 'cover', // or 'stretch'
		backgroundColor: 'rgba(0,0,0,.6)',
		padding: '4%'
	}

})