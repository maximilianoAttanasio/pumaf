import PagoReserva from "./PagoReserva";

export default class DatosMercadoPago {
  fecha_creado: Date = new Date();
  fecha_aprovado: Date = new Date();
  estado: String = "";
  estado_detalle: String = "";
  id_metodo_pago: String = "";
  pagoReserva: PagoReserva = new PagoReserva();
}
