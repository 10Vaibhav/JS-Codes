const {Schema , model} = require("mongoose");

const ProductSchema = new Schema({
    name: {
        type: String,
        required : true,
    },
    createdAt : {
        type : Date,
        default: Date.now,
    },
    price : {
        type: Number,
        required : true,
    },
    description : {
        type: String,
        required : true,
    },
    category : {
        type: String,
        required : true,
    }
})

const ProductModel = model("products", ProductSchema);

module.exports = ProductModel;

