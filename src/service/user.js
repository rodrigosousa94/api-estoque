const modelUser = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const roles = ['admin', 'employee']
const salts = 12
const secretKey = "MeuSegredo"

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
        const oldUser = await this.FindById(organizationId, id, transaction);

        if(!oldUser){
            throw new Error("Usuário não encontrado")
        }

        if(role && !oldUser.includes(role)){
            throw new Error("Favor informar a permissão corretamente")
        }

        if(role && oldUser.role === "admin"){
            oldUser.role === role
        }

        oldUser.name = name || oldUser.name
        oldUser.email = email || oldUser.email
        oldUser.password = password ? await bcrypt.hash(password, salts) : oldUser.password

        await oldUser.save({ transaction })

        return oldUser
    }

    async Delete(organizationId, id, transaction){
        const user = await this.FindById(organizationId, id, transaction);
        
        if(!user){
            throw new Error("Usuário não encontrado")
        }

        await user.destroy({ transaction })
    }

    async Login(email, password, transaction){
        if(!email || !password){
            throw new Error("Informe email e senha!")
        }

        const user = await modelUser.findOne({ where: { email } }, {transaction})

        if(!user){
            throw new Error("Email ou senha inválidos")
        }

        const verify = await bcrypt.compare(password, user.password)

        if(verify){
            return jwt.sign({
                id: user.id,
                role: user.role,
                organizationId: user.organizationId
            }, secretKey, { expiresIn: 60 * 60 })
        }
            throw new Error("Email ou senha inválidos")

    }

    async Verify(id, role, transaction){
        return modelUser.findOne({ where: { id, role }, transaction });
    }

}

module.exports = new ServiceUser()