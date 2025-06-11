import Empresa from "./Empresa";
import EstadoHabilitacion from "./EstadoHabilitacion";
import Usuario from "./Usuario";

export default class AuditoriaEmpresa {
  fecha_auditoria: Date = new Date();
  empresa: Empresa = new Empresa();
  usuario: Usuario = new Usuario();
  estado_habilitacion: EstadoHabilitacion = new EstadoHabilitacion();
}
