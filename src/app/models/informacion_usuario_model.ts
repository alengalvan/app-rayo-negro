import { enfermedades_model_reponse, enfermedades_usuario_model_request } from './enfermedades_usuario_model';



export class informacion_usuario_model_response {

    public informacion_id: number;
    public informacion_nombre: string;
    public informacion_apellidopaterno: string;
    public informacion_apellidomaterno: string;
    public informacion_peso: number;
    public informacion_estatura: number;
    public informacion_edad: number;
    public informacion_usuario_id?: number;
    public informacion_sexo_id?: number;
    public informacion_transporte_id?: number;
    public informacion_usuario_padre?: number;
    public informacion_parentesco_id?: number;
    public informacion_parentesco: string;
    public informacion_parentesco_en: string;
    public informacion_telefono: string;
    public informacion_estatus_usuario_id: number;
    public informacion_ubicacion: string;
    public informacion_activo: boolean;
    public informacion_usuario: string;
    public informacion_sexo: string;
    public informacion_transporte: string;
    public informacion_estatus: string;
    public informacion_covid: boolean;
    public informacion_valoracion_completa: boolean;
    public informacion_num_familiares: number;
    public informacion_p_terminos: boolean;
    public informacion_codigo_postal: string;
    public informacion_correo_electronico: string;
    public informacion_tbl_factor_id: number;
    public informacion_embarazo?: number;
    public informacion_codigo_recuperar_cuenta: string;
    public informacion_codigo_recuperar_cuenta_fecha: Date;
    public informacion_codigo_telefono_pais: string;

    public informacion_lista_enfermedades: Array<enfermedades_model_reponse>;
    public informacion_lista_familiares: Array<informacion_usuario_model_response>;

    // custom
    public nombreCompleto?: string;

}

export class informacion_usuario_model_request {
    public informacion_tbl_instancia_id?: number;
    public informacion_id?: number;
    public informacion_nombre?: string;
    public informacion_apellidopaterno?: string;
    public informacion_apellidomaterno?: string;
    public informacion_peso?: number;
    public informacion_estatura?: number;
    public informacion_edad?: Date;
    public informacion_usuario_id?: number;
    public informacion_sexo_id?: number;
    public informacion_transporte_id?: number;
    public informacion_usuario_padre?: number;
    public informacion_parentesco_id?: number;
    public informacion_telefono?: string;
    public informacion_codigo_telefono_pais?: string;
    public informacion_codigo_postal?: number;
    public informacion_correo_electronico?: string;
    public informacion_estatus_usuario_id?: number;
    public informacion_ubicacion?: string;
    public informacion_covid?: boolean;
    public informacion_valoracion_completa?: boolean;
    public informacion_num_familiares?: number;
    public informacion_tbl_factor_id?: number;
    public informacion_embarazo?: number;
    public informacion_sistema_medicion_clave?: number;
    public informacion_lista_enfermedades?: Array<enfermedades_usuario_model_request>;
    public informacion_lista_familiares?: Array<informacion_usuario_model_request>;
}

export class informacion_usuario_verificacion_model_request {
    public informacion_id: number;
    public informacion_telefono: string;
    public informacion_edad: Date;
    public informacion_ubicacion: string;
}

export class informacion_usuario_valoracion_model_request {
    public informacion_id: number;
    public informacion_usuario_id?: number;
    public informacion_codigo_postal?: string;
    public informacion_correo_electronico?: string;
    public informacion_peso?: number;
    public informacion_estatura?: number;
    public informacion_covid?: boolean
    public informacion_sexo_id?: number;
    public informacion_lista_enfermedades?: Array<enfermedades_usuario_model_request>;
    public informacion_lista_familiares?: Array<any>;
    public informacion_transporte_id?: number;
    public informacion_tbl_factor_id?: number;
    public informacion_num_familiares?: number;
    public informacion_valoracion_completa?: boolean;
    public informacion_embarazo?: number;
}