export class enfermedades_usuario_model_request {
    public enfermedades_usuario_enfermedad_id: number;
    public enfermedades_usuario_usuario_id?: number;
    public enfermedades_usuario_tiempo_padecimiento?: number;
    public enfermedades_usuario_tratamiento: boolean;
}

export class enfermedades_model_reponse {
    public enfermedades_id: number;
    public enfermedades_nombre: string;
    public enfermedades_descripcion: string;
    public enfermedades_activo: boolean;
    public enfermedades_nivel_riesgo_id: number;
    public enfermedades_nive_riesgo_nombre: string;
    public enfermedades_padecimiento: number;
    public enfermedades_tratamiento: boolean;
}