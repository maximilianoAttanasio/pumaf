import Club from "./Club";
import EstadoHabilitacion from "./EstadoHabilitacion";
import Usuario from "./Usuario";

export default class AuditoriaClub {
  fecha_auditoria: Date = new Date();
  club: Club = new Club();
  usuario: Usuario = new Usuario();
  estado_habilitacion: EstadoHabilitacion = new EstadoHabilitacion();
}
