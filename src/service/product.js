const modelProduct = require('../model/product')

class ServiceProduct {
    async FindAll(organizationId, transaction){
        return modelProduct.findAll( { where: { organizationId } }, { transaction })
    }

    async FindById(organizationId, id, transaction){
        return modelProduct.findOne( { where: { organizationId, id } }, { transaction })
    }

    async Create(organizationId, name, description, transaction){
        if(!organizationId){
            throw new Error("Por favor insira a organização")
        }else if(!name){
            throw new Error("Por favor insira o nome do produto")
        }else if(!description){
            throw new Error("Por favor insira a descrição do produto")
        }

        return modelProduct.create({ organizationId, name, description }, { transaction })
    }

    async Update(organizationId, id, name, description, transaction){
        const oldProduct = await this.FindById(organizationId, id, transaction)

        if(!oldProduct){
            throw new Error("Produto não encontrado")
        }

        oldProduct.name = name || oldProduct.name
        oldProduct.description = description || oldProduct.description

        return oldProduct.save({ transaction })
    }

    async Delete(organizationId, id, transaction){
        const product = await this.FindById(organizationId, id, transaction)

        if(!product){
            throw new Error("Produto não encontrado!")
        }

       await product.destroy({ transaction })
    }
}

module.exports = new ServiceProduct()