import React from 'react';
import questionnaire from '../data/data';
const Button = (props) => {

	return(
  <div className="row">
  	<button className="btn btn-primary btn-lg col-md-offset-1 col-md-5" type="submit" value="Submit" onClick={ e =>{
      if(questionnaire['questions'].length===Object.keys(props.response).length)
            e.preventDefault();
          props.submitAnswers();
          }}>Submit</button>
    <button className="btn btn-danger btn-lg btn-lg col-md-offset-1 col-md-4" type="reset" value="Reset" onClick={()=>props.resetAnswers()}>Clear</button>
  </div>
  );
}

export default Button;