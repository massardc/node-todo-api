const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');
  const db = client.db('TodoApp');

  // db.collection('Todos').find().toArray().then((docs) => {
  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
    // console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos.', err);
  });

  db.collection('Users').find({
    age: {
      $gt: 20,
      $lt: 30
    }
  }).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to find users.', err);
  });

  // client.close();
});