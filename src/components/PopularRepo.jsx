import React from 'react';
import '../styles/PopRepo.css';

class PopularRepo extends React.Component {
    constructor(props){
        super(props)
    }

     
    render(){
      let data = JSON.parse(this.props.data)
      const name = data.name
      const language = data.language
      const repo_rights =  data.liscence;
      const year = data.created_at.slice(0,4) + " - " + data.pushed_at.slice(0,4)
      const description = data.description
      const stars = data.stargazers_count
      const forks = data.forks
      const link =  data.html_url
      console.log("results",data, name)
      return (
        <div className="app-popular-repo">
            { !this.props
            ?<div></div>
            :<div className="repo-wrapper">
              <div className="repo-title third">
                <div className="repo-name">{name}</div>
                <div className="repo-year">{year}</div>
              </div>
              <div className="repo-details third">
                <div className="repo-lang">{language}</div>
                <div className="repo-rights">{repo_rights}</div>
              </div>
              <div className="repo-description">{description}</div>
              <div className="repo-copy">This repo has {stars} stars and {forks} forks. If you would like more information about this repository and my contributed code please visit <a href={link}>my site</a></div>
              <hr/>
            </div>
            }
        </div>
    );
    }
}

export default PopularRepo;
