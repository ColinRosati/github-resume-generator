import React from 'react';
import '../styles/PopRepo.css';

function PopularRepo(props) {
    const usr = props.client
    console.log("results",props, usr)

  return (
      <div >
      { !usr 
        ? <div >
            <h1>Resume</h1>
            <h2>{JSON.stringify(props.client.user_name)}</h2>
          </div>
        : <div >
        <h1>Resume</h1>
       <div><h2>{JSON.stringify(props.client.user_name)}</h2></div>
       
     </div>

      }
      </div>
     
  );
}

export default PopularRepo;
