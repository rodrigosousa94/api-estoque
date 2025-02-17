const express = require('express')
const organizationRouter = express.Router()

const ApiOrganization = require('../api/organization')

organizationRouter.get('/:id', ApiOrganization.findById)
organizationRouter.post('/', ApiOrganization.Create)
organizationRouter.put('/:id', ApiOrganization.Update)
organizationRouter.delete('/:id', ApiOrganization.Delete)

module.exports = organizationRouter;