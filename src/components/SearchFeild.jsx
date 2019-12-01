import React from 'react';
import ResultsFeild from './ResultsFeild'
import '../styles/SearchFeild.css';

const sortData = (data) => {
  console.log("sort data")

 
 let newData = {
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


}

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

      fetch(url_repo, {
        method: 'GET'
      })
      .then( res => res.json())
      .then( res => {
        console.log(res)
        let usr_name = res[0].owner.login
        let forks = res[0].forks
        let stars = res[0].stargazers_count
        let des = res[0].description
        let name = res[0].name
        this.setState( {
          user_name: usr_name,
          pop_repo:{
            title: name,
            description: des,
            stars: stars,
            forks: forks
          }
        })
        const usrData = sortData()
      })
      .then( () => {
        console.log(this.state)
      })
      .catch( (err)=> {
        console.log(err);
        this.setState( {error: true})
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
