import React from 'react';
import Resume from './Resume'
// import ResultsFeild from './ResultsFeild'
import '../styles/AppBody.css';

function AppBody() {
  return (
    <div className="app-body">
        <h1 className="app-body-head">Github Resume</h1>
        <Resume/>
    </div>
  );
}

export default AppBody;
