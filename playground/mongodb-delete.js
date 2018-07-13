const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');
  const db = client.db('TodoApp');

  // Delete Many
  // db.collection('Todos').deleteMany({text: 'Window shopping'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete documents.', err);
  // })

  // Delete One
  // db.collection('Todos').deleteOne({text: 'Grocery shopping'}).then((result) => {
  //   console.log(results);
  // }, (err) => {
  //   console.log('Unable to delete document', err);
  // })

  // Find One And Delete
  db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
    console.log(result);
  })


  // client.close();
});