import Domicilio from "./Domicilio";
import Empresa from "./Empresa";
import EstadoHabilitacion from "./EstadoHabilitacion";
import Telefono from "./Telefono";

export default class Club {
  nombre_fantasia: String = "";
  logo: String = "";
  domicilio: Domicilio = new Domicilio();
  telefono: Telefono = new Telefono();
  empresa: Empresa = new Empresa();
  estado_habilitacion: EstadoHabilitacion = new EstadoHabilitacion();
}
