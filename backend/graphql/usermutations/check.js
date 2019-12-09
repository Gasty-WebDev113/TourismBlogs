const jwt = require('jsonwebtoken')

module.exports = {
    
    checkUserLogged: (Auth) => {
        const token = Auth.replace('Bearer ','');

        if(!token) throw new Error('Tienes que estar loggeado para realizar esta accion')
        var decoded = jwt.decode(`${token}`, process.env.SECRET); //Decoding the token
        let userId = decoded.userId
        if(!userId) throw new Error('Tienes que estar loggeado para realizar esta accion')

        return userId
    }
}