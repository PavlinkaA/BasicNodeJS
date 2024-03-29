import { Router } from "express";

import ProductsController from "../controllers/products.controller.js";

const productRouter = Router();

const productController = new ProductsController();

// GET ALL PRODUCTS
productRouter.get("/", async (req, res) => {
    if(req.query.name) {
        const name = req.query.name;
        const findProductsByName = await productController.searchProduct(name);
        res.send(findProductsByName)
    } else {
        const products = await productController.getAllProducts();
        res.send(products)
    }

    // Add test data to mongo DB
    // const productData = {
    //     name: "IPhone",
    //     description: "Phone",
    //     price: 1199
    // };

    // await productController.addProduct(productData);
});

// ADD PRODUCT
productRouter.post("/", async(req, res) => {
    const {name, description, price} = req.body;

    const productData = {
        name: name,
        description: description,
        price: price
    };

    await productController.addProduct(productData);

    res.status(201).send({message: "New product is created."})
});

// GET PRODUCT BY ID
productRouter.get('/:id', async(req, res) => {
    const id = req.params.id;

    const product = await productController.getProductById(id);

    res.send(product);
});

// UPDATE PRODUCT
productRouter.patch('/:id', async(req, res) => {
    const id = req.params.id;

    const {name, description, price} = req.body;

    const productData = {
        name: name,
        description: description,
        price: price
    };
    

    try {
        await productController.updateProduct(id, productData);
        res.send({message: `Product with id: ${id} was updated.`})
    } catch (error) {
        res.status(404).send({message: error.message})
    }
});

// DELETE PRODUCT
productRouter.delete('/:id', async(req, res) => {
    const id = req.params.id;

    await productController.deleteProduct(id);

    res.send(`Product with id: ${id} was deleted.`)
});

// Search 
productRouter.post('/', async(req, res) => {

});
export default productRouter;