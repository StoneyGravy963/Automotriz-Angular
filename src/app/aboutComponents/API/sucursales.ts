export interface Sucursal {
  id_sucursal: number;
  nombre: string;
  ubicacion: Ubicacion;
  horario: Horario;
  contacto: Contacto;
}

interface Ubicacion {
  direccion: string;
}

interface Horario {
  lunes_a_viernes: string;
  sabado: string;
  domingo: string;
}

interface Contacto {
  telefono: string;
  correo: string;
  whatsapp: string;
}