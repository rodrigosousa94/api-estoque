const serviceUser = require('../service/user')

class ApiUser {

    async findById(req, res){

        try {
            const organizationId = 4
            const {id} = req.params
            const user = await serviceUser.FindById(organizationId, id)
    
            res.status(200).send({ user })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async findAll(req, res){

        try {
            const organizationId = 3
            const users = await serviceUser.FindById(organizationId)
    
            res.status(200).send({ users })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async Create(req, res){

        try {
            const organizationId = 3
            const { name, email, password, role } = req.body
            const user = await serviceUser.Create(organizationId, name, email, password, role)
    
            res.status(200).send({ user })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async Update(req, res){

        try {
            const organizationId = 3
            const {id} = req.params
            const { name, email, password, role } = req.body
            const user = await serviceUser.Update(organizationId, id, name, email, password, role)
    
            res.status(200).send({ user })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async Delete(req, res){

        try {
            const organizationId = 3
            const {id} = req.params
            const user = await serviceUser.Delete(organizationId, id)
    
            res.status(200).send({ user })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

}

module.exports = new ApiUser();