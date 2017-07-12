import React, {Component} from "react";

import {AppRegistry, StyleSheet, Text, View} from "react-native";


class Language extends Component {

    constructor() {
        super();
        this.state = {
            name: "Adarsh",
            lanuages: ['node', 'php','html','css']
        }
    }

    render() {
        const {states} = this.state;
        let languages = null;
        languages = this.state.lanuages.map((language, i) => {
            return (<Text key={i}>{language}</Text>)
        })
        return (
            <View style={styles.container}>
                {languages}
            </View>
        )
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