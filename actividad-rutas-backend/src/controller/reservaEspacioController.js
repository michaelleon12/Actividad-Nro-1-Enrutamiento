let reservas = [];
let nextId = 1;
class ReservasEspacioController {
  agregarReserva(req, res) {
    const reserva = req.body;
    reserva.id = nextId++;
    reservas.push(reserva);
    res.status(201).json(reserva);
  }

  getReservasEspacioAll(req, res) {
    if (reservas.length === 0) {
      res.json("No hay reservas de espacios registradas");
    } else {
      res.json(reservas);
    }
  }

  getReservasEspacioPorDia(req, res) {
    const dia = req.params.dia;
    const reservasDia = reservas.filter((reserva) => reserva.fecha === dia);
    if (reservasDia.length === 0) {
      res.json(`No hay reservas para el día ${dia}`);
    } else {
      res.json(reservasDia);
    }
  }

  getReservarEspacioRangoFech(req, res) {
    const fechaInicio = new Date(req.params.fechaInicio);
    const fechaFin = new Date(req.params.fechaFin);
    const reservasRangoFech = reservas.filter(
      (reserva) =>
        new Date(reserva.fecha) >= fechaInicio &&
        new Date(reserva.fecha) <= fechaFin
    );
    if (reservasRangoFech.length === 0) {
      res.json("No hay reservas en el rango de fechas especificado");
    } else {
      res.json(reservasRangoFech);
    }
  }
}

module.exports = new ReservasEspacioController();
