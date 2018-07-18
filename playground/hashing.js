const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

const data = {
  id: 44
};

const token = jwt.sign(data, 'mysecret');
console.log('token', token);

const decoded = jwt.verify(token, 'mysecret');
console.log('decoded', decoded);

// const message = 'I am Clem';
// const hash = SHA256(message).toString();

// console.log(message);
// console.log(hash);

// var data = {
//   id: 4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//   console.log('Data not changed.');
// } else {
//   console.log('Data changed. Do not trust!');
// }