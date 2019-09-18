require('dotenv').config()

const express = require('express')
const bodyParse = require('body-parser')
const firebase = require('firebase')
const Auth = require('./firebase.js')
const app = express()

let userLogged;


firebase.auth().onAuthStateChanged((user) => {
    if(user){
        userLogged = user
    }else{
        userLogged = null
    }
})

app.post('/save', (req,res) => {
    Auth.salvarDados();
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log('Rodando o servidor!')
})