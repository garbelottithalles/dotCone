const Sequelize = require('sequelize')

    issues = {
        activity: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        },
        deadline: {
            type: Sequelize.TEXT,
        },
    }, {
            freezeTableName: true
        }

    module.exports = issues
