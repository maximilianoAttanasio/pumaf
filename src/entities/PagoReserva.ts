import Reserva from "./Reserva";
import TipoPago from "./TipoPago";

export default class PagoReserva {
  fecha_pago: Date = new Date();
  reserva: Reserva = new Reserva();
  tipo_pago: TipoPago = new TipoPago();
}
