const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose')
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// var id = '5b4c8d47230052064fa79123';
var id = '5b4c8d47230052064fa7912311';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid.');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found.');
//   }
//   console.log('Todo By ID', todo);
// })

User.findById('5b48b16400bad00b6a1ce090').then((user) => {
  if (!user) {
    return console.log('ID not found.');
  }
  console.log(JSON.stringify(user));
}, (err) => {
  console.log('Error finding ID', err);
})