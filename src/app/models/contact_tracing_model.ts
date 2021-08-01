// Se envía desde móvil al servidor.
export class contact_tracing_sender_model {
    public direccion_mac: string; // direccion mac dle usuario que está detectando.
    public direccion_mac_detectada: string; // mac address detectada (cercana)
    public rssi: number; // Received Signal Strength Indicator
    public distancia: number; // en metros que tan cerca está.
    public fecha: string; // fecha del contacto.
}

// Registro final guardado por el backend.
export class asg_contact_tracing_model {
    public informacion_usuario_id: number; // usuario que está detectando.
    public dispositivo_id: number // dispositivo que está detectando.
    public informacion_usuario_id_detectado: number; // usuario detectado
    public dispositivo_id_detectado: number; // dispositivo detectado.
    public distancia: number; // distancia en metros uno del otro.
    public fecha: string; // fecha del acercamiento.
    public instancia_id: number; // instancia del usuario que está detectando.
}

export class contact_tracing_sender_list_model {
    list_contact_tracing: Array<contact_tracing_sender_model>;
}