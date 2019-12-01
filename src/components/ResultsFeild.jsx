import React from 'react';
import '../styles/PopRepo.css';

function PopularRepo(props) {
    const usr = props.client
    const usr_name = props.client.user_name;
    const usr_bio = props.client.user_bio;
    const usr_link = props.client.user_link;
    const start_date = props.client.user_start.slice(0,4);
    const location = props.client.user_location;
    const repos = props.client.repos;
    const followers = props.client.user_followers;

  return (
      <div className="resume">
      { !usr
        ? <div > </div>
        : <div>
            <h3>{usr_name}</h3>
            <h5 className="secondary">{usr_bio}</h5>
            <h5 className="secondary"><a href={usr_link}>{usr_link}</a ></h5>
            <h5 className="secondary">On Github since {start_date}, {usr_name} is a developer in {location} with {repos} public repos and {followers} followers.</h5>
            <div>
                <h4>Langauges</h4>
                <h5 className="langauges secondary">{usr_bio}</h5>
                
            </div>
          </div>

      }
      </div>
     
  );
}

export default PopularRepo;
