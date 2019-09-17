const express = require('express')
const bodyParse = require('body-parser')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, (req, res) => {
    res.send(() => {        
        console.log('Rodando servidor!')
    })
})