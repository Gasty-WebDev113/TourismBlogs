const {MongoClient} = require('mongodb');

const mongodbUri = `mongodb://${process.env.DB_LOCAL}/${process.env.DB_DATABASENAME}`
const DbName = `${process.env.DB_DATABASENAME}`
let connection


async function MongoConection(){
    if(connection) return connection //I verified this is not defined
    let client
    try {
        client = await MongoClient.connect(mongodbUri, {
            useNewUrlParser: true
        })

        connection = client.db(DbName)
    } catch (error) {
        console.error("Fallo en la Base de Datos", error, mongodbUri)
        process.exit(1)
    }

    return connection 
}

module.exports = MongoConection() //Expoirting conection function (too obvious)
