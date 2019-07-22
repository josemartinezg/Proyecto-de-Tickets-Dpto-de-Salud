select age(fecha_hora_fin, fecha_hora_inicio)
from turno;

select age(fecha_hora_fin, fecha_hora_inicio)
where tipo_consulta = 'Estudiante'
from turno;

select avg(age(fecha_hora_fin, fecha_hora_inicio))
from turno;
select avg(age(fecha_hora_inicio, fecha_hora_emision))
from turno;

/*Promedio de tiempo de consulta por tipo de consulta. */
select avg(age(fecha_hora_fin, fecha_hora_inicio))
from turno
where tipo_consulta = 'Piscina';
select avg(age(fecha_hora_fin, fecha_hora_inicio))
from turno
where tipo_consulta = 'Empleado';
select avg(age(fecha_hora_fin, fecha_hora_inicio))
from turno
where tipo_consulta = 'Contratista';
select avg(age(fecha_hora_fin, fecha_hora_inicio))
from turno
where tipo_consulta = 'Certificacion Medica';
select avg(age(fecha_hora_fin, fecha_hora_inicio))
from turno
where tipo_consulta = 'Emergencia';

/*Promedio de tiempo de espera por tipo de consulta. */
select avg(age(fecha_hora_inicio, fecha_hora_emision))
from turno
where tipo_consulta = 'Piscina';
select avg(age(fecha_hora_inicio, fecha_hora_emision))
from turno
where tipo_consulta = 'Empleado';
select avg(age(fecha_hora_inicio, fecha_hora_emision))
from turno
where tipo_consulta = 'Contratista';
select avg(age(fecha_hora_inicio, fecha_hora_emision))
from turno
where tipo_consulta = 'Certificacion Medica';
select avg(age(fecha_hora_inicio, fecha_hora_emision))
from turno
where tipo_consulta = 'Emergencia';

/*Tiempo de visita promedio */
select avg(age(fecha_hora_fin, fecha_hora_emision))
from turno;