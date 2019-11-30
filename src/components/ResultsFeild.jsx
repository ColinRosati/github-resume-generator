import React from 'react';
import '../styles/ResultsFeild.css';

function ResultsFeild(props) {
  console.log("results",props)
  return (
    <div className="app-body-results">
        search results
  <div>{JSON.stringify(props.data)}</div>
    </div>
  );
}

export default ResultsFeild;
