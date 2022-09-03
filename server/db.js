const Pool = require('pg').Pool
const pool = new Pool({
    user:'postgres',
    password:'su',
    host:'localhost',
    port:5432,
    database:'tea_store'
})

module.exports = pool