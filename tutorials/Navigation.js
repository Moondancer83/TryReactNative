import React from  "react";
import createStackNavigator from "react-navigation/src/navigators/createStackNavigator";
import {Button, Text, View} from "react-native";

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigate('Profile', { name: 'Jane' })
                }
            />
        );
    }
}

class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: "Jane's Profile",
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Jane's Profile</Text>
            </View>
        );
    }
}
const App = createStackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
});

export default App;