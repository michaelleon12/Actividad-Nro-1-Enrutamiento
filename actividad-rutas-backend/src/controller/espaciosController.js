let espacios = [];
let nextId = 1;

class EspaciosController {
  getAllEspacio(req, res) {
    if (espacios.length === 0) {
      res.json("No se encuentran espacios registrados");
    } else {
      res.json(espacios);
    }
  }

  getByIdEspacio(req, res) {
    const id = req.params.id;
    const espacio = espacios.find((espacio) => espacio.id == id);
    if (espacio) {
      res.json(espacio);
    } else {
      res.status(404).json("No existe el espacio solicitado");
    }
  }

  createEspacio(req, res) {
    req.body.id = nextId++;
    espacios.push(req.body);
    res.status(201).json(req.body);
  }

  updateEspacio(req, res) {
    const id = req.params.id;
    const index = espacios.findIndex((espacio) => espacio.id == id);
    if (index >= 0) {
      const espacio = req.body;
      espacio.id = Number(id);
      espacios[index] = espacio;
      res.json(espacio);
    } else {
      res.status(404).json("No se pudo actualizar el espacio");
    }
  }

  deleteEspacio(req, res) {
    const id = req.params.id;
    const index = espacios.findIndex((espacio) => espacio.id == id);
    if (index >= 0) {
      espacios.splice(index, 1);
      res.status(200).json("Eliminado correctamente");
    } else {
      res.status(404).json("No se pudo eliminar el espacio");
    }
  }
}

module.exports = new EspaciosController();
