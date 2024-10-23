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
    console.log(result.rows)
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
router.post('/api/wishList', (req, res) => {
console.log(req.body)
const name = req.body.name
const price = req.body.price
const description = req.body.description
const image = req.body.image_url

const queryText = `INSERT INTO "wishList"

            ("name", "price", "description", "image_url")
            VALUES
            ($1,$2,$3,$4)
            ;`


pool.query(queryText, [name,price,description,image])
.then(result => {
  res.sendStatus(2001)
})
.catch(error => {
  res.sendStatus(500);
})
});

module.exports = router;
