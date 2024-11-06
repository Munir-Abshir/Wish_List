import React from 'react';
import './InfoPage.css'
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <>
    <div className="container">

      <h2>Technologies</h2>
      </div>
   

    <div>
     
      <li>Node</li> <br /> 
        <li>Express</li><br />
        <li>React</li><br />
        <li>PostgreSQL</li><br />
        <li>Redux</li><br />
        <li>Sagas</li><br />
        <li>CSS</li><br />
        <li>Heroku</li><br />
    </div>

    </>
  );
}
export default InfoPage;
