import EstadoReserva from "./EstadoReserva";
import Reserva from "./Reserva";
import Usuario from "./Usuario";

export default class AuditoriaReserva {
  fecha_auditoria: Date = new Date();
  reserva: Reserva = new Reserva();
  estado_reserva: EstadoReserva = new EstadoReserva();
  usuario: Usuario = new Usuario();
}
