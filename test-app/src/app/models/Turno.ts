export class Turno{
    id:number;
    id_turno:string;
    tipo_consulta:string;
    activo:boolean;
    id_usuario_atencion:string;
    fecha_hora_emision:Date;
    fecha_hora_inicio?:Date;
    fecha_hora_fin?:Date;
    consulta_id:number;
    usuarios_id:number;
    estado_id:number;
    no_puesto: number;
    
}