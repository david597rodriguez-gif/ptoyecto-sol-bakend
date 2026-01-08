const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "david",
password: "1234",
database: "tienda_veterinaria_sol",

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Error conectando a MySQL:", err.message);
  } else {
    console.log("✅ Conectado a MySQL - Tienda Veterinaria SOL");
    connection.release();
  }
});

module.exports = pool;
