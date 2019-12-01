import React from 'react';
import PopularRepo from './PopularRepo'
import ResultsFeild from './ResultsFeild'
import '../styles/Resume.css';

// Search feild create github api call from search input form
class Resume extends React.Component {
    constructor(props){
        super(props)
        this.i = 0

        this.state = { // create state object of all api details
          user_name: '',
          user_bio: '',
          user_location: '',
          user_link: '',
          langauge: '',
          repos: '',
          user_followers: '',
          user_start: '',
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
    }

    handleSubmit(e){ // submit search api call
      
      e.preventDefault();
      const name = document.querySelector(".username").value
   
      const url_info= 'https://api.github.com/users/' + name
      const url_repo = 'https://api.github.com/users/' + name + '/repos'

      fetch(url_repo, {
        method: 'GET',
        'X-RateLimit-Limit': '5000'
      })
      .then( res => res.json())
      .then( res => {
        console.log(res)
        let usr_name = res[this.i].owner.login
        let usr_path = res[this.i].owner.html_url
        let forks = res[this.i].forks
        let stars = res[this.i].stargazers_count
        let des = res[this.i].description
        let name = res[this.i].name
        let res_repos = res.length
        this.setState( {
          user_name: usr_name,
          user_link: usr_path,
          repos: res_repos,
          response: res
        })
      })
      .then( () => {
        console.log(this.state)
      })
      .catch( (err)=> {
        console.log(err);
        this.setState( {error: true})
      })

      fetch(url_info, { // second api call
        method: 'GET'
      })
      .then( res => res.json())
      .then( res => {
        let start_date = res.created_at;
        let bio = res.bio;
        let location = res.location;
        let followers = res.followers;
        console.log("start", start_date)
        this.setState({
          user_start: start_date,
          user_bio: bio,
          user_location: location,
          user_followers: followers

      })})
      .catch( (err)=> {
        console.log(err);
        this.setState( {error: true})
      })

    }



  render(){ // handle API data here. render each array object into DOM elements
    let items = this.state.response;
    console.log(items)
    return (
      <div className="app-body">
      <div className="app-body-search">
        <div className="app-body-search-wrapper">
          <h2 className="search-head">Github username</h2>
          <form onSubmit={this.handleSubmit}>
              <input className="username" name="username" type="text"></input>
              <button> generate </button>
          </form>
        </div>
      </div>
      
      { !items  // ternery conditional render items
              ? <div className="app-results-feild"></div>
              : <div className="app-results-feild">
                  <ResultsFeild client={this.state}/>
                  <div className="repo-results-wrapper">
                  <h5>Popular Repositories</h5>
                  {items.map((res, index) => {
                      this.i = index
                      return <div><PopularRepo data={JSON.stringify(items[index])} key={items.id}/></div>
                      // return <div>{JSON.stringify(items[index])}</div>
                    })
                  }
                </div>
              </div>
        }
     
      </div>
    );
}
}

export default Resume;
