const express = require("express");
const router = express.Router();

// "Base de datos" temporal en memoria
let productos = [];

// --- CREATE (POST) ---
router.post("/", (req, res) => {
  const nuevoProducto = { id: Date.now(), ...req.body };
  productos.push(nuevoProducto);
  res.status(201).json(nuevoProducto);
});

// --- READ (GET) ---
router.get("/", (req, res) => {
  res.json(productos);
});

// --- UPDATE (PUT) ---
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = productos.findIndex(p => p.id === id);

  if (index !== -1) {
    productos[index] = { id, ...req.body };
    res.json(productos[index]);
  } else {
    res.status(404).json({ message: "Producto no encontrado" });
  }
});

// --- DELETE ---
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = productos.findIndex(p => p.id === id);

  if (index !== -1) {
    productos.splice(index, 1); // elimina producto
    res.json({ message: "Producto eliminado" });
  } else {
    res.status(404).json({ message: "Producto no encontrado" });
  }
});

module.exports = router;

