const express = require('express')
const inventoryRouter = express.Router()
const authMiddleware = require('../middleware/auth')

const ApiInventory = require('../api/inventory')

inventoryRouter.get('/', authMiddleware(), ApiInventory.findAll)
inventoryRouter.get('/:id', authMiddleware(), ApiInventory.findById)
inventoryRouter.post('/', authMiddleware(), ApiInventory.Create)
inventoryRouter.put('/:id', authMiddleware(), ApiInventory.Update)
inventoryRouter.delete('/:id', authMiddleware(), ApiInventory.Delete)

module.exports = inventoryRouter;