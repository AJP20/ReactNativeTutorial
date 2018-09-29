import React from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';

class Cities extends React.Component {
    render() {
        return (
            <View style={styles.cit}>
                <Image source={this.props.image} style={{width: 50, height: 50}}/>
                <Text>Welcome to {this.props.name}!</Text>
            </View>
        );
    }
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    render() {
        let bostonFlag = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Boston.svg/1200px-Flag_of_Boston.svg.png'
        };
        let londonFlag = {
            uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png'
        };
        return (
        <View style={styles.container}>
            <Cities name='Boston' image={bostonFlag}/>
            <Cities name='London' image={londonFlag}/>
            <TextInput placeholder="Enter city."
                       onChangeText={(text) => this.setState({text})}/>
            <Text>{this.state.text.split(' ').map((word) => word && '🍕').join(' ')}</Text>
        </View>


    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cit: {
        flexDirection:'row',
        alignItems: 'center',
        padding: 10
    }
});
