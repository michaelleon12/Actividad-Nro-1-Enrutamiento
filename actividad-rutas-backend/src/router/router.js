const express = require("express");
const router = express.Router();
const {
  getAll,
  getById,
  create,
  update,
  delete: deleteController,
} = require("../controller/equiposController");
const {
  create: createPersonal,
  createSolicitante,
  getAll: getAllPersonal,
  getAllSolicitantes,
} = require("../controller/personalController");

const {
  createEspacio,
  deleteEspacio,
  getAllEspacio,
  getByIdEspacio,
  updateEspacio,
} = require("../controller/espaciosController");

const {
agregarReserva,
getReservarEspacioRangoFech,
getReservasEspacioAll,
getReservasEspacioPorDia
} = require("../controller/reservaEspacioController");

const {
 agregarReservaEquipo,
 getReservarEquipoRangoFech,
 getReservasEquipoAll,
 getReservasEquipoPorDia
  } = require("../controller/reservaEquipoController");

router.get("/equipos", getAll);
router.get("/equipos/:id", getById);
router.post("/equipos", create);
router.put("/equipos/:id", update);
router.delete("/equipos/:id", deleteController);

router.get("/personal", getAllPersonal);
router.post("/personal", createPersonal);

router.get("/solicitantes", getAllSolicitantes);
router.post("/solicitantes", createSolicitante);

router.get("/espacios", getAllEspacio);
router.get("/espacios/:id", getByIdEspacio);
router.post("/espacios", createEspacio);
router.put("/espacios/:id", updateEspacio);
router.delete("/espacios/:id", deleteEspacio);

router.post('/reservas-espacios', agregarReserva);
router.get('/reservas-espacios', getReservasEspacioAll);
router.get('/reservas-espacios/:dia', getReservasEspacioPorDia);
router.get('/reservas-espacios/:fechaInicio/:fechaFin', getReservarEspacioRangoFech);


router.post('/reservas-equipos', agregarReservaEquipo);
router.get('/reservas-equipos', getReservasEquipoAll);
router.get('/reservas-equipos/:dia', getReservasEquipoPorDia);
router.get('/reservas-equipos/:fechaInicio/:fechaFin', getReservarEquipoRangoFech);

module.exports = {
  router,
};
