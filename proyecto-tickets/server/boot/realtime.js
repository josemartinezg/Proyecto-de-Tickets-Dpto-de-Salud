// var es = require('event-stream');
// module.exports = function(app) {
//   var turno = app.models.turno;
//   turno.createChangeStream(function(err, changes) {
//     changes.pipe(es.stringify()).pipe(process.stdout);
//   });
//   turno.create({
//     id_turno: "AA002",
//     tipo_consulta: "Estudiante",
//     id_usuario_atencion: 2,
//     fecha_hora_emision: "2019-07-06 16:23:58.115-04"
//   });
// }