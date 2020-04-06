'use strict'
const crypto = require('crypto');
module.exports = {
  create: async function (password) {
    let rval = await this.hash(password, 'puppy');
    return rval.hash;
  },
  //
  // when the user gives you a password pass that password
  // as the first parameter and the hash and salt you
  // previously saved as the second and third parameters
  //
  // the function returns true of the user entered the
  // correct password
  //
  verify: async function (password, cb) {
    let hash = await this.hash(password, 'puppy');
    cb(hash.hash)
  },
  hash: async function (password, salt) {
    return new Promise((resolve, reject) => {
      let hasher = crypto.createHmac('sha512', salt);
      let hash = hasher.update(password);
      let iterations = 25000;
      function doOne() {
        hash.update(password);
        if (iterations--) {
          process.nextTick(doOne);
        } else {
          resolve({
            salt: salt,
            hash: hash.digest('hex')
          });
        }
      }
      doOne();
    });
  }
};