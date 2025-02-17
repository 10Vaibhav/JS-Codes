import express from "express";

const app = express();

const port = 3000;

app.get("/api/products", (req,res)=> {
    const products = [
        {
            id: 1,
            name: "table_wooden",
            price: "200",
            image: "https://www.furniturewallet.com/media/catalog/product/cache/23/thumbnail/1000x867/9df78eab33525d08d6e5fb8d27136e95/7/_/7_27_13.jpg"
        },{
            id: 2,
            name: "table_glass",
            price: 250,
            image: "https://m.media-amazon.com/images/I/81vDEINI-lL._AC_UF894,1000_QL80_.jpg"
        }
    ];

    // http://localhost:3000/api/products?search=table_wooden

    if(req.query.search){

        const filterProducts = products.filter((product) => product.name.includes(req.query.search))

        res.send(filterProducts);
        return;
    }

    setTimeout(()=> {
        res.send(products);
    },3000);
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})