let equipos = [];
let nextId = 1;

class EquiposController {
  getAll(req, res) {
    if (equipos.length === 0) {
      res.json("No se encuentran equipos registrados");
    } else {
      res.json(equipos);
    }
  }

  getById(req, res) {
    const id = req.params.id;
    const equipo = equipos.find((equipo) => equipo.id == id);
    if (equipo) {
      res.json(equipo);
    } else {
      res.status(404).json("No existe el equipo solicitado");
    }
  }

  create(req, res) {
    req.body.id = nextId++;
    req.body.disponibilidad = true;
    equipos.push(req.body);
    res.status(201).json(req.body);
  }

  update(req, res) {
    const id = req.params.id;
    const index = equipos.findIndex((equipo) => equipo.id == id);
    if (index >= 0) {
      const equipo = req.body;
      equipo.id = Number(id);
      equipo.disponibilidad = equipos[index].disponibilidad;
      equipos[index] = equipo;
      res.json(equipo);
    } else {
      res.status(404).json("No se pudo actualizar ya que no existe el equipo");
    }
  }

  delete(req, res) {
    const id = req.params.id;
    const index = equipos.findIndex((equipo) => equipo.id == id);
    if (index >= 0) {
      equipos.splice(index, 1);
      res.status(200).json("Eliminado correctamente");
    } else {
      res.status(404).json("No se pudo eliminar ya que no existe el equipo");
    }
  }
}

module.exports = new EquiposController();
