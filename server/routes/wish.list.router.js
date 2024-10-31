const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
/**
 * GET route template
 */
  router.get('/', (req, res) => {
      // GET route code here
   let queryText = 'SELECT * FROM "wishList" WHERE user_id = $1;'
   pool.query(queryText, [req.user.id])
   .then((result) => {
    // console.log(result.rows)
    res.send(result.rows)
   })
   .catch((error) => {
    console.log('error with get in js', error)
    res.sendStatus(500);
   })
  });

/**
 * POST route template
 */
router.post('/', (req, res) => {
console.log(req.body)
const user_id = req.body.user_id
const name = req.body.name
const price = req.body.price
const description = req.body.description
const image = req.body.image_url

const queryText = `INSERT INTO "wishList"

            ("user_id","name", "price", "description", "image_url")
            VALUES
            ($1,$2,$3,$4,$5)
            ;`;


pool.query(queryText, [user_id,name,price,description,image])
.then(result => {
  console.log('succsess???')
  res.sendStatus(200);
})
.catch(error => {
  console.log(error, "error")
  res.sendStatus(500);
})
});


// put ???
// router.put('/:id',(req,res) => {
//   let {id} = req.params;
//   const queryText = 'UPDATE "wishList" set // WHERE "id" = $1;';
//   pool.query(queryText, [id])
//   .then(result => {
//       res.sendStatus(200);
//   })
//   .catch(error => {
//       res.sendStatus(500);})
// });






router.delete('/:id',(req,res) => {
  const itemsId = req.params.id
  const queryText = 'DELETE FROM "wishList" WHERE "id"=$1;';

  pool.query(queryText, [itemsId]) 
      .then(response => {
          console.log('id with deletwd ', response);
          res.sendStatus(200);
          // console.log()
      })
      .catch(error => {
          console.log("error", error);
          res.sendStatus(500);
 
      })
  
  })


module.exports = router;
