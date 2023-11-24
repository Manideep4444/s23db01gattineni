const mongoose = require("mongoose")
const kangarooSchema = mongoose.Schema({
    k_name: String,
    k_age: Number,
    //k_jumpheight: Number,
    k_jumpheight: {
        type: Number,
        required: true,
        min: 4,
        max: 4444,
    }
       
})
module.exports = mongoose.model("kangaroo",
kangarooSchema)

