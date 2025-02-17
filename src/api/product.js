class ApiProduct {

    async findById(req, res){

        try {
            const {id} = req.params
            const product = {} // await service.findById(productId)
    
            res.status(200).send({ product })
        } catch (error) {
            res.status(5500).send({ msg: error.message })
        }

    }

    async findAll(req, res){

        try {
            const {id} = req.params
            const users = [{}] // await service.findById(productId)
    
            res.status(200).send({ product })
        } catch (error) {
            res.status(5500).send({ msg: error.message })
        }

    }

    async Create(req, res){

        try {
            const {id} = req.params
            const product = {} // await service.findById(productId)
    
            res.status(200).send({ product })
        } catch (error) {
            res.status(5500).send({ msg: error.message })
        }

    }

    async Update(req, res){

        try {
            const {id} = req.params
            const product = {} // await service.findById(productId)
    
            res.status(200).send({ product })
        } catch (error) {
            res.status(5500).send({ msg: error.message })
        }

    }

    async Delete(req, res){

        try {
            const {id} = req.params
            const product = {} // await service.findById(productId)
    
            res.status(200).send({ product })
        } catch (error) {
            res.status(5500).send({ msg: error.message })
        }

    }

}

module.exports = new ApiProduct();