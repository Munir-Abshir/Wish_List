import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import axios from 'axios';
function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

useEffect (() => {
  console.log('in use effect')
  fetchData()
}, [])


  function fetchData () {
  axios.get('/api/wishList')
  .then ((response) =>{
  console.log(response.data)
  
  })
  .catch ((error) => {
    console.log('error get in userpage', error)
  })
}


  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>

{/* <table>
  <tr>
    <th>
    Name
    </th>
  </tr>

<tr>
  <td>
{user.id}
  </td>
</tr>
</table> */}


      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
