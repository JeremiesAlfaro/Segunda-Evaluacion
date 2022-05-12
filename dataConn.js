const sql = require('mssql');

const dbSetting = {
    user: 'root',
    password: '1234',
    server: 'localhost',
    database: 'parcial2_a01282692',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

async function getConnection(){
    try{
        const pool = await sql.connect(dbSetting);
        return pool;
    }
    catch(error){
        console.error(error);
    }
}

module.exports = {
    getConnection: getConnection
}