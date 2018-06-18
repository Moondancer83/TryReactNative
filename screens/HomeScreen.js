import React from 'react';
import {Text, View} from "react-native";

export default class HomeScreen extends React.Component {
    static navigationOptions = {title: 'Home'};

    render() {
        return (
            <View>
                <View style={{height: 15}}/>
                <View style={{padding: 10}}>
                    <Text style={{fontSize: 24, marginBottom: 10, fontWeight: 'bold'}}>Lorem ipsum</Text>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </View>
            </View>
        );
    }
}
