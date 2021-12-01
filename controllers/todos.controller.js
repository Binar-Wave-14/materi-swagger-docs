const { Todos } = require('../models')
const { Op } = require('sequelize')

exports.create = (req, res) => {
    const todo = req.body.todo
    
    Todos.create({todo})
    .then (data => {
        res.status(200).json({
            code: 200,
            message: 'succes create todo',
            data,
        });
    })
    .catch(err => {
        res.status(400).json({
            code: 400,
            message: 'failed create todo',
        })
    })
}

exports.findAll = (req, res) => {
    const { todo } = req.query

    const conditions = {}

    if (todo) {
        conditions.where = {
            todo: {
                [Op.iLike]: `%${todo}%`
            }
        }
    }

    Todos.findAll(conditions)
    .then(data => {
        res.status(200).json({
            code: 200,
            message: 'success get all todos',
            data,
        })
    })
    .catch(err => {
        res.status(400).json({
            code: 400,
            message: 'failed get all todos',
        })
    })
}