const express = require('express')
const productRouter = express.Router()
const ApiProduct = require('../api/product')

productRouter.get('/', ApiProduct.findAll)
productRouter.get('/:id', ApiProduct.findById)
productRouter.post('/', ApiProduct.Create)
productRouter.put('/:id', ApiProduct.Update)
productRouter.delete('/:id', ApiProduct.Delete)

module.exports = productRouter;