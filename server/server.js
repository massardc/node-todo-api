const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });

var newTodo2 = new Todo({
  text: 'Clean home',
  completed: false,
  completedAt: new Date()
})

newTodo2.save().then((doc) => {
  console.log('Saved Todo', doc);
}, (err) => {
  console.log('Unable to save Todo', err);
});
