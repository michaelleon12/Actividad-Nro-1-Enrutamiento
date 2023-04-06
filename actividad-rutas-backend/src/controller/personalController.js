let personal = [];
let idCounter = 1;
class Personal {
  getAll(req, res) {
    if (personal.length === 0) {
      res.json("No se encuentran personal registrados");
    } else {
      res.json(personal);
    }
  }

  create(req, res) {
    req.body.id = idCounter++;
    req.body.solicitante = false;
    personal.push(req.body);
    res.status(201).json(req.body);
    return personal;
  }

  getAllSolicitantes(req, res) {
    const solicitantes = personal.filter((personal) => personal.solicitante);
    if (solicitantes.length === 0) {
      res.json("No se encuentran solicitantes registrados");
    } else {
      res.json(solicitantes);
    }
  }

  createSolicitante(req, res) {
    req.body.id = idCounter++;
    req.solicitante = true;
    personal.push(req.body);
    res.status(201).json(req.body);
    return personal;
  }
}

module.exports = new Personal();
