import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Container, Grid } from '@mui/material';

function GiftIdeas({items, search}) {
  return (
    <Container>
    <Grid container spacing={2}>

      {items.filter((item)=>{
               return search.toLowerCase()  === ""? item: item.title.toLowerCase().includes(search);
      }).map((item, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card sx={{ height: '100%' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {item.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

}


export default GiftIdeas