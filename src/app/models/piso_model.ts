export class piso_por_instancia_model_request {
    id_instancia?: number;
}

export class piso_por_instancia_model_response {
    piso_id?: number;
    piso_nombre?: string;
    piso_descripcion?: string;
    piso_activo?: boolean;
    piso_sub_instancia_id?: number;
    piso_sub_instancia_nombre?: string;
    piso_instancia_id?: number;
    piso_instancia_nombre?: string;
}