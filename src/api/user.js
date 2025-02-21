class ApiUser {

    async findById(req, res){

        try {
            const organizationId = 1
            const {id} = req.params
            const user = {id} // await service.findById(userId)
    
            res.status(200).send({ user })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async findAll(req, res){

        try {
            const organizationId = 1
            const users = [{}] // await service.findById(userId)
    
            res.status(200).send({ users })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async Create(req, res){

        try {
            const organizationId = 1
            const { name, email, password, role } = req.body
            const user = {name, email, password, role} // await service.findById(userId)
    
            res.status(200).send({ user })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async Update(req, res){

        try {
            const organizationId = 1
            const {id} = req.params
            const { name, email, password, role } = req.body
            const user = {} // await service.findById(userId)
    
            res.status(200).send({ user })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async Delete(req, res){

        try {
            const organizationId = 1
            const {id} = req.params
            const user = {} // await service.findById(userId)
    
            res.status(200).send({ user })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

}

module.exports = new ApiUser();