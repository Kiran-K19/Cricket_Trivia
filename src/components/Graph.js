import React from 'react';

const Graph = (props) => {
	
  return(
  <div>
  	<div id="y-axis">
    </div>
    {JSON.stringify(props.graph)}
    <div id="x-axis">
    </div>
  </div> 
  );
}

export default Graph;