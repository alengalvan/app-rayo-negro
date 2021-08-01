export class encuestas_model_response {

    encuestas_activo: boolean;
    encuestas_descripcion: string;
    encuestas_id: number;
    encuestas_nombre: string;
    pregunta_descripcion: string;
    pregunta_descripcion_ingles: string;
    pregunta_id: number;
    pregunta_nombre: string;
    pregunta_nombre_ingles: string;
    respuest_descripcion_ingles: string;
    respuesta_descripcion: string;
    respuesta_id: number;
    respuesta_ponderacion: number;
    respuesta_respuesta: string;
    respuesta_respuesta_ingles: string;
    respuesta_tipo_id: number;
    respuesta_tipo_nombre: string;
    tipo_respuesta_rango_max: number;
    tipo_respuesta_rango_min: number;
    valueLineasDivisoras: any;


    // Mal hecho se usa un modelo para 2 propositos diferntes, se dejará así porque no hay tiempo de corregirlo.
    respuesta_pregunta_id: number;
    respuesta_respuesta_id: number;
    respuesta_seleccionada?: boolean;
    informacion_parentesco?: string;
    encuesta_usuario_contestada?: boolean;
    encuesta_usuario_nombre?: string;
    encuesta_usuario_descripcion?: string;

}

export class encuestas_model_request {
    asg_respuestas_usuario_informacion_usuario_id: number;
    asg_respuestas_usuario_encuestas_id: number;
    asg_respuestas_usuario_pregunta_id: number;
    asg_respuestas_usuario_respuestas_id: number;
    asg_respuestas_usuario_valor?: string;
    encuestas_tbl_instancia_id: number;
    asg_encuesta_usuario_id?: number;
}

export class encuestas_params_model {
    informacion_parentesco?: string;
    encuesta_usuario_contestada: boolean;
    encuesta_usuario_descripcion: string;
    encuesta_usuario_encuesta_id: number;
    encuesta_usuario_fecha: Date;
    encuesta_usuario_id: number
    encuesta_usuario_informacion_usuario_id: number
    encuesta_usuario_nombre: string;
    encuesta_usuario_nivel?: number;
}
