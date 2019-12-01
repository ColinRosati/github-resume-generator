import React from 'react';
import '../styles/PopRepo.css';

function PopularRepo(props) {
    const usr = props.client
    const usr_name = props.client.user_name
    const usr_link = props.client.user_link
    const start_date = props.client.user_start.slice(0,4);
    const location = ''
    const repos = ''
    const followers = ''
    console.log("results",props, usr, start_date)

  return (
      <div className="resume">
      { !usr 
        ? <div > </div>
        : <div>
            <h3>{usr_name}</h3>
            <h5 className="secondary"><a  src={usr_link}>{usr_link}</a ></h5>
            <h5 className="secondary">On Github since {start_date} {usr_name} is a developer in {location} with {repos} public repos and {followers} followers</h5>
          </div>

      }
      </div>
     
  );
}

export default PopularRepo;
