import { MongoClient } from 'mongodb'
import nextConnect from 'next-connect'

const MONGODB_URI = "mongodb+srv://leocrapart:Dupr0pnet@cluster0.xbfcm.mongodb.net/<dbname>?retryWrites=true&w=majority"

const client = new MongoClient(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

async function database(req, res, next) {
    if (!client.isConnected()) await client.connect()
    req.dbClient = client
    req.db = client.db("MCT")
    return next()
}

const middleware = nextConnect()

middleware.use(database)

export default middleware