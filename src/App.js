import React from 'react';
import * as actionCreators from './actions/actionCreators';
import {connect} from 'react-redux';
import Questions from "./components/Questions";
import Graph from "./components/Graph";
import './App.css';

function mapStateToProps(state){
return{
  correct: state.correct,
  incorrect: state.incorrect,
  response: state.response
}
}

class App extends React.Component{
	render(){
  	return(
    	<div>
        <Questions selectAnswer={this.props.selectAnswer} response={this.props.response}/>
        <br/>
        <Graph graph={this.props.response}/>
      </div>
    );
  }
}

App = connect(mapStateToProps,{...actionCreators})(App);


export default App;
