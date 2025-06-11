import Domicilio from "./Domicilio";
import EstadoHabilitacion from "./EstadoHabilitacion";
import Rol from "./Rol";
import Telefono from "./Telefono";

export default class Usuario {
  nombre: String = "";
  apellido: String = "";
  email: String = "";
  fecha_nacimiento: Date = new Date();
  rol: Rol = new Rol();
  domicilio: Domicilio = new Domicilio();
  telefono: Telefono = new Telefono();
  estado_habilitacion: EstadoHabilitacion = new EstadoHabilitacion();
}
