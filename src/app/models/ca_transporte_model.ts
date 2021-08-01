export class transporte_model_request {

    public transporte_id?: number;
    public transporte_nombre?: string;
    public transporte_descripcion?: string;
    public transporte_activo?: boolean;
    public transporte_ca_nivel_riesgo_id?: number;
    public tbl_instancia_id?: number;

}

export class transporte_model_response {
    transporte_id: number;
    transporte_nombre: string;
    transporte_descripcion: string;
    transporte_nombre_riego: string;
    transporte_activo: boolean;
    transporte_ca_nivel_riesgo_id: number;
    tbl_instancia_id: number;
}