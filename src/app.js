//  Requires
const express = require('express')
const app = express()
const { Teste_sales, Expenses, Issues } = require('../src/controllers/controllers')

// Static Files config
app.use(express.static("public"))

// req.body config for POST's
app.use(express.urlencoded({ extended: true }))

// Template Engine config
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: app,
    noCash: true
})

// Routes

// Main Route
app.get('/', (req, res) => {
    res.render('index.html')
})

// Expenses Route
app.get('/despesas', (req, res) => {
    Expenses.findAll({}).then((expenses) => {
        res.render('despesas.html', { expenses: expenses })
    }).catch((err) => {
        console.log(err)
    })
})

app.post('/despesas', (req, res) => {
    Expenses.sync({ force: false }).then(function () {
        Expenses.create({
            expense_name: req.body.expense_name,
            desc: req.body.desc,
            price: req.body.price,
            date: req.body.date
        }).then(() => {
            console.log('Despesa registrada com sucesso!!')
            res.redirect('/despesas')
        }).catch((err) => {
            console.log(err)
        })
    })
})

// Teste vendas Route
app.get('/teste_vendas', (req, res) => {
    Teste_sales.findAll({}).then((teste_sales) => {
        res.render('teste_vendas.html', { teste_sales: teste_sales })
    }).catch((err) => {
        console.log(err)
    })
})

app.post('/teste_vendas', (req, res) => {
    Teste_sales.sync({ force: false }).then(function () {
        Teste_sales.create({
            product_name: req.body.product,
            client_name: req.body.client,
            quantify: req.body.quantify,
            total: req.body.total,
            date: req.body.date
        }).then(() => {
            console.log('Venda_teste cadastrada com sucesso!!')
            res.redirect('/teste_vendas')
        }).catch((err) => {
            console.log(err)
        })
    })
})

//Issues Route
app.get('/issues', (req, res) => {
    Issues.findAll({}).then((issues) => {
        return res.render('issues.html', { issues: issues })
    }).catch((err) => {
        console.log(err)
    })
})
app.post('/issues', (req, res) => {
    Issues.sync({ force: false }).then(function () {
        Issues.create({
            activity: req.body.activity,
            description: req.body.description,
            deadline: req.body.deadline
        })
    }).then(() => {
        console.log('Atividade cadastrada com sucesso!!')
        res.redirect('/issues')

    }).catch((err) => {
        console.log(err)
    })
})

app.get('/issues/complete/:id', (req, res) => {
    Issues.destroy({ where: { id: parseInt(req.params.id) }}).then(() => {
        res.redirect('/issues')
    }).catch((err) => {
        console.log(err)
    })
})
    



//  Port config
const PORT = 3000
app.listen(PORT)