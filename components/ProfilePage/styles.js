import {StyleSheet, Dimensions} from 'react-native';

export default (Styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  drawerHeader: {
    height: 220,
    backgroundColor: '#7bdad1',
  },
  drawerImage: {
    height: 100,
    width: 100,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '4%',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    backgroundColor: 'rgba(0,0,0,.6)',
  },
  textview_heading: {
    fontFamily: 'Roboto-Bold',
    color: 'white',
  },
  textview_heading_name: {
    fontFamily: 'Roboto-Bold',
    color: 'white',
    marginTop: '3%',
  },
  icon: {
    color: 'white',
  },
  button: {
    flex: 1,
    backgroundColor: 'rgb(79, 195, 247)',
    borderRadius: 0,
  },
}));
