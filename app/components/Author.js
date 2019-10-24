import React from 'react';
import {Text,View,Image} from 'react-native';

export default class Author extends React.Component{
    render(){
        return(
            <View>
                <Text> created by: {this.props.question.author.username}</Text>
            </View>
        )
    }
}