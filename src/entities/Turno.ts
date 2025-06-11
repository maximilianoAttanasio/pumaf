import Cancha from "./Cancha";

export default class Turno {
  fecha: Date = new Date();
  hora_inicio: String = "";
  duracion: Number = 0;
  precio: Number = 0;
  porcentaje_reserva: Number = 0;
  disponible: Boolean = true;
  cancha: Cancha = new Cancha();
}
