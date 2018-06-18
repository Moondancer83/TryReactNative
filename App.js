import React from 'react';
import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";
import createStackNavigator from "react-navigation/src/navigators/createStackNavigator";

export default createStackNavigator({
    Splash: { screen: SplashScreen},
    Home: { screen: HomeScreen }
});
