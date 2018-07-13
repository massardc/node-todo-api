const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something you should do',
  //   completed: false
  // }, (err, res) => {
  //   if (err) {
  //     console.log('Unable to insert todo.', err);   
  //   }

  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });
   
  // Insert new doc into Users 
  // db.collection('Users').insertOne({
  //   name: 'Clem',
  //   age: 28,
  //   location: 'Paris (so far)'
  // }, (err, res) => {
  //   if (err) {
  //     console.log('Unable to insert user.', err);
  //   }
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });

  client.close();
});