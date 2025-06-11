import EstadoHabilitacion from "./EstadoHabilitacion";
import Usuario from "./Usuario";

export default class AuditoriaUsuario {
  fecha_auditoria: Date = new Date();
  usuario: Usuario = new Usuario();
  administrador: Usuario = new Usuario();
  estado_habilitacion: EstadoHabilitacion = new EstadoHabilitacion();
}
