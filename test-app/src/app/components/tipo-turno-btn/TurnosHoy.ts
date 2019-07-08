export class TurnosHoy{
    codigo:string;
    active:boolean = true;

    getTurno(tipo_consulta, count){
            switch(tipo_consulta){
                case "Estudiante":
                    this.codigo = "EST00"+count; 
                break;
                case "Empleado":
                        this.codigo = "EMP00"+count; 
                break;
                case "Contratista":
                        this.codigo = "CNT00"+count; 
                break;
                case "Piscina":
                        this.codigo = "PSC00"+count; 
                break;
                case "Certificación Médica":
                        this.codigo = "CFM00"+count; 
                break;
                case "Emergencia":
                        this.codigo = "EMG00"+count; 
                break;
            }
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

