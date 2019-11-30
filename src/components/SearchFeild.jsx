import React from 'react';
import ResultsFeild from './ResultsFeild'
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
          error:false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
      // document.querySelector()
    }

    handleSubmit(e){
      
      e.preventDefault();
      const name = document.querySelector(".username").value
   
      const url_repo = 'https://api.github.com/users/' + name + '/repos'
      const url = 'https://api.github.com/search/users?q=' + name 

      fetch(url, {
        method: 'GET'
      })
      .then( res => res.json())
      .then( res => {
        console.log(res.items[0], url)
        let usr_name = res.items[0].login
        this.setState( {user_name: usr_name})
      })
      .then( () => {
        console.log(this.state)
      })
      .catch( (err)=> {
        console.log(err);
        this.setState( {error: true})
      })

      fetch(url_repo, {
        method: 'GET'
      })
      .then( res => res.json())
      .then( res => {
        console.log(res, url_repo)
        // let usr_name = res.items[0].login
        // this.setState( {user_name: usr_name})
      })
      
    }



  render(){ // handle API data here. render each array object into DOM elements
    return (
      <div className="app-body">
      <div className="app-body-search">
          <h2>Github username</h2>
          <form onSubmit={this.handleSubmit}>
              <input className="username" name="username" type="text"></input>
              <button> generate </button>
          </form>
      </div>
      <ResultsFeild data={this.state}/>
      </div>
    );
}
}

export default SearchFeild;
