export class patologias_model_response {
  public patologia_id?: number;
  public patologia_id_parametro?: number;
  public patologia_descripcion?: string;
  public patologia_nombre?: string;
  public patologia_activo?: boolean;
  public patologia_descripcion_parametro_nombre?: string;
  public patologia_descripcion_parametro_id?: string;
  public patologia_tbl_instancia_id?: number;
  public patologia_codigo_color?: string;
  public patologia_clave?: number;
  public patologia_comentario?: string;
  public patologia_comentario_ingles?: string;
}

export class patologias_model_request {
  public patologia_activo?: boolean;
  public patologia_id_parametro?: number;
  public patologia_tbl_instancia_id?: number;
}