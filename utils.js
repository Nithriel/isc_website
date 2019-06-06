const MongoClient = require('mongodb').MongoClient;

var _dbUser = null;

getDb = () => {
    return _dbUser;
};

getObjectId = () => {
    return require('mongodb').ObjectID;
};

init = (callback) => {
    var MONGODB_URI = 'mongodb+srv://RaphaelPletz:Pletz2000@rpgseytheir-l3lko.mongodb.net/isc_db?retryWrites=true';
    MongoClient.connect(MONGODB_URI, (err, client) => {
        if (err) {
            return console.log('Unable to connect to DB');
        }
        _dbUser = client.db();
        console.log('Successfully connected to MongoDB server');
    });
};

module.exports = {
    getDb: getDb,
    getObjectId: getObjectId,
    init: init
};