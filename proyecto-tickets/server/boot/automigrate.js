'use strict';

module.exports = function(app){
    app.dataSources.postgre1.autoupdate(['turno', 'consulta', 'usuario_atencion', 'estado', 'numero_puesto','User','usuario'], err =>{
        if (err) throw err;
        console.log('Models Synced');
    })
}

