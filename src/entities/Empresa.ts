import Domicilio from "./Domicilio";
import EstadoHabilitacion from "./EstadoHabilitacion";
import Telefono from "./Telefono";

export default class Empresa {
  razon_social: String = "";
  domicilio: Domicilio = new Domicilio();
  telefono: Telefono = new Telefono();
  estado_habilitacion: EstadoHabilitacion = new EstadoHabilitacion();
}
