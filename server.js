const express = require("express");
const cors = require("cors");

require("./db/database"); // solo para ejecutar la conexión

const app = express();
const PORT = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const productosRoutes = require("./routes/productos");

app.get("/", (req, res) => {
  res.send("Servidor backend de Tienda Virtual Veterinaria SOL funcionando 🐾");
});

app.use("/productos", productosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
