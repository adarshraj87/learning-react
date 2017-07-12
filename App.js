import React, {Component} from "react";

import {AppRegistry, StyleSheet, Text, View} from "react-native";


class Language extends Component {

    constructor() {
        super();
        this.state = {
            name: 'Adarsh'
        }
    }

    render() {
        const {name} = this.state;
        return (
            <View style={styles.container}>
                <DisplayLanguage name={name}/>
            </View>
        )
    }
}

export class DisplayLanguage extends Component {
    render() {
        return (<Text>{this.props.name}</Text>)
    }
}
export default Language;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

AppRegistry.registerComponent('Language', () => Language);