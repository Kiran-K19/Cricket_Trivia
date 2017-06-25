import React from 'react';
import questionnaire from '../data/data';
import Answers from "./Answers";
import Button from "./Button";

class Questions extends React.Component{

	render(){
  	return(
    <form className="col-md-offset-1 col-md-5">
      {
        questionnaire.questions.map( value => {
        if(questionnaire['questions'].length===Object.keys(this.props.response).length && this.props.submit){
          var name='';
          if(this.props.response[value.id])
            name='has-success';
          else
            name='has-error';
        }
        return(
        <div className={"form-group well "+name} key={value.id}>
        <p className="control-label">{value.question}</p>
         <Answers options={value.answers} id={value.id} correctAnswer={value.correctAnswer} selectAnswer={this.props.selectAnswer}/> 
      </div>
      )})}
      <div>
      <Button resetAnswers={this.props.resetAnswers} submitAnswers={this.props.submitAnswers} response={this.props.response}/>
      </div>
    </form>
    );
  }
}


export default Questions;