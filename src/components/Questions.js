import React from 'react';
import questionnaire from '../data/data';
import Answers from "./Answers";
import Button from "./Button";

class Questions extends React.Component{

	render(){
  	return(
    <form>
      {questionnaire.questions.map( value => (
      <div>
        <p key={value.id}>{value.question}</p>
         <Answers options={value.answers} id={value.id} correctAnswer={value.correctAnswer} selectAnswer={this.props.selectAnswer}/> 
      </div>
      ))}
      <br/>
      <Button/>
    </form>
    );
  }
}


export default Questions;