var kangaroo = require('../models/kangaroo');
// List of all kangaroo

// List of all Costumes
exports.kangaroo_list = async function(req, res) {
try{
    thekangaroos = await kangaroo.find();
    res.send(thekangaroos);
}
catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
}
};
    
/*
exports.kangaroo_list = function(req, res) {
res.send('NOT IMPLEMENTED: kangaroo list');
};*/
// for a specific kangaroo.
exports.kangaroo_detail = function(req, res) {
res.send('NOT IMPLEMENTED: kangaroo detail: ' + req.params.id);
};
// Handle kangaroo create on POST.
exports.kangaroo_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: kangaroo create POST');
};
// Handle kangaroo delete form on DELETE.
exports.kangaroo_delete = function(req, res) {
res.send('NOT IMPLEMENTED: kangaroo delete DELETE ' + req.params.id);
};
// Handle kangaroo update form on PUT.
exports.kangaroo_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: kangaroo update PUT' + req.params.id);
};
