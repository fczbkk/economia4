function createUser (name) {
  var username = name;
  return {
    getName: function () {return username;},
    setName: function (name) {username = name;}
  }
}


module.exports = {
  createUser: createUser
};