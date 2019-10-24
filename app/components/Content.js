import React from 'react';
import {View, Image, Text, TextInput, StyleSheet} from 'react-native';

export default class Content extends React.Component {


    render() {
            return (
                <View style={{flex:1}}>
                    <Image style={{flex:5}} source={{uri: this.props.question.attachment.url}}/>

                    <Text style={styles.question}>QUESTION { this.props.currentQuestion + 1}: {this.props.question.question}</Text>
                    <TextInput style={styles.textinput}
                               value={this.props.question.userAnswer || ""}
                               placeholder="Type your answer"
                               type="text"
                               onChangeText={(e)=>{this.props.onQuestionAnswer(e);}

                               }/>
                    <View style={{flex:1, marginBottom: 8}}>
                        <Text>Tips:</Text>
                        {this.props.question.tips.length === 0 ?
                            <Text>{"No tips"}</Text>:this.props.question.tips.map(function(t){ return <Text>{t}</Text>;})}
                    </View>
                </View>

            );
        }


}
const styles = StyleSheet.create({
    question:{
        textAlign:'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop:4,
        marginBottom:2,
    },
    textinput:{
        textAlign:'center',
        fontSize: 15,
        margin: 4,
    }
})