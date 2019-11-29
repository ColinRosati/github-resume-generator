import React from 'react';
import '../styles/SearchFeild.css';

// Search feild create github api call from search input form
class SearchFeild extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          user_name: '',
          intro: '',
          langauge: '',
          pop_repo: {
            title: '',
            repository: '',
            description: '',
            stars: '',
            forks: ''
          },
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
      // document.querySelector()
    }

    handleSubmit(e){
      e.preventDefault();
      console.log("search api", e.target)
      const data = new FormData(e.target);

      const url = 'https://api.github.com/search/users?q=ColinRosati1' // hardcode api
      // const url = 'https://api.github.com/search/users?q=' + data + '/repo'
      fetch(url, {
        method: 'GET'
      })
      .then( res => res.json())
      .then( res => {
        console.log(res.items[0])
        let usr_name = res.items[0].login
        this.setState( {user_name: usr_name})
      })
      .then( () => {
        console.log(this.state)
      })
      
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
