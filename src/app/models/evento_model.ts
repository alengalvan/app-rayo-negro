export class evento_model_response {
  tbl_evento_aprobado?: boolean;
  tbl_evento_cancelado?: boolean;
  tbl_evento_comentario?: string;
  tbl_evento_correo_responsable_Campo_Abierto?: string;
  tbl_evento_correo_solicitante_Campo_Abierto?: string;
  tbl_evento_descripcion?: string;
  tbl_evento_espacio_nombre?: string;
  tbl_evento_espacio_descripcion?: string;
  tbl_evento_fecha_inicio?: string;
  tbl_evento_fecha_registro?: Date;
  tbl_evento_folio?: string;
  tbl_evento_hora_fin?: string;
  tbl_evento_hora_inicio?: string;
  tbl_evento_id_centro_costo?: number;
  tbl_evento_id_espacio?: number;
  tbl_evento_id_responsable?: number;
  tbl_evento_id_solicitante?: number;
  tbl_evento_idInstancia?: number;
  tbl_evento_nombre?: string;
  tbl_evento_otros_servicios?: string;
  tbl_evento_privado?: boolean;
  tbl_evento_responsable_Campo_Abierto?: string;
  tbl_evento_responsable_nombre?: string;
  tbl_evento_solicitante_Campo_Abierto?: string;
  tbl_evento_id?: number;
  idioma: string;
}

export class evento_model_request {
  public tbl_evento_id?: number;
  public tbl_evento_idInstancia?: number;
  public tbl_evento_nombre?: string;
  public tbl_evento_descripcion?: string;
  public tbl_evento_id_espacio?: number;
  public tbl_evento_id_solicitante?: number;
  public tbl_evento_fecha_inicio?: Date;
  public tbl_evento_hora_inicio?: string
  public tbl_evento_hora_fin?: string;
  public tbl_evento_privado?: boolean;
  public tbl_evento_aprobado?: boolean;
  public tbl_evento_cancelado?: boolean;
  public tbl_evento_comentario?: string;
  public tbl_evento_id_responsable?: number;
  public tbl_evento_id_centro_costo?: number;
  public tbl_evento_fecha_registro?: Date;
  public tbl_evento_otros_servicios?: string;
  public tbl_evento_folio?: string;
  public idioma: string;
}

export class evento_invitados_model_response {
  id?: number;
  tbl_evento_id?: number;
  tbl_usuario_id?: number;
  nombre?: string;
  correo_electronico?: string;
  codigo_acceso?: string;
  asistencia?: boolean;
  invitados_json?: evento_invitados_model_response[];
  requiere_estacionamiento?: number;
  tbl_espacios_individuales_id?: number;
  tbl_espacios_individuales_nombre?: string;
  idioma: string;
}

export class evento_invitados_model_request {
  id?: number;
  tbl_evento_id?: number;
  tbl_usuario_id?: number;
  nombre?: string;
  correo_electronico?: string;
  asistencia?: boolean;
  invitados_json?: evento_invitados_model_response[];
  requiere_estacionamiento?: number;
  tbl_espacios_individuales_id?: number;
  idioma: string;
}

export class evento_informacion_basica_model {
  tbl_evento_id?: number;
  tbl_evento_folio?: string;
  tipo_accion?: number;
}

export class evento_completo_model {
  paramEvento?: evento_model_response;
  paramInvitado?: evento_invitados_model_response;
}
