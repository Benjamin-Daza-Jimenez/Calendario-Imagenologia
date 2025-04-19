const { Router } = require('express');
const router = Router();

const { getHs, getH, createH, updateH, deleteH } = require('../Controllers/c_horas.js');

// Ruta para obtener todas las horas
router.route("/")
    .get(getHs)  // Obtener todas las horas
    .post(createH);  // Crear una nueva hora

// Ruta para obtener, actualizar o eliminar una hora específica por ID
router.route("/:id")
    .get(getH)  // Obtener una hora específica por ID
    .put(updateH)  // Actualizar una hora específica por ID
    .delete(deleteH);  // Eliminar una hora específica por ID

module.exports = router;