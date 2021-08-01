export class espacios_reservables_disponibles_model_response {
  public espacio_disponible_id: number;
  public espacio_disponible_nombre: string;
  public espacio_disponible_descripcion: string;
  public espacio_disponible_capacidad: number;
  public espacio_disponible_activo: boolean;
  public espacio_disponible_tbl_areas: number;
  public espacio_disponible_capacidad_limitada: number;
  public espacio_disponible_reservable: boolean;
  public espacio_disponible_ca_reservable: number;
  public espacio_disponible_area_nombre: string;
  public espacio_disponible_area_descripcion: string;
  public espacio_disponible_area_instancia: number;
  public espacio_disponible_area_reservable: boolean;
  public espacio_disponible_area_capacidad_reservable: any;
  public espacio_disponible_area_activo: boolean;
  public espacio_disponible_sub_area_id: number;
  public espacio_disponible_sub_area_capacidad_reservable: string;
  public espacio_disponible_sub_area_descripcion: string;
  public espacio_disponible_sub_area_cap_reservable: string;
  public espacio_disponible_sub_area_reservable: number;
  public espacio_disponible_sub_area_activo: number;
  public espacio_disponible_piso_nombre: string;
  public espacio_disponible_piso_descripcion: string;
  public espacio_disponible_sub_instancia_nombre: string;
  public espacio_disponible_sub_instancia_direccion: string;
  public espacio_disponible_sub_instancia_ubicacion: any;
  public espacio_disponible_sub_instancia_id?: number;
}

export class estacionamientos_disponibles_model_response {
  public estacionamiento_id?: number;
  public estacionamiento_nombre?: string;
  public estacionamiento_descripcion?: string;
  public estacionamiento_reservable?: boolean;
  public estacionamiento_activo?: boolean
  public estacionamiento_areas_id?: number;
  public estacionamiento_areas_nombre?: string;
  public estacionamiento_areas_descripcion?: string;
  public estacionamiento_areas_activo?: boolean;
  public estacionamiento_areas_reservable?: boolean;
  public estacionamiento_areas_estacionamiento?: any;
  public estacionamiento_pisos_id?: number;
  public estacionamiento_pisos_nombre?: string;
  public estacionamiento_pisos_activo?: string;
  public estacionamiento_sub_instancia_id?: number;
  public estacionamiento_sub_instancia_nombre?: string;
  public estacionamiento_sub_instancia_direccion?: string;
  public estacionamiento_sub_instancia_ubicacion?: any;
  public estacionamiento_sub_instancia_activo?: boolean;

}

export class espacio_reservable_model_response {
  espacio_disponible_id?: number;
  espacio_disponible_nombre?: string;
  espacio_disponible_descripcion?: string;
  espacio_disponible_capacidad?: number;
  espacio_disponible_activo?: boolean;
  espacio_disponible_tbl_areas?: number;
  espacio_disponible_capacidad_limitada?: number;
  espacio_disponible_reservable?: boolean;
  espacio_disponible_ca_reservable?: number;
  espacio_disponible_requiere_autorizacion?: boolean;
  espacio_disponible_area_nombre?: string;
  espacio_disponible_area_descripcion?: string;
  espacio_disponible_area_instancia?: number;
  espacio_disponible_area_reservable?: boolean;
  espacio_disponible_area_capacidad_reservable?: number;
  espacio_disponible_area_activo?: boolean;
  espacio_disponible_sub_area_id?: number;
  espacio_disponible_sub_area_capacidad_reservable?: string;
  espacio_disponible_sub_area_descripcion?: string;
  espacio_disponible_sub_area_cap_reservable?: string;
  espacio_disponible_sub_area_reservable?: number;
  espacio_disponible_sub_area_activo?: number;
  espacio_disponible_piso_id?: number;
  espacio_disponible_piso_nombre?: string;
  espacio_disponible_piso_descripcion?: string;
  espacio_disponible_sub_instancia_id?: number;
  espacio_disponible_sub_instancia_nombre?: string;
  espacio_disponible_sub_instancia_direccion?: string;
  espacio_disponible_sub_instancia_ubicacion?: string
}

export class espacio_reservable_model_request {
  espacio_disponible_id?: number;
  espacio_disponible_nombre?: string;
  espacio_disponible_descripcion?: string;
  espacio_disponible_capacidad?: number;
  espacio_disponible_activo?: boolean;
  espacio_disponible_tbl_areas?: number;
  espacio_disponible_capacidad_limitada?: number;
  espacio_disponible_reservable?: boolean;
  espacio_disponible_ca_reservable?: number;
  espacio_disponible_requiere_autorizacion?: boolean;
  espacio_disponible_area_nombre?: string;
  espacio_disponible_area_descripcion?: string;
  espacio_disponible_area_instancia?: number;
  espacio_disponible_area_reservable?: boolean;
  espacio_disponible_area_capacidad_reservable?: number;
  espacio_disponible_area_activo?: boolean;
  espacio_disponible_sub_area_id?: number;
  espacio_disponible_sub_area_capacidad_reservable?: string;
  espacio_disponible_sub_area_descripcion?: string;
  espacio_disponible_sub_area_cap_reservable?: string;
  espacio_disponible_sub_area_reservable?: number;
  espacio_disponible_sub_area_activo?: number;
  espacio_disponible_piso_id?: number;
  espacio_disponible_piso_nombre?: string;
  espacio_disponible_piso_descripcion?: string;
  espacio_disponible_sub_instancia_id?: number;
  espacio_disponible_sub_instancia_nombre?: string;
  espacio_disponible_sub_instancia_direccion?: string;
  espacio_disponible_sub_instancia_ubicacion?: string
}