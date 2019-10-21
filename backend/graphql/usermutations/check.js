const MongoConection = require('../../db/db')
const jwt = require('jsonwebtoken')
const { ObjectID } = require('mongodb')

     async function findUser (userId) {
        let DataBase = await MongoConection();
        const user = await DataBase.collection('Users').find({_id: ObjectID(userId)})
        return user
    };
    
    function checkUserLogged(context){
        var decoded = jwt.decode(context.Auth, 'wgobuwrugwoghwor'); //Decoding the token

        if(!decoded) throw new Error('Tienes que estar loggeado para realizar esta accion')
    }

module.exports = {checkUserLogged}