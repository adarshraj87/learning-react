import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View} from "react-native";


class StateApp extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Adarsh'
        }
    }

    componentDidMount() {
        console.log('component mounteed')
    }

    updateName() {
        console.log('call is coming' + this.state.name);
        if (this.state.name == "Adarsh")
            this.setState({name: 'Raj'})
        else
            this.setState({name: "Adarsh"})
    }

    render() {
        return (
            <View style={style.container}>
                <Text onPress={() => this.updateName()}>Hello {this.state.name}</Text>
            </View>
        )
    }
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default StateApp;


AppRegistry.registerComponent('States', () => StateApp);