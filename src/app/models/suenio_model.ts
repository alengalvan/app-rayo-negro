export class suenio_model_request {
  fecha_inicio: string;
  fecha_fin: string;
  tipo: number;
  tiempo_continuo: number;
}

export class suenio_model_response {
  year: number;
  month: number;
  day: number;
  hour: number;
  minutes: number;
  sleepId: number;
}

export class suenio_tramas {
  rellenoLigero?: boolean;
  dispositivo_id: number;
  valor: string;
  dispositivo_parametro_id: number;
  tipoSueño: number;
  fecha: Date;
  fechaMili: number;
  fechaFin: Date;
  fechaFinMili: number;
  tiempoSueño: number;
  estado?: string;
  caso?: string;
}

export class suenio_tramas_post {
  valor: string;
  dispositivo_id: number;
  dispositivo_parametro_id: number;
  fecha: string;
  fecha_fin?: string;
}