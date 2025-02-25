const modelInventory = require('../model/inventory')

class ServiceInventory {
    async FindAll(organizationId, transaction){
        return modelInventory.findAll( { where: {organizationId} }, { transaction } )
    }

    async FindById(organizationId, id, transaction){
        return modelInventory.findOne( { where: {organizationId, id} }, { transaction } )
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
        const oldInventory = await this.FindById(organizationId, id, transaction)

        if(!oldInventory){
            throw new Error("Inventário não encontrado")
        }

        oldInventory.name = name || oldInventory.name

        return oldInventory.save({ transaction })
    }

    async Delete(organizationId, id, transaction){
        const inventory = await this.FindById(organizationId, id, transaction)

        if(!inventory){
            throw new Error("Inventário não encontrado")
        }

        await inventory.destroy({ transaction })
    }
}

module.exports = new ServiceInventory()