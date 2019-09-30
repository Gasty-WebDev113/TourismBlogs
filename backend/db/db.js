const {MongoClient} = require('mongodb');

const mongodbUri = `${process.env.DB_CONECTION}` //FUCK YEAH EVERYBODY WORKS !!!!!!
const DbName = `${process.env.DB_DATABASENAME}`
let connection


async function MongoConection(){
    if(connection) return connection //I verified this is not defined
    let client
    try {
        client = await MongoClient.connect(mongodbUri, { //Conect to my cluster
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        connection = client.db(DbName) //Select the Database
    } catch (error) {
        console.error("Fallo en la Base de Datos", error, mongodbUri)
        process.exit(1)
    }

    return connection 
}

module.exports = MongoConection //Expoirting conection function (too obvious)
