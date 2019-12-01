const MongoConection = require('../../db/db')
const jwt = require('jsonwebtoken')
const { ObjectID } = require('mongodb')

     async function findUser (userId) {
        let DataBase = await MongoConection();
        const user = await DataBase.collection('Users').find({_id: ObjectID(userId)})
        return user
    };
    
    function checkUserLogged(Auth){
        console.log(Auth)
        const token = Auth.replace('Bearer ','');

        if(!token) throw new Error('Tienes que estar loggeado para realizar esta accion')
        var decoded = jwt.decode(`${token}`, 'wgobuwrugwoghwor'); //Decoding the token
        let userId = decoded.userId
        if(!userId) throw new Error('Tienes que estar loggeado para realizar esta accion')

        return userId
    }

module.exports = {checkUserLogged, findUser}