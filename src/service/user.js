const modelUser = require('../model/user')
const bcrypt = require('bcrypt')

const roles = ['admin', 'employee']
const salts = 12

class ServiceUser {

    async FindAll(organizationId, transaction){
        return modelUser.findAll({ where: { organizationId }, transaction })
    }

    async FindById(organizationId, id, transaction) {
        return modelUser.findOne({ where: { organizationId, id }, transaction });
    }


    async Create(organizationId, name, email, password, role, transaction){
        if(!name){
            throw new Error("Por favor insira o nome!")
        }else if(!password){
            throw new Error("Por favor insira a senha!")
        }else if(!role || !roles.includes(role)){
            throw new Error("Por favor insira a permissão correta!")
        }else if(!email){
            throw new Error("Por favor insira o email!")
        }else if(!organizationId){
            throw new Error("Por favor insira a organização!")
        }

        const hashPass = await bcrypt.hash(password, salts)

        return modelUser.create({ organizationId, name, email, password: hashPass, role }, { transaction })
    }

    async Update(organizationId, id, name, email, password, role, transaction){
        const user = await this.FindById(organizationId, id, transaction);

        if(!user){
            throw new Error("Usuário não encontrado")
        }

        user.name = name || user.name
        user.email = email || user.email
        user.password = password || user.password
        user.role = role || user.role

        return user.save({ transaction })
    }

    async Delete(organizationId, id, transaction){
        const user = await this.FindById(organizationId, id, transaction);
        
        if(!user){
            throw new Error("Usuário não encontrado")
        }

        user.destroy({ transaction })
    }

}

module.exports = new ServiceUser()