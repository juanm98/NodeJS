const Model = require('./Model')

function addUser(user) {
  const myUser = new Model(user);
  return myUser.save();
}

function getUsers() {
  const users = Model.find();
  return users
}
module.exports = {
  add: addUser,
  list: getUsers
}