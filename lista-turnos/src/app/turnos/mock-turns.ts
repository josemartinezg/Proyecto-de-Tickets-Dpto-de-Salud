import { ITurno } from './turnos.model';
import { Turno } from '../models/Turno'
export const Turnos : ITurno[] = [
    {
        id: 1,
        id_turno: "AA004",
        tipo_consulta: "Estudiante",
        activo: true,
        id_usuario_atencion: "sorodriguez",
        fecha_hora_emision: new Date(),
        consulta_id: 1,
        usuarios_id: 2,
        estado_id: 1
    }
];