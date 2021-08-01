export interface generic_web_get_model_response {
    response: Array<any>,
    success: boolean
    status: number,
    currentException: any
}

export interface generic_web_post_model_response {
    currentException: string;
    mensaje: string;
    respuesta: string;
    status: boolean;
    success: boolean
}

export interface token_web_post_model_response {
    token: string
}