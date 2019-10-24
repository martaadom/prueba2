import React from 'react';
import Actionbar from './Actionbar';
import Author from './Author';
import Content from "./Content";

import {TouchableHighlight, View, Text, StyleSheet} from 'react-native';
import MyButton from "./MyButton";

export default class Game extends React.Component {


    render() {

        if (this.props.finished===false){
            return (
                <View style={{flex:1, justifyContent:"flex-start"}}>
                    <Content question={this.props.question}
                             onQuestionAnswer={this.props.onQuestionAnswer} />
                    <Actionbar lengthQuestions={this.props.lenghtQuestions}
                             currentQuestion={this.props.currentQuestion}
                             onChangeQuestion={this.props.onChangeQuestion}
                             onSubmit={this.props.onSubmit}
                             questions={this.props.questions}/>
                    <Author question={this.props.question} />
                </View>
            );

        } else {
            return(
                <View>
                  <Text style={styles.congrats}>Congratulations! You have finished the quiz</Text>
                  <Text style={styles.score}>SCORE: {this.props.score}</Text>
                    <MyButton name="Reset"
                              onReset={this.props.onReset}/>
                 </View>
              );
        }
    }

}

const styles = StyleSheet.create({
    congrats:{
        //rellenar con el estilo que sea
        textAlign:'center',
        fontSize: 25
    },
    score:{
        textAlign:'center',
        fontSize: 38
        //rellenar con estilo
    }
})