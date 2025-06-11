import Reserva from "./Reserva";
import Usuario from "./Usuario";

export default class Notificacion {
  fecha_enviada: Date = new Date();
  detalle: String = "";
  reserva: Reserva = new Reserva();
  usuario: Usuario = new Usuario();
}
