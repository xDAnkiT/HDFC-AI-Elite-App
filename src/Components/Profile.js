import React from 'react';
import {
    StyleSheet,
    Text,
    Button,
    ActivityIndicator,
    Image,
    TextInput,
    ToastAndroid,
    StatusBar,
    TouchableOpacity,
    Platform,
    View,
    Animated,
    ScrollView
} from 'react-native';
import {NavigationActions} from "react-navigation";
import LottieView from 'lottie-react-native';
import {Avatar} from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Moment from 'moment';

export default class Profile extends React.Component {
    componentDidMount() {
        this
            .props
            .onFetchProfile();
    }
    static navigationOptions = {
        title: "My profile",
        headerStyle: {
            elevation: 0,
            shadowOpacity: 0
        },
        headerTitleStyle: {
            fontFamily: 'quick sand_bold',
            fontWeight: '200',
            fontSize: 16
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
                <View style={styles.container}>

                    <ScrollView contentContainerStyle={styles.scrollView}>
                        <View
                            style={{
                            flex: 1,
                            flexDirection: 'column'
                        }}>
                            <View
                                style={{
                                flexDirection: 'row',
                                backgroundColor: "#fff",
                                padding: 12
                            }}>
                                <Avatar
                                    style={{
                                    flex: 30
                                }}
                                    large
                                    rounded
                                    source={{
                                    uri: this.props.profile
                                        ? this.props.profile.picture
                                        : "https://www.alanidental.com/wp-content/uploads/2016/01/default.png"
                                }}
                                    onPress={() => console.log("Works!")}
                                    activeOpacity={0.3}/>
                                <View
                                    style={{
                                    flex: 70,
                                    flexDirection: 'column',
                                    marginLeft: 16
                                }}>

                                    <Text
                                        style={{
                                        fontFamily: 'quicksand-SemiBold',
                                        fontSize: 16,
                                        color: "#333"
                                    }}>{this.props.profile ? this.props.profile.name : "Loading"}</Text>
                                    <Text
                                        numberOfLines={2}
                                        style={{
                                        fontFamily: 'quicksand-SemiBold',
                                        height:30,
                                        fontSize: 12,
                                        color: "#666"
                                    }}>{this.props.profile ? "This would be a profile description for the twitter looged account wthrough oAuth": "Loading"}</Text>

                                    <TouchableOpacity
                                        activeOpacity={0.3}
                                        style={{
                                        marginTop: 8,
                                        borderWidth: 1,
                                        borderColor: '#1da1f2',
                                        marginRight: 8,
                                        paddingTop: 4,
                                        paddingBottom: 4,
                                        paddingLeft: 8,
                                        paddingRight: 8,
                                        alignItems: 'center',
                                        backgroundColor: '#fff',
                                        borderRadius: 3
                                    }}>
                                        <View
                                            style={{
                                            flex: 1,
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            flexDirection: 'row'
                                        }}>
                                            <Icon name="add-a-photo" size={16} color="#1da1f2"/>
                                            <Text
                                                style={{
                                                fontFamily: 'quicksand-Bold',
                                                marginLeft: 4,
                                                fontSize: 12,
                                                color: "#1da1f2"
                                            }}>UPDATE PICTURE</Text>
                                        </View>
                                    </TouchableOpacity>

                                </View>
                            </View>

                            <View
                                style={{
                                flex: 1,
                                flexDirection: 'column',
                                backgroundColor: '#fff'
                            }}>

                                <Text
                                    style={{
                                    fontFamily: 'quicksand-Bold',
                                    marginTop: 5,
                                    fontSize: 11,
                                    color: "#111",
                                    paddingLeft: 16,
                                    paddingRight: 16,
                                    paddingTop: 4
                                }}>ACCOUNT INFORMATION</Text>
                                <View
                                    style={{
                                    backgroundColor: '#dfdfdf',
                                    height: .4,
                                    marginTop: 12
                                }}/>
                                <TouchableOpacity
                                    activeOpacity={0.3}
                                    style={{
                                    paddingBottom: 4,
                                    borderWidth: 1,
                                    borderColor: 'transparent',
                                    borderRadius: 0
                                }}>
                                    <View
                                        style={{
                                        flexDirection: 'row',
                                        paddingLeft: 16,
                                        paddingTop: 12,
                                        paddingRight: 16
                                    }}>
                                        <Icon name="account-circle" size={24} color="#1da1f2"/>
                                        <View
                                            style={{
                                            flex: 1,
                                            flexDirection: 'column',
                                            marginLeft: 16
                                        }}>
                                            <Text
                                                style={{
                                                fontFamily: 'quicksand-Bold',
                                                fontSize: 14,
                                                color: "#333"
                                            }}>About account</Text>
                                            <Text
                                                numberOfLines={2}
                                                style={{
                                                fontFamily: 'quicksand-SemiBold',
                                                fontSize: 12,
                                                color: "#666"
                                            }}>{this.props.profile ? this.props.profile.sub : "Loading"}</Text>
                                            <View
                                                style={{
                                                backgroundColor: '#dfdfdf',
                                                height: .4,
                                                marginTop: 16
                                            }}/>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={0.3}
                                    style={{
                                    paddingBottom: 4,
                                    borderWidth: 1,
                                    borderColor: 'transparent',
                                    borderRadius: 0
                                }}>
                                    <View
                                        style={{
                                        flexDirection: 'row',
                                        paddingLeft: 16,
                                        paddingTop: 8,
                                        paddingRight: 16
                                    }}>
                                        <Icon name="cake" size={24} color="#1da1f2"/>
                                        <View
                                            style={{
                                            flex: 1,
                                            flexDirection: 'column',
                                            marginLeft: 16
                                        }}>
                                            <Text
                                                style={{
                                                fontFamily: 'quicksand-Bold',
                                                fontSize: 14,
                                                color: "#333"
                                            }}>Birthday</Text>
                                            <Text
                                                style={{
                                                fontFamily: 'quicksand-SemiBold',
                                                fontSize: 12,
                                                color: "#666"
                                            }}>07 Aug, 1993</Text>
                                            <View
                                                style={{
                                                backgroundColor: '#dfdfdf',
                                                height: .3,
                                                marginTop: 16
                                            }}/>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={0.3}
                                    style={{
                                    paddingBottom: 4,
                                    borderWidth: 1,
                                    borderColor: 'transparent',
                                    borderRadius: 0
                                }}>
                                    <View
                                        style={{
                                        flexDirection: 'row',
                                        paddingLeft: 16,
                                        paddingTop: 8,
                                        paddingRight: 16
                                    }}>
                                        <Icon name="watch-later" size={24} color="#1da1f2"/>
                                        <View
                                            style={{
                                            flex: 1,
                                            flexDirection: 'column',
                                            marginLeft: 16
                                        }}>
                                            <Text
                                                style={{
                                                fontFamily: 'quicksand-Bold',
                                                fontSize: 14,
                                                color: "#333"
                                            }}>Last updated</Text>
                                            <Text
                                                style={{
                                                fontFamily: 'quicksand-SemiBold',
                                                fontSize: 12,
                                                color: "#666"
                                            }}>{this.props.profile ? Moment(this.props.profile.updated_at).format('LLL') : "Loading"}
                                            </Text>
                                            <View
                                                style={{
                                                backgroundColor: '#dfdfdf',
                                                height: .3,
                                                marginTop: 16
                                            }}/>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={0.3}
                                    style={{
                                    paddingBottom: 4,
                                    borderWidth: 1,
                                    borderColor: 'transparent',
                                    borderRadius: 0
                                }}>
                                    <View
                                        style={{
                                        flexDirection: 'row',
                                        paddingLeft: 16,
                                        paddingTop: 8,
                                        paddingRight: 16
                                    }}>
                                        <Icon name="send" size={24} color="#1da1f2"/>
                                        <View
                                            style={{
                                            flex: 1,
                                            flexDirection: 'column',
                                            marginLeft: 16
                                        }}>
                                            <Text
                                                style={{
                                                fontFamily: 'quicksand-Bold',
                                                fontSize: 14,
                                                color: "#333"
                                            }}>Tweets</Text>
                                            <Text
                                                style={{
                                                fontFamily: 'quicksand-SemiBold',
                                                fontSize: 12,
                                                color: "#666"
                                            }}>Tap to open office details</Text>
                                            <View
                                                style={{
                                                backgroundColor: '#dfdfdf',
                                                height: .3,
                                                marginTop: 16
                                            }}/>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={0.3}
                                    style={{
                                    paddingBottom: 4,
                                    borderWidth: 1,
                                    borderColor: 'transparent',
                                    borderRadius: 0
                                }}>
                                    <View
                                        style={{
                                        flexDirection: 'row',
                                        paddingLeft: 16,
                                        paddingTop: 8,
                                        paddingRight: 16
                                    }}>
                                        <Icon name="accessible" size={24} color="#1da1f2"/>
                                        <View
                                            style={{
                                            flex: 1,
                                            flexDirection: 'column',
                                            marginLeft: 16
                                        }}>
                                            <Text
                                                style={{
                                                fontFamily: 'quicksand-Bold',
                                                fontSize: 14,
                                                color: "#333"
                                            }}>Followers</Text>
                                            <Text
                                                style={{
                                                fontFamily: 'quicksand-SemiBold',
                                                fontSize: 12,
                                                color: "#666"
                                            }}>Tap to open office details</Text>
                                            <View
                                                style={{
                                                backgroundColor: '#dfdfdf',
                                                height: .4,
                                                marginTop: 16
                                            }}/>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={0.3}
                                    style={{
                                    paddingBottom: 4,
                                    borderWidth: 1,
                                    borderColor: 'transparent',
                                    borderRadius: 0
                                }}>
                                    <View
                                        style={{
                                        flexDirection: 'row',
                                        paddingLeft: 16,
                                        paddingTop: 8,
                                        paddingRight: 16
                                    }}>
                                        <Icon name="accessibility" size={24} color="#1da1f2"/>
                                        <View
                                            style={{
                                            flex: 1,
                                            flexDirection: 'column',
                                            marginLeft: 16
                                        }}>
                                            <Text
                                                style={{
                                                fontFamily: 'quicksand-Bold',
                                                fontSize: 14,
                                                color: "#333"
                                            }}>Following</Text>
                                            <Text
                                                style={{
                                                fontFamily: 'quicksand-SemiBold',
                                                fontSize: 12,
                                                color: "#666"
                                            }}>Tap to open office details</Text>
                                            <View
                                                style={{
                                                backgroundColor: '#dfdfdf',
                                                height: .3,
                                                marginTop: 16
                                            }}/>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={0.3}
                                    style={{
                                    paddingBottom: 4,
                                    borderWidth: 1,
                                    borderColor: 'transparent',
                                    borderRadius: 0
                                }}>
                                    <View
                                        style={{
                                        flexDirection: 'row',
                                        paddingLeft: 16,
                                        paddingTop: 8,
                                        paddingRight: 16
                                    }}>
                                        <Icon name="power-settings-new" size={24} color="#1da1f2"/>
                                        <View
                                            style={{
                                            flex: 1,
                                            flexDirection: 'column',
                                            marginLeft: 16
                                        }}>
                                            <Text
                                                style={{
                                                fontFamily: 'quicksand-SemiBold',
                                                fontSize: 14,
                                                color: "#333"
                                            }}>Sign out</Text>
                                            <Text
                                                style={{
                                                fontFamily: 'quicksand-SemiBold',
                                                fontSize: 12,
                                                color: "#666"
                                            }}>Tap to open office details</Text>
                                            <View
                                                style={{
                                                backgroundColor: '#fff',
                                                height: .4,
                                                marginTop: 16
                                            }}/>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <Text
                                    style={{
                                    fontFamily: 'quicksand-SemiBold',
                                    marginTop: 5,
                                    fontSize: 11,
                                    color: "#111",
                                    paddingLeft: 16,
                                    paddingRight: 16
                                }}>MORE INFORMATION</Text>
                                <View
                                    style={{
                                    backgroundColor: '#dfdfdf',
                                    height: .3,
                                    marginTop: 8
                                }}/>

                                <TouchableOpacity
                                    activeOpacity={0.3}
                                    style={{
                                    paddingBottom: 4,
                                    borderWidth: 1,
                                    borderColor: 'transparent',
                                    borderRadius: 0
                                }}>
                                    <View
                                        style={{
                                        flexDirection: 'row',
                                        paddingLeft: 16,
                                        paddingTop: 16,
                                        paddingRight: 16
                                    }}>
                                        <Icon name="gavel" size={24} color="#1da1f2"/>
                                        <View
                                            style={{
                                            flex: 1,
                                            flexDirection: 'column',
                                            marginLeft: 16
                                        }}>
                                            <Text
                                                style={{
                                                fontFamily: 'quicksand-SemiBold',
                                                fontSize: 14,
                                                color: "#333"
                                            }}>Privacy policy</Text>
                                            <Text
                                                style={{
                                                fontFamily: 'quicksand-SemiBold',
                                                fontSize: 12,
                                                color: "#666"
                                            }}>Tap to open office details</Text>
                                            <View
                                                style={{
                                                backgroundColor: '#dfdfdf',
                                                height: .4,
                                                marginTop: 16
                                            }}/>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={0.3}
                                    style={{
                                    paddingBottom: 4,
                                    borderWidth: 1,
                                    borderColor: 'transparent',
                                    borderRadius: 0
                                }}>
                                    <View
                                        style={{
                                        flexDirection: 'row',
                                        paddingLeft: 16,
                                        paddingTop: 8,
                                        paddingRight: 16
                                    }}>
                                        <Icon name="favorite" size={24} color="#1da1f2"/>
                                        <View
                                            style={{
                                            flex: 1,
                                            flexDirection: 'column',
                                            marginLeft: 16
                                        }}>
                                            <Text
                                                style={{
                                                fontFamily: 'quicksand-SemiBold',
                                                fontSize: 14,
                                                color: "#333"
                                            }}>Credits</Text>
                                            <Text
                                                style={{
                                                fontFamily: 'quicksand-SemiBold',
                                                fontSize: 12,
                                                color: "#666"
                                            }}>Tap to open office details</Text>
                                            <View
                                                style={{
                                                backgroundColor: '#dfdfdf',
                                                height: .4,
                                                marginTop: 16
                                            }}/>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={0.3}
                                    style={{
                                    paddingBottom: 4,
                                    borderWidth: 1,
                                    borderColor: 'transparent',
                                    borderRadius: 0
                                }}>
                                    <View
                                        style={{
                                        flexDirection: 'row',
                                        paddingLeft: 16,
                                        paddingTop: 8,
                                        paddingRight: 16
                                    }}>
                                        <Icon name="live-help" size={24} color="#1da1f2"/>
                                        <View
                                            style={{
                                            flex: 1,
                                            flexDirection: 'column',
                                            marginLeft: 16
                                        }}>
                                            <Text
                                                style={{
                                                fontFamily: 'quicksand-SemiBold',
                                                fontSize: 14,
                                                color: "#333"
                                            }}>Need Support</Text>
                                            <Text
                                                style={{
                                                fontFamily: 'quicksand-SemiBold',
                                                fontSize: 12,
                                                color: "#666"
                                            }}>Tap to open office details</Text>
                                            <View
                                                style={{
                                                backgroundColor: '#dfdfdf',
                                                height: .3,
                                                marginTop: 16
                                            }}/>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={0.3}
                                    style={{
                                    paddingBottom: 4,
                                    borderWidth: 1,
                                    borderColor: 'transparent',
                                    borderRadius: 0
                                }}>
                                    <View
                                        style={{
                                        flexDirection: 'row',
                                        paddingLeft: 16,
                                        paddingTop: 8,
                                        paddingRight: 16,
                                        paddingBottom: 16
                                    }}>
                                        <Icon name="info" size={24} color="#1da1f2"/>
                                        <View
                                            style={{
                                            flex: 1,
                                            flexDirection: 'column',
                                            marginLeft: 16
                                        }}>
                                            <Text
                                                style={{
                                                fontFamily: 'quicksand-SemiBold',
                                                fontSize: 14,
                                                color: "#333"
                                            }}>About us</Text>
                                            <Text
                                                style={{
                                                fontFamily: 'quicksand-SemiBold',
                                                fontSize: 12,
                                                color: "#666"
                                            }}>Tap to open office details</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
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
    headingMedium: {
        marginTop: 16,
        fontSize: 16,
        color: '#414141',
        textAlign: 'center',
        fontFamily: 'quicksand-SemiBold'
    },
    headingSmall: {
        marginTop: 4,
        fontSize: 12,
        color: '#414141',
        textAlign: 'center',
        fontFamily: 'quicksand-Regular'
    },
    primaryButton: {
        flex: 50,
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 12,
        paddingRight: 12,
        borderColor: '#fff',
        backgroundColor: "#325795",
        borderRadius: 6,
        borderWidth: .4
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'quicksand-Regular'
    },
    buttonGroup: {
        margin: 16,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});