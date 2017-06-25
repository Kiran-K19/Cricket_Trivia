import React from 'react';

const Answers = (props) => {
	return(
      <select className=" form-control input-lg" onChange={ e =>  props.selectAnswer(props.id,props.correctAnswer,e.target.value)} required>
        <option hidden value="">Choose Here</option>
        {props.options.map( (answer,i) =>
        	<option key={i}value={answer}>{answer}</option>
        )}
      </select>
  );
}

export default Answers;