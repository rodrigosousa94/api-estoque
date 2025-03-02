const express = require('express');
const database = require('./src/database');

const inventoryRouter = require('./src/routes/inventory');
const inventoryMovementRouter = require('./src/routes/inventoryMovement');
const organizationRouter = require('./src/routes/organization');
const productRouter = require('./src/routes/product');
const userRouter = require('./src/routes/user');
const apiUser = require('./src/api/user');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/v1/login', apiUser.Login)

app.use('/api/v1/inventory', inventoryRouter)
app.use('/api/v1/inventoryMovement', inventoryMovementRouter)
app.use('/api/v1/organization', organizationRouter)
app.use('/api/v1/product', productRouter)
app.use('/api/v1/user', userRouter)

database.db
    .sync({ force: false })
    .then((_) => {
        app.listen(port, () => {
            console.info("Servidor rodando...")
        })
    })
    .catch((e) => {
        console.error("Não foi possivel conectar ao banco de dados: " +  e)
    })