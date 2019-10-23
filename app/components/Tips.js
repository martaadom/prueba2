
import React from 'react';
import { View, Text} from 'react-native';

export default class Tips extends React.Component {
    render() {
        return (
            <View>
                <Text> Tips: </Text>
                <View>
                {this.props.currentQuestion.tips.map((tip,index)=>{
                    return (<Text> Tip {index+1}: {tip}</Text>)
                    })
                }
                </View>

            </View>
        )
    }}
