import React, {Component} from "react";
import {AppRegistry, View,Text,StyleSheet} from "react-native";


class StateApp extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Adarsh'
        }
    }

    componentDidMount(){
        console.log('component mounteed')
        this.setState({name:'Raj'})
    }

    render() {
        return (
            <View style={style.container}>
                <Text>Hello {this.state.name}</Text>
            </View>
        )
    }
}


const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default StateApp;


AppRegistry.registerComponent('States', () => StateApp);