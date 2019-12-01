import React from 'react';
import '../styles/PopRepo.css';

function PopularRepo(props) {

  console.log("results",props)

  return (
      <div className="app-popular-repo">
          search results
        {/* <div>{JSON.stringify(props.data)}</div> */}
        <div>{JSON.stringify(props.data.pop_repo.description)}</div>
      </div>
  );
}

export default PopularRepo;
