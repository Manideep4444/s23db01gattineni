var kangaroo = require('../models/kangaroo');
// List of all kangaroo
exports.kangaroo_list = async function(req, res) {
try{
theKangaroo = await kangaroo.find();
res.send(theKangaroo);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
/*
// for a specific kangaroo.
exports.kangaroo_detail = function(req, res) {
res.send('NOT IMPLEMENTED: kangaroo detail: ' + req.params.id);
};
*/
exports.kangaroo_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await kangaroo.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
   


/*
// Handle kangaroo create on POST.
exports.kangaroo_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: kangaroo create POST');
};*/


    









// Handle kangaroo delete on DELETE.
exports.kangaroo_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await kangaroo.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };

/*
// Handle kangaroo update form on PUT.
exports.kangaroo_update_put = function(req, res) {
res.send('kat NOT IMPLEMENTED: kangaroo update PUT' + req.params.id);
};*/


// Handle kangaroo update form on PUT.
exports.kangaroo_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await kangaroo.findById( req.params.id)
 // Do updates of properties
 if(req.body.k_name) 
 toUpdate.k_name = req.body.k_name;
 if(req.body.k_age) toUpdate.k_age = req.body.k_age;
 if(req.body.k_jumpheight) toUpdate.k_jumpheight = req.body.k_jumpheight;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
 }
};

// Handle building the view for creating a kangaroo.
// No body, no in path parameter, no query.
// Does not need to be async
exports.kangaroo_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('kangaroocreate', { title: 'kangaroo Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

//Part 6 Page to Display All
// VIEWS
// Handle a show all view
exports.kangaroo_view_all_Page = async function(req, res) {
    try{
    theKangaroo = await kangaroo.find();
    res.render('Kangaroo', { title: 'kangaroo Search Results', results: theKangaroo });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };



/*
    // Handle kangaroo create on POST.
exports.kangaroo_create_post = async function(req, res) {
    console.log(req.body)
    let document = new kangaroo();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"kangaroo_type":"goat", "cost":12, "size":"large"}
    document.k_name = req.body.k_name;
    document.k_cost = req.body.k_age;
    document.k_size = req.body.k_jumpheight;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    */

    // Handle kangaroo create on POST.
exports.kangaroo_create_post = async function(req, res) {
    console.log(req.body)
    let document = new kangaroo();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"kangaroo_type":"goat", "cost":12, "size":"large"}
    document.k_name = req.body.k_name;
    document.k_age = req.body.k_age;
    document.k_jumpheight = req.body.k_jumpheight;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };



    // Handle a show one view with id specified by query
exports.kangaroo_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await kangaroo.findById( req.query.id)
    res.render('kangaroodetail',
   { title: 'kangaroo Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };


   // Handle building the view for updating a kangaroo.
// query provides the id
exports.kangaroo_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await kangaroo.findById(req.query.id)
    res.render('kangarooupdate', { title: 'kangaroo Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };




   // Handle a delete one view with id from query
exports.kangaroo_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await kangaroo.findById(req.query.id)
    res.render('kangaroodelete', { title: 'kangaroo Delete', toShow: 
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
