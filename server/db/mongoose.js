const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://clem:todoapp02@ds155299.mlab.com:55299/todoapp', { useNewUrlParser: true });

module.exports = {mongoose};