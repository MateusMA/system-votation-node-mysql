const key = require('../../variables');

async function connect(){
    if(global.connect && global.connect.state !== 'disconnected')
        return global.connect

        const mysql = require('mysql2/promise')
        const connection = await mysql.createConnection('mysql://' + key.credential + '@127.0.0.1:3306/votacao')
        global.connect = connection
        console.log('connected')
        return connection
    
}

async function selectVotation(){
    const conn = await connect()
    const [rows] = await conn.query('SELECT * FROM tbl_votacao;')
    return await rows
}

async function insertVotation(survey){
    const conn = await connect()

    const sql = 'INSERT INTO tbl_votacao '
    + '(titulo, data_inicio, data_fim, '
    + 'opcao_1, opcao_2, opcao_3) '
    + 'VALUES (?, ?, ?, ?, ?, ?);'

    const values = [survey.titulo, survey.data_inicio, survey.data_fim, survey.opcao_1,
        survey.opcao_2, survey.opcao_3]

    await conn.query(sql, values)
}

async function updateVotation(id, number){
    const conn = await connect()
    //  Simplification:
    //  UPDATE tbl_votacao SET votos_1 = votos_1 + 1 WHERE id = 1;
    const sql = 'UPDATE tbl_votacao SET votos_' + number + ' = votos_'+ number + '+ 1 WHERE id = ' + id;

    await conn.query(sql)
}

async function deleteVotation(id){
    const conn = await connect()

    const sql = 'DELETE FROM tbl_votacao WHERE id = ' + id;

    await conn.query(sql)
}

module.exports = {selectVotation, insertVotation, updateVotation, deleteVotation}