const mysql = require('mysql')

const conn = mysql.createConnection({
    user: 'root',
    password: '11223344@@##',
    host: 'localhost',
    database: 'ujianbackend',
    port: '3306'
})

module.exports = conn



