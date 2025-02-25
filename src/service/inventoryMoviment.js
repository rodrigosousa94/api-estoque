const modelInventoryMovement = require('../model/inventoryMovement')

const movementTypes = ["in", "out"]

class ServiceInventoryMovement {
    async FindAll(inventoryId, transaction){
        return modelInventoryMovement.findAll( { where: {inventoryId} }, { transaction } )
    }

    async FindById(inventoryId, id, transaction){
        return modelInventoryMovement.findOne( { where: {inventoryId, id} }, { transaction } )
    }

    async Create(inventoryId, userId, type, amount, productId, transaction){
        if(!userId){
            throw new Error("Favor informe o ID do usuário")
        }else if(!inventoryId){
            throw new Error("Favor informe o ID do estoque")
        }else if(!type || !movementTypes.includes(type)){
            throw new Error("Favor informe o tipo de movimentação correta")
        }else if(!amount){
            throw new Error("Favor informe a quantidade")
        }else if(!productId){
            throw new Error("Favor informe o ID do produto")
        }

        return modelInventoryMovement.create( {inventoryId, userId, type, amount, productId}, {transaction})
    }

    async Update(inventoryId, id, type, amount, transaction){
        const oldInventoryMovement = await this.FindById(inventoryId, id, transaction)

        if(!oldInventoryMovement){
            throw new Error("Inventário não encontrado")
        }

        if(type && movementTypes.includes(type)){
            throw new Error("Informe o tipo de movimentação correta!")
        }

        oldInventoryMovement.type = type || oldInventoryMovement.type
        oldInventoryMovement.amount = amount || oldInventoryMovement.amount
    

        return oldInventoryMovement.save({ transaction })
    }

    async Delete(inventoryId, id, transaction){
        const inventoryMovement = await this.FindById(inventoryId, id, transaction)

        if(!inventoryMovement){
            throw new Error("Movimentação de Estoque não encontrado")
        }

        await inventoryMovement.destroy({ transaction })
    }
}

module.exports = new ServiceInventoryMovement()