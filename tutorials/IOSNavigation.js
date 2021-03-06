import React, { Component } from 'react';
import {NavigatorIOS, Text, TouchableHighlight, View} from 'react-native';

export default class NavvyIOS extends Component {
    _handleNavigationRequest() {
        this.refs.nav.push({
            component: MyView,
            title: 'Genius',
            passProps: { myProp: 'genius' },
        });
    }

    render() {
        return (
            <NavigatorIOS
                ref='nav'
                initialRoute={{
                    component: MyView,
                    title: 'IOS Navigation Example',
                    passProps: { myProp: 'foo' },
                    rightButtonTitle: 'Add',
                    onRightButtonPress: () => this._handleNavigationRequest(),
                }}
                style={{flex: 1}}
            />
        );
    }
}

class MyView extends Component {
    _handleBackPress() {
        this.props.navigator.pop();
    }

    _handleNextPress(nextRoute) {
        this.props.navigator.push(nextRoute);
    }

    render() {
        const nextRoute = {
            component: MyView,
            title: 'Bar That',
            passProps: { myProp: 'bar' }
        };
        return(
            <TouchableHighlight onPress={() => this._handleNextPress(nextRoute)}>
                <Text style={{marginTop: 200, alignSelf: 'center'}}>
                    See you on the other nav {this.props.myProp}!
                </Text>
            </TouchableHighlight>
        );
    }
}