
export class asg_registros_lecturas_model_request {
    public id?: number;
    public informacion_usuario_id?: number; // id información usuario.
    public valor?: string;
    public dispositivo_id?: number;
    public tipo_operacion?: number;
    public fecha?: string;
    public bnd_store_foward?: boolean;
    public dispositivo_parametro_id?: number; // Filtrar por el tipo de lectura.
    public fecha_inicio?: string; // Filtrar desde la fecha.
    public fecha_fin?: string; // Filtrar desde hasta fecha.
    public numero_lecturas?: number // Para traer las últimas N lecturas del usuario
    public idioma?: string;
}

export class informacion_lecturas_model_response {
    public lectura_valor: string;
    public lectura_fecha: string;
    public dispositivo_nombre: string;
    public dispositivo_direccion_mac: string;
    public parametro_descripcion: string;
    public parametro_id: number;

    public parametro_nombre: string;
    public lectura_fuera_rango: number;
    public patologia_id?: number;
    public patologia_nombre?: string;
    public patologia_descripcion?: string;
    public patologia_codigo_color?: string;

    public rango_clave?: string
    public rango_comentario?: string;
    public rango_comentario_ingles?: string;
    public visto?: boolean;

    public valor_sis?: number;
    public valor_dias?: number;
}

export class horaSuenio_model {
  public horas?: number;
  public minutos?: number;
}

export class diaHoraSuenio_model {
  public dias?: number;
  public horas?: number;
  public minutos?: number;
}

export class informacion_lecturas_suenio_model_response {
  public minutos?: number;
  public lectura_fecha?: Date;
  public dispositivo_direccion_mac?: string;
  public parametro_descripcion?: string;
  public parametro_nombre?: string;
  public patologia_nombre?: string;
  public patologia_descripcion?: string;
  public patologia_codigo_color?: string;
  public tiempo_total_tipo_sueno?: string;
  public porcentaje_total?: string;
  public tiempo_total_horas_sueno?: string;
  public tiempo_total_horas_profundo_ligero_sueno?: string;
  public porcentaje_sueno_profundo?: string;
  public porcentaje_sueno_ligero?: string;
  public patologia_id?: number;
  public calidad_sueno?: string;
}

export class informacion_lecturas_suenio_detalle_model_response {
  public lectura_valor?: string;
  public lectura_fecha?: string;
  public dispositivo_nombre?: string;
  public dispositivo_direccion_mac?: string;
  public parametro_descripcion?: string;
  public parametro_nombre?: string;
  public parametro_id?: number;
  public lectura_fuera_rango?: number;
  public patologia_id?: number;
  public patologia_nombre?: string;
  public patologia_descripcion?: string;
  public patologia_codigo_color?: string;
  public rango_clave?: string;
  public rango_comentario?: string;
  public rango_comentario_ingles?: string;
  public horario_inicio?: string;
  public horario_fin?: string;
  public visto?: boolean;
  public visto_rango_horas?: boolean;
  public porcentaje_total?: string;
  public lectura_valor_horas?: string;
  public cadena_horas_totales?: string;
}

export class informacion_lecturas_suenio_grup_model_response {
  public fecha?: string;
  public sueno_ligero?: informacion_lecturas_suenio_detalle_model_response;
  public sueno_profundo?: informacion_lecturas_suenio_detalle_model_response;
  public despierto?: informacion_lecturas_suenio_detalle_model_response;
  public horas_totale_suenos?: number;
}

export class informacion_lecturas_pasos_calorias_model_response {
    public fecha?: string;
    public valor_pasos?: number;
    public valor_calorias?: number;
}

export class pasos_calorias_model_request{
    public id_dispositivo?: number;
    public valor?: string;
    public dispositivo_parametro_id?: number;
    public fecha?: string;
}
