const serviceInventory = require('../service/inventory')

class ApiInventory {

    async findById(req, res){

        try {
            const organizationId = 3
            const {id} = req.params
            const inventories = await serviceInventory.FindById(organizationId, id)
    
            res.status(200).send({ inventories })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async findAll(req, res){

        try {
            const organizationId = 3
            const inventories = await serviceInventory.FindAll(organizationId)
    
            res.status(200).send({ inventories })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async Create(req, res){

        try {
            const organizationId = 3
            const {name} = req.body
            const inventories = await serviceInventory.Create(organizationId, name)
    
            res.status(200).send({ inventories })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async Update(req, res){

        try {
            const organizationId = 3
            const {id} = req.params
            const {name} = req.body
            const inventories = await serviceInventory.Update(organizationId, id, name)
    
            res.status(200).send({ inventories })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async Delete(req, res){

        try {
            const organizationId = 3
            const {id} = req.params
            const inventories = await serviceInventory.Delete(organizationId, id)
    
            res.status(200).send({ inventories })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

}

module.exports = new ApiInventory();