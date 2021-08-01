export class noticias_model_response {
    noticias_id: number;
    noticias_titulo: string;
    noticias_titulo_ingles: string;
    noticias_contenido: string;
    noticias_contenido_ingles: string;
    noticias_uri_imagen: string;
    noticias_fecha: string;
    noticias_activo: boolean;
    noticias_tipo_noticia_id: number;        
    cargada?:boolean;
    base64: string;
    titulo?:string;
}