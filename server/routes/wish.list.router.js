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
router.post('/', (req, res) => {
// post
});

module.exports = router;
