import React from 'react';
import {Text,View} from 'react-native';

export default class Author extends React.Component{
    render(){
        return(
            <View>
                <Text> {this.props.author.username}</Text>
            </View>
        )
    }
}