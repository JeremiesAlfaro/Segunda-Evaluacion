const dataConn = require('./dataConn');
const sql = require('mssql');

const getAlumnos = async(req, res) => {
    const pool = await dataConn.getConnection();
    const result = await pool.request().query('select Id,Nombre,Identificador,Email,Carrera from alumnos');
    return res.json(result.recordset);
};

const getAlumnoById = async(req, res) => {
    const { id } = req.params;
    const pool = await dataConn.getConnection();
    const result = await pool.request()
        .input("id", sql.Int, id)
        .query('select Id,Nombre,Identificador,Email,Carrera from alumnos where id = @id');
    return res.json(result.recordset);
};

const createAlumno = async (req, res) => {
    const{ name, identificador, email, carrera } = req.body;

    const pool = await dataConn.getConnection();
    await pool.request()
        .input("Nombre", sql.VarChar, name)
        .input("Identificador", sql.VarChar, identificador)
        .input("Email", sql.VarChar, email)
        .input("Carrera", sql.VarChar, carrera)
        .query('insert into alumnos(Nombre, Identificador, Email, Carrera) values(@name, @identificador, @email, @carrera)');
    return res.json('Ok');
};

const deleteAlumno = async (req, res) => {
    const{ id } = req.params;

    const pool = await dataConn.getConnection();
    await pool.request()
        .input("id", sql.Int, id)
        .query('delete alumnos where id = @id');
    return res.json('Ok');
}

const updateAlumno = async (req, res) => {
    const { id, name, identificador, email, carrera } = req.body;
    const pool = await dataConn.getConnection();

    pool.request()
        .input("Id", sql.Int, id)
        .input("Nombre", sql.VarChar, name)
        .input("Identificador", sql.VarChar, identificador)
        .input("Email", sql.VarChar, email)
        .input("Carrera", sql.VarChar, carrera)
        .query('update alumnos set Nombre = @name, Identificador = @identificador, Email = @email, Carrera = @carrera where id = @id');
    return res.json("ok");
}

module.exports = {
    getAlumnos: getAlumnos,
    getAlumnoById: getAlumnoById,
    createAlumno: createAlumno,
    deleteAlumno: deleteAlumno,
    updateAlumno: updateAlumno
}