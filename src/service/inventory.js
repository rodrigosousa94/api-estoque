const getProductMovements = require('../fns/get-product-movement')
const modelInventory = require('../model/inventory')
const inventoryMovement = require('../service/inventoryMoviment')


class ServiceInventory {
    async FindAll(organizationId, transaction){
        return modelInventory.findAll( { where: {organizationId} }, { transaction } )
    }

    async FindById(organizationId, id, transaction){
        const inventory = await modelInventory.findOne( { where: {organizationId, id} }, { transaction } )

        if(!inventory){
            throw new Error("Estoque não encontrado")
        }

        const movements = await inventoryMovement.FindAll(inventory.id)

        const results = getProductMovements(movements)

        return { ...inventory.dataValues, ...results }
    }

    async Create(organizationId, name, transaction){
        if(!organizationId){
            throw new Error("Favor informe a organização corretamente")
        }else if(!name){
            throw new Error("Favor informe o nome corretamente")
        }

        return modelInventory.create( {organizationId, name}, {transaction})
    }

    async Update(organizationId, id, name,  transaction){
        const oldInventory = await modelInventory.findOne( { where: {organizationId, id} }, { transaction } )

        if(!oldInventory){
            throw new Error("Inventário não encontrado")
        }

        oldInventory.name = name || oldInventory.name

        return oldInventory.save({ transaction })
    }

    async Delete(organizationId, id, transaction){
        const inventory = await modelInventory.findOne( { where: {organizationId, id} }, { transaction } )

        if(!inventory){
            throw new Error("Inventário não encontrado")
        }

        await inventory.destroy({ transaction })
    }
}

module.exports = new ServiceInventory()