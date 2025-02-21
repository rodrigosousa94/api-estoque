class ApiInventoryMovement {

    async findById(req, res){

        try {
            const organizationId = 1
            const {id, inventoryId} = req.params
            const inventoryMovements = {id} // await service.findById(inventoryMovementId)
    
            res.status(200).send({ inventoryMovements })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async findAll(req, res){

        try {
            const organizationId = 1
            const {inventoryId} = req.params
            const inventoryMovements = [{}] // await service.findById(inventoryMovementId)
    
            res.status(200).send({ inventoryMovements })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async Create(req, res){

        try {
            const organizationId = 1
            const userId = 1
            const {inventoryId} = req.params
            const {type, amount, productId} = req.body
            const inventoryMovements = {} // await service.findById(iinventoryMovementId)
    
            res.status(200).send({ inventoryMovements })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async Update(req, res){

        try {
            const organizationId = 1
            const {id, inventoryId} = req.params
            const {type, amount, productId} = req.body
            const inventoryMovements = {} // await service.findById(inventoryMovementId)
    
            res.status(200).send({ inventoryMovements })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async Delete(req, res){

        try {
            const organizationId = 1
            const {id, inventoryId} = req.params
            const inventoryMovements = {} // await service.findById(inventoryMovementId)
    
            res.status(200).send({ inventoryMovements })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

}

module.exports = new ApiInventoryMovement();