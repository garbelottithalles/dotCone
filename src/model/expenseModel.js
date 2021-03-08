const Sequelize = require('sequelize')

    expenses = {
        expense_name: {
            type: Sequelize.TEXT,
        },
        desc: {
            type: Sequelize.TEXT,
        },
        price: {
            type: Sequelize.FLOAT
        },
        date: {
            type: Sequelize.TEXT,
        },
    }, {
            freezeTableName: true
        }

    module.exports = expenses
