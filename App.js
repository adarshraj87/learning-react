import React, {Component,PropTypes} from "react";

import {AppRegistry, StyleSheet, Text, View} from "react-native";


class Language extends Component {

    constructor() {
        super();
        this.state = {
            name: "Adarsh",
            lanuages: ['node', 'php', 'html', 'css']
        }
    }

    render() {
        const {states} = this.state;
        return (
            <View style={styles.container}>
                <ChildComponent/>
            </View>
        )
    }
}

class ChildComponent extends Component {
    render() {
        return (<Text >{this.props.name}</Text>
        )
    }
}

ChildComponent.propTypes = {
    name: PropTypes.string
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