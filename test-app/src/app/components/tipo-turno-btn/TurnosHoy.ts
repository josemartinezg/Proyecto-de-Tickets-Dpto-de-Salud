export class TurnosHoy{
    codigo:string;
    active:boolean = true;

    getTurno(tipo_consulta, count){
            switch(tipo_consulta){
                case "Estudiante":
                    this.codigo = "EST"+count; 
                break;
                case "Empleado":
                        this.codigo = "EMP"+count; 
                break;
                case "Contratista":
                        this.codigo = "CNT"+count; 
                break;
                case "Piscina":
                        this.codigo = "PSC"+count; 
                break;
                case "Certificacion Medica":
                        this.codigo = "CFM"+count; 
                break;
                case "Emergencia":
                        this.codigo = "EMG"+count; 
                break;
            }
            return this.codigo;

        }

        getDate(){
                var today = new Date();
                var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                var time = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()+"."+today.getUTCMilliseconds();
                var dateTime = date+' '+time;
                
                return dateTime;
                //console.log("'" + dateTime + ' ' + turno + "'");
        }
}

