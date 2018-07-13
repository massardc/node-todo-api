const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// var newTodo = new Todo({
//   text: 'Clean home',
//   completed: false,
//   completedAt: new Date()
// })

// newTodo.save().then((doc) => {
//   console.log('Saved Todo', doc);
// }, (err) => {
//   console.log('Unable to save Todo', err);
// });


var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  }
});

var newUser = new User({
  email: 'email@address.com    '
});

newUser.save().then((doc) => {
  console.log(doc);
}, (err) => {
  console.log('Unable to save user.', err);
});
