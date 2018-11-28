import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomePage from '../components/HomePage';
import LoginPage from '../components/LoginPage';
import SignUpPage from '../components/SignUpPage/index';
import DashBoardPage from '../components/DashBoardPage/index.android';
import ProfilePage from '../components/ProfilePage/index.android';

const AppNavigation = createStackNavigator({
    firstpage: {
        screen: HomePage,
        navigationOptions: {
            title: 'Home',
            header: null //this will hide the header
        }
    },
    Login: {
        screen: LoginPage,
        navigationOptions: {
            title: 'Login',
        }
    },
    signup: {
        screen: SignUpPage,
        navigationOptions: {
            title: 'Signup',
        }
    },
    dashboard: {
        screen: DashBoardPage,
        navigationOptions: {
            title: 'Home',
            header: null //this will hide the header
        }
    }

});
const App = createAppContainer(AppNavigation);

export default App;

