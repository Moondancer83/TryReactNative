import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    TextInput,
    Button,
    Alert,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity, ScrollView, FlatList, SectionList
} from 'react-native';

export default class Basics extends Component {
    constructor() {
        super();
        this.state = {
            text: ""
        }
    }

    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    render() {
        return (
            // Try removing the `flex: 1` on the parent View.
            // The parent will not have dimensions, so the children can't expand.
            // What if you add `height: 300` instead of `flex: 1`?
            <View style={{flex: 1}}>
                <View style={{height: 20, backgroundColor: 'powderblue'}} />
                <ScrollView style={{flex: 3}} pagingEnabled={true}>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({text})}
                    />
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={this._onPressButton}
                            title="Press Me"
                            color="#841584"
                        />
                    </View>
                    <View style={styles.alternativeLayoutButtonContainer}>
                        <Button
                            onPress={this._onPressButton}
                            title="This looks great!"
                        />
                        <Button
                            onPress={this._onPressButton}
                            title="OK!"
                            color="#841584"
                        />
                    </View>

                    <Text style={{padding: 10, fontSize: 42}}>
                        {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                    </Text>

                    <View style={styles.container}>
                        <TouchableOpacity onPress={this._onPressButton}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>TouchableOpacity</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Touchable with Long Press</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </ScrollView>

                <FlatList
                    data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
                <SectionList
                    sections={[
                        {title: 'D', data: ['Devin']},
                        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                        {title: 'M', data: ['Mark', 'Martha']}
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container2: {
        flex: 30,
        paddingTop: 60,
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Basics);
