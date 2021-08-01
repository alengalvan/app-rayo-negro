export class usuario_model_response {
    public usuario_id?: number;
    public usuario_usuario: string;
    public usuario_contrasenia: string;
    public usuario_activo?: boolean;
    public usuario_ca_rol_id: number;
    public usuario_token_notificacion: string;
    public usuario_recibe_notificacion: boolean;
    public nombre_rol: string;
    public descripcion_rol: string;
    public usuario_version_app?: string;
    public usuario_version_app_fecha_actualizacion?: Date;
    public usuario_ca_sistema_operativo_id?: number;
    public usuario_ca_sistema_operativo?: string;
}

export class usuario_model_request {
    public usuario_id: number;
    public usuario_usuario?: string;
    public usuario_contrasenia?: string;
    public usuario_activo?: boolean;
    public usuario_ca_rol_id?: number;
    public usuario_token_notificacion?: string;
    public usuario_recibe_notificacion?: boolean;
    public tipoOperacion?: number;
    public autorizacion_aplicacion?: string;
    public usuario_version_app?: string;
    public usuario_version_app_fecha_actualizacion?: Date;
    public usuario_ca_sistema_operativo_id?: number;
}
