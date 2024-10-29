import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import axios from 'axios';
import { useState } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

useEffect (() => {
  console.log('in use effect')
  fetchData()
}, [])


const [name, setname] = useState('');
const [price, setprice] = useState('');
const [description, setdescription] = useState('');
const [image, setimage] = useState('');
const [data,setData] = useState([]);



  function fetchData () {
  axios.get('/api/wishList')
  .then ((response) =>{
  // console.log(response.data)
  setData(response.data)
  
  })
  .catch ((error) => {
    console.log('error get in userpage', error)
  })
}


const addData = () => {

  let payload = {
  user_id: user.id,
  name: name,
  price: Number(price),
  description: description,
  image_url: image
}
console.log(payload);


  axios.post('/api/wishList' , payload)
  .then(result => {
      // res.sendStatus(201)
      console.log('working POST??')
  })
  .catch(error =>{
      console.log('failed the post', error)
      // res.sendStatus(500)
    }
      
  )
}

  return (
    <>
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>

<form onSubmit={addData}>

<input type='text' name='name' placeholder='Name' value={name} onChange={ (e) => setname(e.target.value)}></input>
<input type='text' name='price' placeholder='price' value={price} onChange={ (e) => setprice(e.target.value)}></input>
<input type='text' name='description' placeholder='description' value={description} onChange={ (e) => setdescription(e.target.value)}></input>
<input type='text' name='image_url' placeholder='image url' value={image} onChange={ (e) => setimage(e.target.value)}></input>
<button type='submit'>ADD</button>
</form>


<ul>
      {data.map((item, index) => (
        <table>
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
        </tr>
        <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.description}</td>
            <td><img 
      src={item.image_url}
      alt="image"
      /> {item.image_url}</td>
        </tr>
        
       
    </table>
      ))}
    </ul>


      <LogOutButton className="btn" />
    </div>





    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
