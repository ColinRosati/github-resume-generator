import React from 'react';
import '../styles/SearchFeild.css';

// Search feild create github api call from search input form
class SearchFeild extends React.Component {
    constructor(props){
        super(props)
        this.state = {results: []};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
      // document.querySelector()
    }

    handleSubmit(e){
      e.preventDefault();
      console.log("search api", e)
      const data = new FormData(e.target);
      
      fetch('/api/form-submit-url', {
        method: 'POST',
        body: data,
      });
      
    }



  render(){ // handle API data here. render each array object into DOM elements
    return (
      <div className="app-body-search">
          <h2>Github username</h2>
          <form onSubmit={this.handleSubmit}>
              <input className="username" name="username" type="text"></input>
              <button> generate </button>
          </form>
      </div>
    );
}
}

export default SearchFeild;
