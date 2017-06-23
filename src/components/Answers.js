import React from 'react';

const Answers = (props) => {

	return(
      <select onChange={ e => props.selectAnswer(props.id,props.correctAnswer,e.target.value)}>
        <option selected hidden>Choose Here</option>
        {props.options.map(answer =>(
        	<option value={answer}>{answer}</option>
        ))}
      </select>
  );
}

export default Answers;