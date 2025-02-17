const express = require('express')
const userRouter = express.Router()

const ApiUser = require('../api/user')

// opçoes liberadas para usuarios normais
userRouter.get('/info', ApiUser.findById)
userRouter.put('/', ApiUser.Update)
userRouter.delete('/', ApiUser.Delete)

// opçoes liberadas para usuarios adm
userRouter.post('/', ApiUser.Create)
userRouter.get('/', ApiUser.findAll)
userRouter.get('/:id', ApiUser.findById)
userRouter.put('/:id', ApiUser.Update)
userRouter.delete('/:id', ApiUser.Delete)

module.exports = userRouter;