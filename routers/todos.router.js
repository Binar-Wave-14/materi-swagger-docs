const router = require ('express').Router()
const controller = require ('../controllers/todos.controller')

router.post('/todos', controller.create)
router.get('/todos', controller.findAll)

module.exports = router