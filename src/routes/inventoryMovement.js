const express = require('express')
const inventoryMovementRouter = express.Router()

const ApiInventoryMovement = require('../api/inventoryMovement')

inventoryMovementRouter.get('/', ApiInventoryMovement.findAll)
inventoryMovementRouter.get('/:id', ApiInventoryMovement.findById)
inventoryMovementRouter.post('/', ApiInventoryMovement.Create)
inventoryMovementRouter.put('/:id', ApiInventoryMovement.Update)
inventoryMovementRouter.delete('/:id', ApiInventoryMovement.Delete)

module.exports = inventoryMovementRouter;