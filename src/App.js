import React from 'react';
import * as actionCreators from './actions/actionCreators';
import {connect} from 'react-redux';
import Questions from "./components/Questions";
import Graph from "./components/Graph";
import './App.css';

function mapStateToProps(state){
return{
  submit:state.submit,
  correct: state.correct,
  incorrect: state.incorrect,
  response: state.response
}
}

class App extends React.Component{
	render(){
  	return(
    	<div className="container-fluid">
        <div className="row text-center row-buffer">
          <h1 className="text-primary">CRICKET TRIVIA</h1>
        </div>
        <div className="row jumbotron">
        <Questions submit={this.props.submit} selectAnswer={this.props.selectAnswer} response={this.props.response} resetAnswers={this.props.resetAnswers} submitAnswers={this.props.submitAnswers}/>
        <Graph graph={this.props.response} correct={this.props.correct} incorrect={this.props.incorrect}/>
        </div>
      </div>
    );
  }
}

App = connect(mapStateToProps,{...actionCreators})(App);


export default App;
