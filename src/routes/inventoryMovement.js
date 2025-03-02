const express = require('express')
const inventoryMovementRouter = express.Router()
const authMiddleware = require('../middleware/auth')

const ApiInventoryMovement = require('../api/inventoryMovement')

inventoryMovementRouter.get('/:inventoryId/', authMiddleware(), ApiInventoryMovement.FindAll)
inventoryMovementRouter.get('/:inventoryId/:id', authMiddleware(), ApiInventoryMovement.FindById)
inventoryMovementRouter.post('/:inventoryId/', authMiddleware(), ApiInventoryMovement.Create)
inventoryMovementRouter.put('/:inventoryId/:id', authMiddleware(), ApiInventoryMovement.Update)
inventoryMovementRouter.delete('/:inventoryId/:id', authMiddleware(), ApiInventoryMovement.Delete)

module.exports = inventoryMovementRouter;