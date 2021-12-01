const express  = require("express")
const swaggerUi = require("swagger-ui-express")
const swaggerJSON = require('./docs/swagger.json')
const sequelize = require('./models/sequelize')

const app = express()
const todo = require('./routers/todos.router')

app.use(express.json())
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJSON))

app.use('/v1', todo)

sequelize.authenticate().then(() => console.log('db ok'))

app.listen(3000,()=>{
    console.log('server load port 3000')
})