export class enfermedades_model_request {

    public enfermedades_id?: number;
    public enfermedades_nombre?: string;
    public enfermedades_descripcion?: string;
    public enfermedades_activo?: boolean;
    public enfermedades_ca_nivel_riesgo_id?: number;
    public tbl_instancia_id?: number;
}

export class enfermedades_model_response {
    public enfermedades_id?: number;
    public enfermedades_nombre?: string;
    public enfermedades_descripcion?: string;
    public enfermedades_activo?: boolean;
    public enfermedades_ca_nivel_riesgo_id?: number;
    public tbl_instancia_id?: number;
}

export class enfermedades_disponibles_model_response {
    public seleccionado: boolean;
    public enfermedad: enfermedades_model_response;
    public enfermedadUsuario?: enfermedad_usuario_model;
}

export class enfermedad_usuario_model {
    public enfermedades_usuario_enfermedad_id: number;
    public enfermedades_usuario_usuario_id: number;
    public enfermedades_usuario_tiempo_padecimiento: number;
    public enfermedades_usuario_tratamiento: any;
}