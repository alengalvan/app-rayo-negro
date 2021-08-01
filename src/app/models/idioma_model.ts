export class idioma_model_response {

    public ca_idiomas_app_id: number;
    public ca_idiomas_app_nombre: string;
    public ca_idiomas_app_descripcion: string;
    public ca_idiomas_app_descripcion_externa: string;
    public ca_idiomas_app_activo: boolean;
    public ca_idiomas_app_url_archivo: string;
    public ca_idiomas_app_fecha_actualizacion: string;
    public ca_idiomas_app_tbl_aplicacion_tipo_aplicacion_id: number;
    public ca_idiomas_ca_sistema_medicion_clave: number;
    public base64: string;

}

export class idioma_actualizacion_model {
    nombre: string;
    fechaActualizacion: Date;
}
