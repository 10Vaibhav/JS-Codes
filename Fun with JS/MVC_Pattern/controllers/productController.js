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

const createProduct = async (req, res) => {
    try {
        const { name, price, description, category } = req.body;

        // Validate input
        if (!name || !price || !description || !category) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const newProduct = new Product({ name, price, description, category });
        await newProduct.save();

        res.status(201).json({
            success: true,
            product: newProduct
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}


const updateProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const {name, price, description, category} = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(id, {name, price, description, category}, {new: true});

        res.status(200).json({
            product : updatedProduct,
        })

    }catch (err){
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

const deleteProduct = async (req,res) => {

    try{
        const {id} = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);

        if(!deletedProduct){
            return res.json({
                message: "Product not found, cannot delete",
            })
        }

        res.status(200).json({
            message: "Product Deleted Successfully",
            product: deletedProduct
        })

    }catch(err){
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}



module.exports = {getProducts, createProduct, updateProduct, deleteProduct}

