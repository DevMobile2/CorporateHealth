import React, {
	Component
} from 'react'
import Styles from './styles'
import {
	createMaterialBottomTabNavigator
} from 'react-navigation-material-bottom-tabs'
import ProfilePage from '../ProfilePage/index';
import Explore from '../Explore/index';
import MySchedule from '../MySchedule/index';
import Favourites from '../Favourites/index.android';
import Home from '../Home/index.ios';
import Icon from 'react-native-ionicons'
import {
	createStackNavigator
} from 'react-navigation';



const tabs = createMaterialBottomTabNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			tabBarLabel: 'Home',
			tabBarIcon: ({
				tintColor
			}) => < Icon name = 'ios-home'
			color = {
				tintColor
			}
			size = {
				25
			}
			/>
		}
	},
	Explore: {
		screen: Explore,
		navigationOptions: {
			tabBarLabel: 'Explore',
			tabBarIcon: ({
				tintColor
			}) => < Icon name = 'compass'
			color = {
				tintColor
			}
			size = {
				25
			}
			/>
		}
	},
	MySchedule: {
		screen: MySchedule,
		navigationOptions: {
			tabBarLabel: 'MySchedule',
			tabBarIcon: ({
				tintColor
			}) => < Icon name = 'calendar'
			color = {
				tintColor
			}
			size = {
				25
			}
			/>
		}
	},
	Favourites: {
		screen: Favourites,
		navigationOptions: {
			tabBarLabel: 'Favourites',
			tabBarIcon: ({
				tintColor
			}) => < Icon name = 'heart'
			color = {
				tintColor
			}
			size = {
				25
			}
			/>
		}
	},
	Profile: {
		screen: ProfilePage,
		navigationOptions: {
			tabBarLabel: 'Home',
			tabBarIcon: ({
				tintColor
			}) => < Icon name = 'person'
			color = {
				tintColor
			}
			size = {
				25
			}
			/>
		}
	}
}, {
	initialRouteName: 'Home',
	activeColor: 'teal',
	activeTintColor: 'teal',
	inactiveColor: 'grey',
	shifting: false,
	barStyle: {
		backgroundColor: 'white'
	},
});

export default createStackNavigator({
	tabs
}, {
	headerMode: "none"
});