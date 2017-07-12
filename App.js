import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View} from "react-native";

class StateTypes extends Component {


    constructor() {
        super();
        this.state = {
            name: 'Adarsh Raj',
            langauges: ['PHP', 'Node.js'],
            Project: {
                'name': "Learning React"
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.name}</Text>
                <Text>{this.state.langauges.length}</Text>
                <Text>{this.state.Project.name}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})




export default StateTypes;

AppRegistry.registerComponent('StateType', () => StateTypes);