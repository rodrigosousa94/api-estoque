class ApiUser {

    async findById(req, res){

        try {
            const {id} = req.params
            const user = {} // await service.findById(userId)
    
            res.status(200).send({ user })
        } catch (error) {
            res.status(5500).send({ msg: error.message })
        }

    }

    async findAll(req, res){

        try {
            const {id} = req.params
            const users = [{}] // await service.findById(userId)
    
            res.status(200).send({ user })
        } catch (error) {
            res.status(5500).send({ msg: error.message })
        }

    }

    async Create(req, res){

        try {
            const {id} = req.params
            const user = {} // await service.findById(userId)
    
            res.status(200).send({ user })
        } catch (error) {
            res.status(5500).send({ msg: error.message })
        }

    }

    async Update(req, res){

        try {
            const {id} = req.params
            const user = {} // await service.findById(userId)
    
            res.status(200).send({ user })
        } catch (error) {
            res.status(5500).send({ msg: error.message })
        }

    }

    async Delete(req, res){

        try {
            const {id} = req.params
            const user = {} // await service.findById(userId)
    
            res.status(200).send({ user })
        } catch (error) {
            res.status(5500).send({ msg: error.message })
        }

    }

}

module.exports = new ApiUser();