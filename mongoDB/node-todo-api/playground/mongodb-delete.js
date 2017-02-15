// const MongoClient = require('mongodb').MongoClient;
// no need for the .MongoClient at the end when we're using object destructuring
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) =>  {
    if(err) {
        return console.log('unable to connect');
    }
    console.log('connected to mongo');

// deleteMany

// deleteOne

// findOneAndDelete

// db.close();
});