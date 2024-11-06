import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import axios from 'axios';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './UserPage.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

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
const [editItem, setEditItem] = useState(null);

const handelEdits = (item) => {
  setname(item.name);
  setprice(item.price);
  setdescription(item.description);
  setimage(item.image_url);
  setEditItem(item.id);
}

const submitEdit = () => {
  const payload = {
    name: name,
    price: price,
    description: description,
    image_url: image
  };

  axios.put(`/api/wishList/${editItem}`, payload)
    .then(() => {
      fetchData();
      setname('');
      setprice('');
      setdescription('');
      setimage('');
      setEditItem(null);
    })
    .catch(error => {
      console.log('failed put request', error);
    });
}





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
      console.log('working POST??')
      setname('');
      setprice('');
      setdescription('');
      setimage('');
      fetchData();
  })

  .catch(error =>{
      console.log('failed the post', error)
    }
      
  )
}






function deleteID({ id }) {
  axios.delete(`/api/wishList/${id}`)
  .then(response => {
    console.log('DELTE call successful!');
    fetchData();
  })
  .catch(error => {
    console.log('something went wrong with our DELTE call');
  })
  }



//   function GiftIdeas() {
   
//     return (
//       <Link to='/giftideas'>
//         <button onClick={GiftIdeas()}>Gift Ideas</button>
//         </Link>
//     );
// }



const invisible = () => {
setname('Pierced Owl Earrings')
setprice(10.99)
setdescription('Rose gold Plated earrings')
setimage('https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg')


}


  return (
    <>

<div>
    <button onClick={() => fetchData()}>Home</button>
    <button onClick={() => {/* Add data stuff*/}}>Friends</button>

    <Link to='/help'>
        <button>Help</button>
        </Link>  
        
        
          <Link to='/giftideas'>
        <button>Gift Ideas</button>
        </Link>
        <button className='invisible' onClick={invisible}>invisible</button>
</div>


    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      {/* <p>Your ID is: {user.id}</p> */}

<form onSubmit={editItem ? submitEdit : addData}>

<input type='text' name='name' placeholder='Name' value={name} onChange={ (e) => setname(e.target.value)}></input>
<input type='text' name='price' placeholder='price' value={price} onChange={ (e) => setprice(e.target.value)}></input>
<input type='text' name='description' placeholder='description' value={description} onChange={ (e) => setdescription(e.target.value)}></input>
<input type='text' name='image_url' placeholder='image url' value={image} onChange={ (e) => setimage(e.target.value)}></input>
<button className='add'type='submit'>➕ {editItem ? 'EDIT' : 'ADD'}</button>
<button className='send' > 🚀 Send Wishlist</button>
</form>

<div className='CardK'>
<ul>
  
      {data.map((item, index) => (
        <div className='card' key={item.id}> 
        <Card key={item.id} sx={{ width: 180, height: 350 }}>
  <CardMedia
          sx={{ height: 100 }}
          image= {item.image_url || 'data:image/png;base64,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'}
          title= "error"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          {item.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.description}
          
          </Typography>
        </CardContent>
        <p className="fixneeded">{item.price}$</p>
        <CardActions>
      
          <Button size="small" onClick={() => handelEdits(item)}>Edit</Button>   
          <Button size="small" onClick={() => deleteID({ id: item.id })}>Delete</Button>   
               </CardActions>
      </Card>
      </div>
      ))}
    </ul>
    </div>

      <LogOutButton className="btn" />
    </div>





    </>
  );
}

export default UserPage;
