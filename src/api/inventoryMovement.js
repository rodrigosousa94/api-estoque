class ApiInventoryMovement {

    async findById(req, res){

        try {
            const {id} = req.params
            const inventoryMovements = {} // await service.findById(inventoryMovementId)
    
            res.status(200).send({ inventoryMovements })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async findAll(req, res){

        try {
            const {id} = req.params
            const users = [{}] // await service.findById(inventoryMovementId)
    
            res.status(200).send({ inventoryMovements })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async Create(req, res){

        try {
            const {id} = req.params
            const inventoryMovements = {} // await service.findById(iinventoryMovementId)
    
            res.status(200).send({ inventoryMovements })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async Update(req, res){

        try {
            const {id} = req.params
            const inventoryMovements = {} // await service.findById(inventoryMovementId)
    
            res.status(200).send({ inventoryMovements })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async Delete(req, res){

        try {
            const {id} = req.params
            const inventoryMovements = {} // await service.findById(inventoryMovementId)
    
            res.status(200).send({ inventoryMovements })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

}

module.exports = new ApiInventoryMovement();