var express = require('express');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('Kangaroo', { title: 'Search Results Kangaroo' });
});
*/
const kangaroo_controlers= require('../controllers/kangaroo');

router.get('/', kangaroo_controlers.kangaroo_view_all_Page );

/* GET detail costume page */
router.get('/detail', kangaroo_controlers.kangaroo_view_one_Page);

/* GET create kangaroo page */
router.get('/create', kangaroo_controlers.kangaroo_create_Page);

module.exports = router;
