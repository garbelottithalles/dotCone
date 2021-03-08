const Sequelize = require('sequelize')

    teste_sales = {
        product_name: {
            type: Sequelize.STRING
        },
        client_name: {
            type: Sequelize.STRING
        },
        quantify: {
            type: Sequelize.INTEGER,
        },
        total: {
            type: Sequelize.FLOAT
        },
        date: {
            type: Sequelize.TEXT,
        },
    }, {
            freezeTableName: true
        }

    module.exports = teste_sales
