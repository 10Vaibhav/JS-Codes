const Product = require("../models/productModel");

const getProducts = async(req,res) => {
    try{
        const allProducts = await Product.find();

        if(!allProducts || allProducts.length === 0){
            return res.json({
                message : "There is no product",
            });
        }

        res.status(200).json({
            success: true,
            products: allProducts,
        });

    }catch(err){
        res.status(500).json({
            success : false,
            message: "Internal Server Error",
        });
    }
}

module.exports = {getProducts}