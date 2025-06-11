import Club from "./Club";
import Deporte from "./Deporte";
import EstadoHabilitacion from "./EstadoHabilitacion";
import TipoSuperficie from "./TipoSuperficie";

export default class Cancha {
  nro_cancha: number = 0;
  techada: boolean = false;
  deporte: Deporte = new Deporte();
  tipo_superficie: TipoSuperficie = new TipoSuperficie();
  club: Club = new Club();
  estado_habilitacion: EstadoHabilitacion = new EstadoHabilitacion();
}
