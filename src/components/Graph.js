import React from 'react';

const Graph = (props) => {

  const renderLabels = () =>{
    if(props.correct!==0 || props.incorrect){
      return (
      <div>
        <span className="h4" style={{'marginLeft':'52px'}}>Correct</span>
        <span className="h4" style={{'marginLeft':'55px'}}>Incorrect</span>
      </div>
      );
    }
  }

  let correctStyle = {
    'height': props.correct * 106 +'px',
  }

  let inCorrectStyle = {
    'height': props.incorrect * 106 +'px',
  }

  return (
    <div className="col-md-offset-1 col-md-5 graph-dimension">
    <div style={{'height':'424px'}}>
      <div className="correct bar" style={correctStyle}>
      </div>
      <div className="incorrect bar" style={inCorrectStyle}>
      </div>
    </div>
    {renderLabels()}
    </div>
  );
}

export default Graph;