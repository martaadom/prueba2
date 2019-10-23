import React, { Component } from 'react';
import { connect } from 'react-redux';
import Game from './Game';
import Navbar from "./Navbar";
import {View} from 'react-native';
import { questionAnswer } from './../reducers/actions';
import { changeQuestion } from './../reducers/actions';
import { submit } from './../reducers/actions';
import { initQuestions } from './../reducers/actions';


class GameScreen extends Component {

    constructor(props){
        super(props);
        this.downloadQuestions = this.downloadQuestions.bind(this);

    }

    downloadQuestions(){
        fetch("https://quiz.dit.upm.es/api/quizzes/random10wa?token=c408be74597939371f45")
            .then(function(response){
                return response.json();
            })
            .then(questionsDownloaded => {
                this.props.dispatch(initQuestions(questionsDownloaded));
            });

    }


    componentDidMount(){
        this.downloadQuestions();
    }



    render() {
        return (

            <View style = {{flex:1, margin:10, justifyContent:'flex-start'}}>
                <Navbar/>
                <Game currentQuestion={this.props.currentQuestion}
                      lengthQuestions={this.props.questions.length}
                      finished={this.props.finished}
                      score={this.props.score}
                      questions={this.props.questions}
                      question={this.props.questions[this.props.currentQuestion]}
                      onReset={()=>{
                          this.componentDidMount()
                      }}
                      onChangeQuestion={(index)=>{
                          this.props.dispatch(changeQuestion(index))
                      }}
                      onSubmit={(questions)=>{
                          this.props.dispatch(submit(questions))
                      }}
                      onQuestionAnswer={(answer)=>{
                          this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
                      }}
                />
            </View>);
    }
}



function mapStateToProps(state){
    return{
        ...state
    };
}


export default connect(mapStateToProps)(GameScreen);