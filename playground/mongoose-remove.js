const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose')
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// Remove with query
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Remove one with query
// Todo.findOneAndRemove({}).then((result) => {
//   console.log(result);
// });

// Remove one by ID
Todo.findByIdAndRemove('id').then((result) => {
  console.log(result);
});
