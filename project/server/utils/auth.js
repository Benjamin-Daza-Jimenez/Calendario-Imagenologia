// utils/auth.js
const jwt = require("jsonwebtoken");

const SECRET = "tu_clave_secreta"; // Idealmente usar dotenv para ocultar

// Genera un token con el ID del usuario
function generarToken(idUsuario) {
  return jwt.sign({ id: idUsuario }, SECRET, { expiresIn: "1h" });
}

// Middleware para verificar token en rutas protegidas
function verificarToken(req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ mensaje: "Acceso denegado" });

  try {
    const verificado = jwt.verify(token, SECRET);
    req.usuario = verificado;
    next();
  } catch (err) {
    res.status(400).json({ mensaje: "Token inválido" });
  }
}

module.exports = { generarToken, verificarToken };