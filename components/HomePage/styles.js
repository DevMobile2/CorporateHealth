import { StyleSheet, Dimensions } from 'react-native';

export default (Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_horizantl: {
    flexDirection: 'row',
    marginTop: '5%',
  },
  google_button: {
    backgroundColor: 'red',
  },
  textview_heading: {
    fontFamily: 'Roboto-Bold',
    color: 'white',
  },
  textview_Content: {
    textAlign: 'center',
    flex: 1,
    fontFamily: 'Roboto-Regular',
    color: 'white',
    alignItems: 'center',
  },
  textview_sub_heading: {
    fontFamily: 'Roboto-Bold',
    color: 'white',
    marginTop: '10%',
  },
  divider_continer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '6%',
    marginLeft: '4%',
    marginRight: '4%',
  },
  divider_line: {
    flex: 4,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  divider_line_full: {
    width: '90%',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginTop: '14%',
    marginLeft: '4%',
    marginRight: '4%',
  },
  Button: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#03A9F4',
  },
  container_horizantl_Button: {
    flexDirection: 'row',
    marginTop: '14%',
  },
  backgroundImage: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    backgroundColor: 'rgba(0,0,0,.6)',
    padding: '4%'
  }
}));
