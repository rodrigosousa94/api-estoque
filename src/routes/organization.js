const express = require('express')
const organizationRouter = express.Router()

const ApiOrganization = require('../api/organization')
const authMiddleware = require('../middleware/auth')

organizationRouter.get('/:id', authMiddleware('admin'), ApiOrganization.findById)
organizationRouter.post('/', ApiOrganization.Create)
organizationRouter.put('/:id', authMiddleware('admin'), ApiOrganization.Update)
organizationRouter.delete('/:id', authMiddleware('admin'), ApiOrganization.Delete)

module.exports = organizationRouter;