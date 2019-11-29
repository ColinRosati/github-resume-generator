import React from 'react';
import SearchFeild from './SearchFeild'
import ResultsFeild from './ResultsFeild'
import '../styles/AppBody.css';

function AppBody() {
  return (
    <div className="app-body">
        <h1>GithubResume</h1>
        <SearchFeild/>
        <ResultsFeild/>
    </div>
  );
}

export default AppBody;
