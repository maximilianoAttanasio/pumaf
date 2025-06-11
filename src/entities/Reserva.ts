import Turno from "./Turno";
import EstadoReserva from "./EstadoReserva";
import Usuario from "./Usuario";

export default class Reserva {
  fecha: Date = new Date();
  turno: Turno = new Turno();
  estado_reserva: EstadoReserva = new EstadoReserva();
  usuario: Usuario = new Usuario();
}
