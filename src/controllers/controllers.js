const Sequelize = require('sequelize')
const dbConfig = require('../model/database')
const sequelize = new Sequelize(dbConfig)
const teste_sales = require('../model/teste_saleModel')
const expenses = require('../model/expenseModel')
const issues = require('../model/issueModel')

// DATABASE CONECTION
sequelize.authenticate().then(() => {
 console.log('conectado')
}).catch((err) => {
    console.log(err)
})

//const Encomendas = sequelize.define('encomendas', encomendas)


const Teste_sales = sequelize.define('teste_sales', teste_sales)
const Expenses = sequelize.define('expenses', expenses)
const Issues = sequelize.define('issues', issues)

/*
Produtos.associate = (models) => {
    Produtos.belongsToMany(models.clientes, { through: 'encomendas', as: 'produto', foreignKey:'id' })
}

Clientes.associate = (models) => {
    Clientes.belongsToMany(models.produtos, { through: 'encomendas', as: 'cliente', foreignKey: 'id' })
}

Clientes.belongsToMany(Produtos, { through: Encomendas })

*/


module.exports = { Teste_sales, Expenses, Issues }
