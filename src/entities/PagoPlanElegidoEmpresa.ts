import Empresa from "./Empresa";
import PlanElegido from "./PlanElegido";

export default class PagoPlanElegidoEmpresa {
  fecha_pago: Date = new Date();
  total_pagado: Number = 0;
  empresa: Empresa = new Empresa();
  plan_elegido: PlanElegido = new PlanElegido();
}
