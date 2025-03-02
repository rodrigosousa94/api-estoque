const express = require('express')
const userRouter = express.Router()

const ApiUser = require('../api/user')
const authMiddleware = require('../middleware/auth')

// opçoes liberadas para usuarios normais
userRouter.get('/info', authMiddleware(), ApiUser.findById)
userRouter.put('/', authMiddleware(), ApiUser.Update)
userRouter.delete('/', authMiddleware(), ApiUser.Delete)

// opçoes liberadas para usuarios adm
userRouter.post('/', authMiddleware('admin'), ApiUser.Create)
userRouter.get('/', authMiddleware('admin'), ApiUser.findAll)
userRouter.get('/:id', authMiddleware('admin'), ApiUser.findById)
userRouter.put('/:id', authMiddleware('admin'), ApiUser.Update)
userRouter.delete('/:id', authMiddleware('admin'), ApiUser.Delete)

module.exports = userRouter;