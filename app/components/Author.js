import React from 'react';
import {Text,View,Image} from 'react-native';

export default class Author extends React.Component{
    render(){
        return(
            <View>
                <Text> created by: {this.props.question.author.username}</Text>
                <Image
                     alt={this.props.question.author.photo.filename}
                     style={{flex:1}} source={{uri: this.props.question.author.photo.url}}
                />
            </View>
        )
    }
}