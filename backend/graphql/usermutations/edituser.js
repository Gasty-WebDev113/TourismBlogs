const MongoConection = require('../../db/db')
const { ObjectID } = require('mongodb')
const {checkUserLogged} = require('./check')

module.exports = {

    edituser: async({input}, context) =>{
        let DataBase    
        const userAuth = checkUserLogged(context.auth)

        try {
            DataBase = await MongoConection()
            Useredit = await DataBase.collection('Users').findOneAndUpdate(
            {_id: ObjectID(userAuth)},
            {$set: input})
            
        } catch (error) {
            console.error("Error en la operacion :(" , error)
        }
        return{ success: true }
}}