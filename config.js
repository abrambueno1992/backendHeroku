require('dotenv').config()
// require('dotenv').config()
const mysecret = `${process.env.SESSION_SECRET}`;
module.exports = {
    mysecret
}