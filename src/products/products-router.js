const express = require("express");
const ProductService = require("./product-service");


const productsRouter = express.Router();
const jsonBodyParser = express.json();

productsRouter
    .route('/')
    .post(jsonBodyParser, (req, res, next) => {
        try {
            ProductService.insertEmail(req.app.get('db'), req.email).then(
                
            )
        }
    })