import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View} from "react-native";

const HeaderTitle = () => (
    <Text>This is a title</Text>
)
const FooterTitle = () => (
    <Text>This is a footer</Text>
)
const Header = () => (
    <View>
        <HeaderTitle/>
    </View>
)

const Footer = () => (
    <View>
        <FooterTitle/>
    </View>
)

export default class HelloWorld extends Component {

    constructor() {
        super();
        this.state = {
            'name': 'This is a name for app'
        }
    }

    componentWillMount() {
        console.log('loading component');
    }

    componentDidMount() {
        console.log('loaded component')
        this.setState({name: 'Changed'})
    }

    render() {
        return (
            <View style={frame.outliner}>
                <Header/>
                <Footer/>
            </View>
        )
    }

}

const frame = StyleSheet.create({
    outliner: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    displayText: {
        fontSize: 24
    }
})

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);





