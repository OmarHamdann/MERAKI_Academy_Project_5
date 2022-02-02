const express = require("express");
 const{createNewProduct, getAllProducts, getProductByName,
     getProductByType, getProductByBrand, updateProductById,
      deleteProductById, getProductById}=require("../controllers/products")
 

const productsRouter=express.Router();

productsRouter.post("/",createNewProduct)
productsRouter.get("/",getAllProducts)

productsRouter.get("/search",getProductById)
productsRouter.get("/search_1",getProductByName)
productsRouter.get("/search_2",getProductByType)
productsRouter.get("/search_3",getProductByBrand)

productsRouter.put("/:id", updateProductById);
productsRouter.delete("/:id",deleteProductById)


module.exports=productsRouter