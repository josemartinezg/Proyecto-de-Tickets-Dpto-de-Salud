export class TurnosHoy{
    codigo:string;
    count:number = 0;
    active:boolean = true;

    getTurno(tipo_consulta){
        this.count ++;
        switch(tipo_consulta){
            case "Estudiante":
                this.codigo = "EST00"+this.count; 
            break;
            case "Empleado":
                    this.codigo = "EMP00"+this.count; 
            break;
            case "Contratista":
                    this.codigo = "CNT00"+this.count; 
            break;
            case "Piscina":
                    this.codigo = "PSC00"+this.count; 
            break;
            case "Certificación Médica":
                    this.codigo = "CFM00"+this.count; 
            break;
            case "Emergencia":
                    this.codigo = "EMG00"+this.count; 
            break;
        }

    }
}

