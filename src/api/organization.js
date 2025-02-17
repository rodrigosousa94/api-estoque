class ApiOrganization {

    async findById(req, res){

        try {
            const {id} = req.params
            const organization = {} // await service.findById(organizationId)
    
            res.status(200).send({ organization })
        } catch (error) {
            res.status(5500).send({ msg: error.message })
        }

    }

    async Create(req, res){

        try {
            const {id} = req.params
            const organization = {} // await service.findById(organizationId)
    
            res.status(200).send({ organization })
        } catch (error) {
            res.status(5500).send({ msg: error.message })
        }

    }

    async Update(req, res){

        try {
            const {id} = req.params
            const organization = {} // await service.findById(organizationId)
    
            res.status(200).send({ organization })
        } catch (error) {
            res.status(5500).send({ msg: error.message })
        }

    }

    async Delete(req, res){

        try {
            const {id} = req.params
            const organization = {} // await service.findById(organizationId)
    
            res.status(200).send({ organization })
        } catch (error) {
            res.status(5500).send({ msg: error.message })
        }

    }

}

module.exports = new ApiOrganization();