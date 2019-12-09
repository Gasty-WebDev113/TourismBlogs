const MongoConection = require('../../db/db')
const {sign} = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports={

     login: async ({email, password}) =>{
        let DataBase    
        DataBase = await MongoConection()
        const user = await DataBase.collection('Users').findOne({ Email: email })
        //First: Search in the database the mail

        if( user == null){
            throw new Error("Usuario incorrecto :(")
        }

        let passwordvalidator = await bcrypt.compare(password, user.Password) //Validate the password

        if( !email ){
            throw new Error("No se encontro el usuario :(")
        }

        if( !passwordvalidator ){ //Second: compare the password
            throw new Error("Contraseña incorrecta")
        }
        //succesful login man

        return { //Third: change the success and create the token
            success: true,
            token: sign({ userId: user._id }, process.env.SECRET, {expiresIn: '1h' } ) //Store the token, the secret (random string) and options(token expires in 15 minutes) 
        }
    }

}