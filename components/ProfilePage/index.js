import React, {Component} from 'react';
import styles from './styles';

import {Image, ImageBackground, View} from 'react-native';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Body,
  Icon,
  Button,
} from 'native-base';

class ProfilePage extends Component {
  render () {
    return (
      <Container style={styles.container}>
        <ImageBackground
          source={require ('../../assets/img/signup.jpg')}
          style={styles.backgroundImage}
        >
          <Header style={styles.drawerHeader}>
            <Body style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={styles.drawerImage}
                source={require ('../../assets/img/avatar.jpg')}
              />
              <Text style={styles.textview_heading}>John Doe</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: '1%',
                }}
              >
                <Button
                  full
                  style={{
                    flex: 1,
                  }}
                >
                  <Text>Primary</Text>
                </Button>
                <View
                  style={{
                    flex: 0.1,
                  }}
                />
                <Button
                  full
                  success
                  style={{
                    flex: 1,
                  }}
                >
                  <Text>Success</Text>
                </Button>
              </View>
            </Body>
          </Header>
          <Content>
            <List>
              <ListItem>
                <Left>
                  <Text style={styles.textview_heading}>Payments</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" style={styles.icon} />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text style={styles.textview_heading}>Settings</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" style={styles.icon} />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text style={styles.textview_heading} />
                </Left>
                <Right>
                  <Icon name="arrow-forward" style={styles.icon} />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text style={styles.textview_heading}>Dejan Lovren</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" style={styles.icon} />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text style={styles.textview_heading}>Dejan Lovren</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" style={styles.icon} />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text style={styles.textview_heading}>Dejan Lovren</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" style={styles.icon} />
                </Right>
              </ListItem>
            </List>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default ProfilePage;
