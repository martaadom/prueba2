import React from 'react';
import Actionbar from './Actionbar';
import Author from './Author';
import Content from "./Content";

import { View, Text, StyleSheet,TouchableHighlight} from 'react-native';
import MyButton from "./MyButton";

export default class Game extends React.Component {


    render() {

        if (this.props.finished===false){
            return (
                <View style={{flex:1, justifyContent:"flex-start"}}>
                    <Content question={this.props.question}
                             onQuestionAnswer={this.props.onQuestionAnswer}
                             currentQuestion={this.props.currentQuestion}
                             onChangeQuestion={this.props.onChangeQuestion}
                             onSubmit={this.props.onSubmit}
                             questions={this.props.questions}
                             lengthQuestions={this.props.lengthQuestions}/>
                    <Actionbar lengthQuestions={this.props.lenghtQuestions}
                             currentQuestion={this.props.currentQuestion}
                             onChangeQuestion={this.props.onChangeQuestion}
                             onSubmit={this.props.onSubmit}
                             questions={this.props.questions}
                               lengthQuestions={this.props.lengthQuestions}
                            onReset={this.props.onReset}/>
                    <Author question={this.props.question} />
                </View>
            );

        } else {
            return [
                <View style={{flex:1}}>
                  <Text style={styles.congrats}>Congratulations, you have finished the quiz!!!!!</Text>
                  <Text style={styles.score}>SCORE: {this.props.score}</Text>
                    <MyButton
                              name="Reset"
                              onReset={this.props.onReset}/>
                 </View>,
                <View style={{flex:2}}></View>];
        }
    }

}

const styles = StyleSheet.create({
    congrats:{
        textAlign:'center',
        fontSize: 25,
        flex: 1
    },
    score:{
        textAlign:'center',
        fontSize: 38,
        flex: 1
    }
})