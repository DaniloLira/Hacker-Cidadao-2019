const bcrypt = require("bcryptjs");
const Pool = require("pg").Pool;
const pool = new Pool({
    user: "danil",
    host: "localhost",
    database: "acidentes",
    password: "19512790010",
    port: 5432
});

pool.on("error", (err, client) => {
    console.error("Unexpected error on idle client", err);
    process.exit(-1);
});

module.exports = {
    async store(req, res) {
    const {     tipoAcidente,
            tipoVeiculoI,
            tipoVeiculoV,
            airbag,
            capacete,
            cinto} = req.body;

        console.log(cinto)
        console.log(tipoAcidente)
        console.log(tipoVeiculoI)
        console.log(tipoVeiculoV)
        console.log(airbag)
        console.log(capacete)
        pool.query(
            "INSERT INTO formulario (tipoAcidente, tipoVeiculoI, tipoVeiculoV, airbag, capacete, cinto) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id", [tipoAcidente,tipoVeiculoI, tipoVeiculoV, airbag, capacete, cinto],
            (error, results) => {
                if (error) {
                    console.log(error.stack);
                }
                response = JSON.parse(`{\"response\" : \"User added with ID: ${results.rows[0].id}\"}`)
                res.status(201).send(response);
            }
        );
    },

    async update(req, res) {
        const {
            nome,
            cpf,
            sexo,
            idade,
            estadoFisico,
            telefone,
            id
        } = req.body;

        pool.query(
            "UPDATE formulario SET nome = $1, cpf = $2, sexo = $3, idade = $4, estadoFisico = $5, telefone = $5  WHERE id = $6 RETURNING id", [nome, cpf,
                sexo,
                idade,
                estadoFisico,
                telefone, id],
            (error, results) => {
                if (error) {
                    console.log(error.stack);
                }
                response = JSON.parse(`{\"response\" : \"User added with ID: ${results.rows[0].id}\"}`)
                res.status(201).send(response);
            }
        );
    } 

};