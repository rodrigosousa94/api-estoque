const express = require('express')
const inventoryRouter = express.Router()

const ApiInventory = require('../api/inventory')

inventoryRouter.get('/', ApiInventory.findAll)
inventoryRouter.get('/:id', ApiInventory.findById)
inventoryRouter.post('/', ApiInventory.Create)
inventoryRouter.put('/:id', ApiInventory.Update)
inventoryRouter.delete('/:id', ApiInventory.Delete)

module.exports = inventoryRouter;