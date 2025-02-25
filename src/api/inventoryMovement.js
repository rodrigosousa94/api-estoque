const serviceInventoryMovement = require('../service/inventoryMoviment')

class ApiInventoryMovement {

    async FindById(req, res){

        try {
            const {id, inventoryId} = req.params
            const inventoryMovements = await serviceInventoryMovement.FindById(inventoryId, id)
    
            res.status(200).send({ inventoryMovements })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async FindAll(req, res){

        try {
            const {inventoryId} = req.params
            const inventoryMovements = await serviceInventoryMovement.FindAll(inventoryId)
    
            res.status(200).send({ inventoryMovements })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async Create(req, res){

        try {
            const userId = 26
            const {inventoryId} = req.params
            const {type, amount, productId} = req.body
            const inventoryMovement = await serviceInventoryMovement.Create(inventoryId, userId, type, amount, productId)
    
            res.status(200).send({ inventoryMovement })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async Update(req, res){

        try {
            const {id, inventoryId} = req.params
            const {type, amount} = req.body
            const inventoryMovement = await serviceInventoryMovement.Update(inventoryId, id, type, amount)
    
            res.status(200).send({ inventoryMovement })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async Delete(req, res){

        try {
            const {id, inventoryId} = req.params
            const inventoryMovement = await serviceInventoryMovement.Delete(inventoryId, id)
    
            res.status(200).send({ inventoryMovement })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

}

module.exports = new ApiInventoryMovement();