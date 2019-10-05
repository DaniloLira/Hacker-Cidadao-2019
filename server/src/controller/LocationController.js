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
    const { latitude, longitude, timestamp } = req.body;
    pool.query(
      "INSERT INTO location (latitude,longitude,timestamp) VALUES ($1, $2, $3) RETURNING id",
      [latitude, longitude, timestamp],
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
