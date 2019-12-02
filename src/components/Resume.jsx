import React from 'react';
import PopularRepo from './PopularRepo'
import ResumeFeild from './ResumeFeild'
import '../styles/Resume.css';

// Search feild create github api call from search input form
class Resume extends React.Component {
    constructor(props){
        super(props)
        this.i = 1
        let unique_items;
        this.state = { // create state object of all api details
          user_name: '',
          user_bio: '',
          user_location: '',
          user_link: '',
          langauge: [],
          unique_langauge: [],
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
      .then( res => res.json()) // coherse into JSON
      .then( res => { // put all repo data into state
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
      .catch( (err)=> { // catch any error, set state error
        console.log(err); 
        this.setState( {error: true}) //TODO handle error catch statments
      })

      fetch(url_info, { // second api call
        method: 'GET'
      })
      .then( res => res.json())
      .then( res => { // put all info data into state
        let start_date = res.created_at;
        let bio = res.bio;
        let location = res.location;
        let followers = res.followers;
        this.setState({
          user_start: start_date,
          user_bio: bio,
          user_location: location,
          user_followers: followers

      })})
      .catch( (err)=> {
        console.log(err);
        this.setState( {error: true}) //TODO handle error catch statments
      })

    }


    // push languages into langauge state
    // sort langauges into unique langauges
    // count all repeating langauges
    // make percentage out from total_repo/repeat_language
    // TODO finish this component features and style
    // TODO handle all repo langauge into async component
    popLang(lang){ 
      this.state.langauge.push(lang) // push all languges

      let langArray = this.state.langauge // language local array

      const _unique = ( value, index, self) => { // return only unique values
        return self.indexOf(value) === index;
      }

      this.unique_items = langArray.filter(_unique); // filter logic to remove repeating
    }

//TODO put all this form into seperate component
  render(){ // handle API data here. render each array object into DOM elements
    let items = this.state.response;
    return (

      <div className="app-body">
      <div className="app-body-search">   
        <div className="app-body-search-wrapper">
          <h2 className="search-head">Github username</h2>
          <form onSubmit={this.handleSubmit} alt="username">
              <label htmlFor="username"></label>
              <input className="username" name="username" type="text"></input>
              <button> generate </button>
          </form>
        </div>
      </div>
      
      { !items  // ternery conditional render items
              ? <div className="app-results-feild">Search valid github users</div>
              : <div className="app-results-feild">
                  <ResumeFeild client={this.state}/>
                  <div>
                      <h4>Langauges</h4>
                      
                      <h5 className="langauges secondary">{this.unique_items}</h5> 
                  </div>

                  <div className="repo-results-wrapper">
                    <h5 className="repo-header-title">Popular Repositories</h5>
                      {items.map((res, index) => {
                          this.i = index
                          this.popLang(items[index].language)
                          return <div key={items[index].id}><PopularRepo data={JSON.stringify(items[index])} key={items[index].id} /></div>
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
