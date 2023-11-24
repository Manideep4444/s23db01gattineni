var express = require('express');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('Kangaroo', { title: 'Search Results Kangaroo' });
});
*/
const kangaroo_controlers= require('../controllers/kangaroo');

router.get('/', kangaroo_controlers.kangaroo_view_all_Page );

const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  res.redirect("/login");
  }
/* GET detail kangaroo page */
router.get('/detail',secured, kangaroo_controlers.kangaroo_view_one_Page);

/* GET create kangaroo page */
router.get('/create',secured, kangaroo_controlers.kangaroo_create_Page);

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.


/* GET create update page */
router.get('/update', secured, kangaroo_controlers.kangaroo_update_Page);

/* GET delete kangaroo page */
router.get('/delete',secured, kangaroo_controlers.kangaroo_delete_Page);




module.exports = router;
