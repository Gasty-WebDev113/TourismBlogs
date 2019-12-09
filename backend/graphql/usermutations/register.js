const MongoConection = require('../../db/db')
const {sign} = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {

    register: async({input}) => {
    
        if( !input.Username ){
            throw new Error("El nombre de usuario es obligatorio")
        }
        
        const defaultList = {
            LikedBlog: []
        }
        const NewUser = Object.assign(defaultList, input)
        
        let DataBase
        let User 
        
        NewUser.Password = await bcrypt.hash(NewUser.Password, 10) //Encrypt the password por SeCUritY 
        
        try {
            DataBase = await MongoConection()
            User = await DataBase.collection('Users').insertOne(NewUser)
            input._id = User.insertId //Mongo autoinsert the ID
        } catch (error) {
            console.error("Fallo en la operacion | Faild operation", error)
        } 
        return {
            token: sign({ userId: String(User.insertedId)}, process.env.SECRET, {expiresIn: "15m" } ), //Store the token, the secret (random string) and options(token expires in 15 minutes)   
            success: true,
        }
    }}