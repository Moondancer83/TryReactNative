import React from 'react';
import {Image, View} from "react-native";

export default class SplashScreen extends React.Component{
    static navigationOptions = {header: null};

    componentDidMount() {
        const that = this;
        setTimeout(function () {
            that.props.navigation.replace('Home');
        }, 2000);
    }

    render() {
        return (
            <View>
                <Image
                    source={require('../assets/images/Splash.png')}
                    style={{width: '100%', height: '100%'}} />
            </View>
        );
    }
}