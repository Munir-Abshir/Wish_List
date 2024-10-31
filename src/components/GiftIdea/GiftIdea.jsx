import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import GiftIdeas from '../GiftIdeas/GiftIdeas'
import { Container } from '@mui/material';

function GiftIdea() {
  const [items, setitems]= useState([]);
  const [search, setSearch] = useState('');

  const fetchIdeas = ()=>{
    const BASE_URL = 'https://fakestoreapi.com/products';
    axios.get(BASE_URL).
    then((response)=> {
      console.log(response.data);

      setitems(response.data)
    })
  }

  
  useEffect(()=>{
    fetchIdeas()

  },[])


  return (
   <Container>
     <div>

<h3>Search For Gift Ideas</h3>
<input type="text"  placeholder='Search for Gift items' value={search} onChange={(e)=>setSearch(e.target.value)}/>
<div>
<GiftIdeas items={items} search ={search}/>
</div>

</div>

   </Container>
  )
}

export default GiftIdea