// routes/auth.js
const express = require("express");
const router = express.Router();
const Usuario = require("../Models/Users");
const { generarToken } = require("../utils/auth");

router.post("/login", async (req, res) => {
  const { rut, dv, password } = req.body;
  const user = await Usuario.findOne({ rut, dv, password });
  if (!user) return res.status(401).json({ mensaje: "Credenciales inválidas" });

  const token = generarToken(user._id);
  res.json({ token });
});

module.exports = router;