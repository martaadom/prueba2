import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';


export default class MyButton extends React.Component {

    constructor(props){
        super(props);
        this.activateButton = this.activateButton.bind(this);
    }
    activateButton(i){
        switch (this.props.name){
            case "Previous":
                if(i===0){
                    return true;
                } else {
                    return false;
                }
            case "Next":
                if((this.props.lengthQuestions-1)===i){
                    return true;
                } else {
                    return false;
                }

        }
    }


    render() {
        switch (this.props.name){
            case "Previous":
                return (
                    <TouchableHighlight disabled={this.activateButton(this.props.currentQuestion)}
                                       onPress={()=>this.props.onChangeQuestion(this.props.currentQuestion-1)}
                                       style={styles.bprevious}>
                        <Text style={styles.buttontext}>{this.props.name}</Text>
                    </TouchableHighlight>
                );
            case "Next":
                return (
                    <TouchableHighlight disabled={this.activateButton(this.props.currentQuestion)}
                                        onPress={()=>this.props.onChangeQuestion(this.props.currentQuestion+1)}
                                        style={styles.bnext}>
                        <Text style={styles.buttontext}>{this.props.name}</Text>
                    </TouchableHighlight>
                );
            case "Submit":
                return (
                    <TouchableHighlight   disabled={this.activateButton(this.props.currentQuestion)}
                                         onPress={()=>this.props.onSubmit(this.props.questions)}
                                         style={styles.bsubmit}>
                        <Text style={styles.buttontext}>{this.props.name}</Text>
                    </TouchableHighlight>
                );
            case "Reset":
                return (
                    <TouchableHighlight  onPress={()=>this.props.onReset()}  style={styles.breset}>
                        <Text style={styles.buttontext}>{this.props.name}</Text>
                    </TouchableHighlight>
                );

        }


    }
}
const styles = StyleSheet.create({
    breset:{
        flex:1,
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'#eee'
    },
    bsubmit:{
        flex:1,
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'#eee'
    },
    bnext:{
        flex:1,
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'#eee'
    },
    bprevious:{
        flex:1,
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'#eee'
    },
    buttontext:{
        fontSize:20
    }
})