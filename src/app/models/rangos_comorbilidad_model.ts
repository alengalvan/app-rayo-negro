export class RangosComorbilidadModelRequest {
  public comorbilidad_parametro_id?: number;
  public comorbilidad_instancia_id?: number;
  public comorbilidad_usuario_id?: number;
}

export class RangosComorbilidadModelResponse {
  public comorbilidad_rango_inicial?: number;
  public comorbilidad_rango_final?: number;
  public comorbilidad_parametro_nombre?: string;
  public comorbilidad_parametro_nombre_ingles?: string;
  public comorbilidad_patologia_nombre?: string;
  public comorbilidad_patologia_nombre_ingles?: string;
  public comorbilidad_color?: string;
  public cormobilidad_bnd_presion_arterial?: number;
}

export class TablaRangosComorbilidadPresion {
  public comorbilidad_parametro_nombre?: string;
  public comorbilidad_parametro_nombre_ingles?: string;
  public comorbilidad_patologia_nombre?: string;
  public comorbilidad_patologia_nombre_ingles?: string;
  public comorbilidad_color?: string;
  public comorbilidad_rango_inicial_sistolica?: number;
  public comorbilidad_rango_final_sistolica?: number;
  public comorbilidad_rango_inicial_diastolica?: number;
  public comorbilidad_rango_final_diastolica?: number;
}