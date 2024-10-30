import React from 'react';
import './InfoPage.css'
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <p>Info Page</p>

      <p>Technologies</p>

  <ul>
      <li> Node</li>
      <li> Express</li>
      <li> React</li>
      <li>Postgresql </li>
      <li> Redux</li>
      <li> Sagas</li>
      <li> Redux</li>
      <li> CSS</li>
      <li> Heroku</li>
  </ul>



    </div>
  );
}

export default InfoPage;
