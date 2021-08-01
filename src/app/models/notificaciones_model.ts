export class notificaciones_model_response {
    public tbl_notificaciones_id: number;
    public tbl_notificaciones_nombre: string;
    public tbl_notificaciones_nombre_en: string;
    public tbl_notificaciones_descripcion: string;
    public tbl_notificaciones_descripcion_en: string;
    public tbl_notificaciones_modulos_id: number
    public tbl_notificaciones_visto: boolean;
    public tbl_notificaciones_fecha: string;
    public tbl_modulos_route: string;
    public usuario_usuario: string;
    public tbl_usuarios_id: number;
    public tbl_notificaciones_parametro: string;
}
export class notificaciones_model_request {
    public tbl_notificaciones_id: number;
    public tbl_notificaciones_nombre: string;
    public tbl_notificaciones_descripcion: string;
    public tbl_notificaciones_modulos_id: number
    public tbl_notificaciones_visto: boolean;
    public tbl_notificaciones_fecha: string;
    public tbl_usuarios_id: number;
    public tbl_notificaciones_parametro: string;
}