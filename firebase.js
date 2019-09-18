const firebase = require('firebase');


var config = {
    apiKey: "AIzaSyDDFTsoaudOBuNBg9WD0QqhIzpTTjCDaR0",
    authDomain: "meu-crud-63c13.firebaseapp.com",
    databaseURL: "https://meu-crud-63c13.firebaseio.com",
    projectId: "meu-crud-63c13",
    storageBucket: "",
    messagingSenderId: "658369254197",
    appId: "1:658369254197:web:c70c352ffc5eb3de95727c"
}

firebase.initializeApp(config)

module.exports.salvarDados = () => {    
    let name_id = false;
    if(!name_id){
        name_id = firebase.database().ref().child('usuarios').push().key
    }

    let name_ref = firebase.database().ref();
    let updates = {}
    updates = {id: name_id, nome: 'Diego', sobrenome: 'feitoza'}
    name_ref.set(updates)
    .then(() => {
        console.log('Dados Salvos: true')
        return {success: true, message: 'Salvo'}
    })
    .catch((error) => {
        console.log(error)
        return {success: false, message: 'Erro ao salvar'}
    })
}

return module.exports