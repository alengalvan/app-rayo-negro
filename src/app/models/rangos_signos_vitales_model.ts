export class rangos_signos_vitales_model_response {
  rango_signo_vital_id: number;
  rango_signo_vital_usuario_id: number;
  rango_signo_vital_ca_parametro_id: number;
  rango_signo_vital_rango_inicial: number;
  rango_signo_vital_rango_inicial_b: number;
  rango_signo_vital_rango_final: number;
  rango_signo_vital_rango_final_b: number;
  rango_signo_vital_rango_par: boolean;
  rango_signo_vital_bnd_mano: number;
  rango_signo_vital_nombre_parametro?: string;
  rango_signo_vital_descripcion_parametro?: string;
  rango_signo_vital_bnd_personalizados?: number;
}

export class rangos_signos_vitales_model_request {
  rango_signo_vital_id?: number;
  rango_signo_vital_usuario_id: number;
  rango_signo_vital_ca_parametro_id: number;
  rango_signo_vital_rango_inicial: number;
  rango_signo_vital_rango_inicial_b: number;
  rango_signo_vital_rango_final: number;
  rango_signo_vital_rango_final_b: number;
  rango_signo_vital_rango_par: boolean;
  rango_signo_vital_bnd_mano: number;
}

export class list_rangos_vitales_model_request {
  list_json: Array<rangos_signos_vitales_model_request>;
}

export class componente_valor_rango_model {
  lower: number;
  upper: number;
}