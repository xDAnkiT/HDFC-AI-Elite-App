import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  Button,
  ActivityIndicator,
  Image,
  ImageBackground,
  TextInput,
  ToastAndroid,
  StatusBar,
  TouchableOpacity,
  Platform,
  View,
  Animated,
  ScrollView
} from 'react-native';
import {NavigationActions, withNavigation} from "react-navigation";
import LottieView from 'lottie-react-native';

import * as Helper from '../utils/Helper'

import Auth0 from 'react-native-auth0';
const auth0 = new Auth0({domain: 'xdankit.auth0.com', clientId: '8uBJYH5BnR7KE2TC5Ay6k9LuNbgxhTtt'});

class BackgroundImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ImageBackground
        source={require('../../assets/background.png')}
        style={styles.backgroundImage}>
        {this.props.children}
      </ImageBackground>
    )
  }
}

export default class TwitterLogin extends Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "",
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0
    }
  };

  _handleTwitterLogin() {
    auth0
      .webAuth
      .authorize({scope: 'openid profile email', audience: 'https://xdankit.auth0.com/userinfo'})
      .then(credentials => {
        // Successfully authenticated Store the accessToken
        this._handleStoreTokenDetails(credentials);
      })
      .catch(error => console.log(error));
  }

  async _handleStoreTokenDetails(userCredentails) {
    let credentails = await Helper.setMemberTokenDetails(userCredentails);

    if (credentails) {
      this
        .props
        .navigation
        .dispatch({
          type: 'Navigation/RESET',
          index: 0,
          actions: [
            {
              type: 'Navigate',
              routeName: 'ProfileScreen'
            }
          ]
        })
    }
  }

  render() {
    let brandName = "Twitter";
    let LoginMessage = "Login to your twitter account";
    let signUpBtn = "Sign Up";
    let signInBtn = "Sign In";
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content"/>

        <BackgroundImage>
          <View style={styles.section}>

            <Text style={styles.headingLarge}>{brandName}</Text>
            <Text style={styles.headingMedium}>{LoginMessage}</Text>

            <TextInput
              keyboardType='email-address'
              style={styles.TextInput}
              placeholder="Type your email"/>

            <TextInput
              secureTextEntry={true}
              keyboardType='email-address'
              style={styles.TextInput}
              placeholder="Type your password"/>

            <View style={styles.buttonGroup}>
              <TouchableOpacity
                onPress={() => {
                this._handleTwitterLogin()
              }}
                style={styles.primaryButton}>
                <Text style={styles.buttonText}>Twitter</Text>
              </TouchableOpacity>
            </View>
          </View>

        </BackgroundImage>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  section: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    marginBottom: 16
  },
  lottieSection: {
    flex: 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#eee"
  },
  lottieStyle: {
    width: 290,
    height: 290
  },
  optionsSection: {
    flex: 25
  },
  headingLarge: {

    fontSize: 24,
    color: '#414141',
    fontFamily: 'quicksand-SemiBold'
  },
  TextInput: {
    fontSize: 14,
    borderColor: 'gray',
    fontFamily: 'quicksand-SemiBold'
  },
  headingMedium: {
    fontSize: 16,
    color: '#414141',
    fontFamily: 'quicksand-SemiBold'
  },
  headingSmall: {
    marginTop: 4,
    fontSize: 14,
    color: '#414141',
    fontFamily: 'quicksand-Regular'
  },
  primaryButton: {
    flex: 50,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: '#1da1f2',
    borderRadius: 6
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'quicksand-Bold'
  },
  buttonGroup: {
    marginTop: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  },
  text: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 32
  }
});