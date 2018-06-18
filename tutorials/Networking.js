import React, { Component } from 'react';
import {ActivityIndicator, FlatList, SectionList, StyleSheet, Text, View} from 'react-native';

export default class Networking extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            dataSource: [],
        }
    }

    componentDidMount() {
        this.setState({isLoading: true});
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                }, function(){

                });
            })
            .catch((error) =>{
                console.error(error);
            });
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={{flex: 1}}></View>
                {this.content()}
            </View>
        );
    }

    content() {
        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return(
            <View style={{flex: 1, paddingTop:20}}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
