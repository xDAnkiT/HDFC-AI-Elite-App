import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ToastAndroid,
  StatusBar,
  TouchableOpacity,
  View,
  Animated
} from "react-native";
import { NavigationActions, withNavigation } from "react-navigation";
import LottieView from "lottie-react-native";

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "SplashScreen",
    header: null
  };

  componentDidMount() {
    //play lottie animation
    this.initAnimation();
  }

  initAnimation() {
    if (!this.animation) {
      setTimeout(() => {
        this.initAnimation();
      }, 100);
    } else {
      this.animation.play();
      // Or set a specific startFrame and endFrame with:
      this.animation.play(30, 120);
    }
  }
  _handleOpenTwitterLogin() {
    const navigateToTwitterScreen = NavigationActions.navigate({
      routeName: "TwitterLogin"
    });
    this.props.navigation.dispatch(navigateToTwitterScreen);
  }

  _handleOpenYoutube() {
    const navigateToQuizScreen = NavigationActions.navigate({
      routeName: "QuizScreen"
    });
    this.props.navigation.dispatch(navigateToQuizScreen);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#eee" barStyle="dark-content" />
        <View style={styles.lottieSection}>
          <LottieView
            loop
            style={styles.lottieStyle}
            ref={animation => {
              this.animation = animation;
            }}
            source={require("../utils/animation/ride_cycle.json")}
          />
        </View>
        <View style={styles.optionsSection}>
          <View>
            <Text style={styles.headingMedium}>Tired of bicycling?</Text>
            <Text style={styles.headingSmall}>
              Try few interesting options below
            </Text>
          </View>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                this._handleOpenTwitterLogin();
              }}
              style={styles.primaryButton}
            >
              <Text style={styles.buttonText}>Twitter</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                this._handleOpenYoutube();
              }}
              style={styles.primaryButton}
            >
              <Text style={styles.buttonText}>YouTube</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  lottieSection: {
    flex: 75,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee"
  },
  lottieStyle: {
    width: 290,
    height: 290
  },
  optionsSection: {
    backgroundColor: "#fff",
    flex: 25
  },
  headingMedium: {
    marginTop: 16,
    fontSize: 16,
    color: "#414141",
    textAlign: "center",
    fontFamily: "quicksand-SemiBold"
  },
  headingSmall: {
    marginTop: 4,
    fontSize: 12,
    color: "#414141",
    textAlign: "center",
    fontFamily: "quicksand-Regular"
  },
  primaryButton: {
    flex: 50,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 12,
    borderColor: "transparent",
    backgroundColor: "#1da1f2",
    borderRadius: 6,
    borderWidth: 0.4
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "quicksand-Regular"
  },
  buttonGroup: {
    margin: 16,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
