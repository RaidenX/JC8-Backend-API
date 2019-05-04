const mysql = require('mysql')

const conn = mysql.createConnection({
    user: 'expressmysqluser',
    password: '11223344@@##',
    host: 'db4free.net',
    database: 'expressmysqldb',
    port: '3306'
})

module.exports = conn



