import Cancha from "./Cancha";
import EstadoHabilitacion from "./EstadoHabilitacion";
import Usuario from "./Usuario";

export default class AuditoriaCancha {
  fecha_auditoria: Date = new Date();
  cancha: Cancha = new Cancha();
  usuario: Usuario = new Usuario();
  estado_habilitacion: EstadoHabilitacion = new EstadoHabilitacion();
}
