const express = require('express')
const inventoryMovementRouter = express.Router()

const ApiInventoryMovement = require('../api/inventoryMovement')

inventoryMovementRouter.get('/:inventoryId/', ApiInventoryMovement.findAll)
inventoryMovementRouter.get('/:inventoryId/:id', ApiInventoryMovement.findById)
inventoryMovementRouter.post('/:inventoryId/', ApiInventoryMovement.Create)
inventoryMovementRouter.put('/:inventoryId/:id', ApiInventoryMovement.Update)
inventoryMovementRouter.delete('/:inventoryId/:id', ApiInventoryMovement.Delete)

module.exports = inventoryMovementRouter;