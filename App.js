import React, {Component} from "react";

import {AppRegistry, StyleSheet, Text, View} from "react-native";


class Ajax extends Component {

    constructor() {
        super();
        this.state = {
            loading: true,
            name: null
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false, name: "Raj"});
        }, 1000)
    }

    render() {

        if (this.state.loading) {
            return (<View style={style.container}><Text>Loading</Text></View>)
        } else {
            return (<View style={style.container}><Text>{this.state.name}</Text></View>)

        }

    }
}

export default Ajax;

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

AppRegistry.registerComponent('Ajax', () => Ajax);